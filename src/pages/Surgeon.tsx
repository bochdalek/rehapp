import { useEffect, useMemo, useState, type ReactNode } from "react";
import QRCode from "qrcode";
import { Copy, ExternalLink, LogOut, Printer, Save, Share2, Trash2 } from "lucide-react";
import { getProcedure, groupedProcedures, PROCEDURES } from "../data/procedures";
import { PATTERNS, type SavedTemplate } from "../data/templates";
import { CLINIC } from "../data/clinic";
import type { Procedure, Restrictions } from "../data/types";
import { Button } from "../components/ui";
import MedicoGate from "../components/MedicoGate";
import { dateAtWeek, formatDate, patientLink, todayKey, withArticle, type PatientConfig } from "../lib/config";
import { encodeShort, shortCodeProblem } from "../lib/shortcode";
import { useStored } from "../lib/storage";

const base = "rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base";
const input = `w-full ${base}`;
const num = `w-20 shrink-0 ${base}`;
const label = "mb-1 block text-sm font-medium text-slate-700";

interface TeamDefaults {
  dr?: string;
  tel?: string;
}

function Step({ n, title, hint, children }: { n: number; title: string; hint?: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-display text-2xl leading-none font-semibold text-brand-300">{n}</span>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          {hint && <p className="text-sm text-slate-500">{hint}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function WeekField({ value, onChange, label: l }: { value?: number; onChange: (v?: number) => void; label: string }) {
  return (
    <label className="block">
      <span className={label}>{l}</span>
      <input
        type="number"
        min={0}
        max={31}
        inputMode="numeric"
        className={num}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value === "" ? undefined : Number(e.target.value))}
      />
    </label>
  );
}

const same = (a: Restrictions, b: Restrictions) =>
  (["noWeightUntil", "partialUntil", "noLiftUntil", "device", "deviceUntil"] as const).every((k) => (a[k] ?? 0) === (b[k] ?? 0));

export default function Surgeon() {
  return <MedicoGate>{(lock) => <Planner onLock={lock} />}</MedicoGate>;
}

function Planner({ onLock }: { onLock: () => void }) {
  const [team, setTeam] = useStored<TeamDefaults>("rehapp.team", { dr: CLINIC.team, tel: CLINIC.phone });
  const [saved, setSaved] = useStored<SavedTemplate[]>("rehapp.templates", []);
  const [procId, setProcId] = useState(PROCEDURES[0].id);
  const proc = getProcedure(procId) as Procedure;
  const [date, setDate] = useState(todayKey());
  const [side, setSide] = useState<"izq" | "der" | "">("");
  const [name, setName] = useState("");
  const [r, setR] = useState<Restrictions>(proc.defaults);
  const [starts, setStarts] = useState<number[]>(proc.phases.map((p) => p.fromWeek));
  const [note, setNote] = useState("");
  const [rev, setRev] = useState("");
  const [qr, setQr] = useState("");
  const [copied, setCopied] = useState<"" | "link" | "code">("");

  const changeProc = (id: string) => {
    const p = getProcedure(id)!;
    setProcId(id);
    setR(p.defaults);
    setStarts(p.phases.map((ph) => ph.fromWeek));
  };

  const loadTemplate = (t: SavedTemplate) => {
    const p = getProcedure(t.p);
    if (!p) return;
    setProcId(t.p);
    setR(t.r);
    setStarts(t.ph.length === p.phases.length ? t.ph : p.phases.map((ph) => ph.fromWeek));
    setNote(t.note ?? "");
  };

  const saveTemplate = () => {
    const n = prompt("Nombre de la plantilla:", proc.name);
    if (!n?.trim()) return;
    setSaved((prev) => [...prev, { id: String(Date.now()), name: n.trim(), p: procId, r, ph: starts, note: note.trim() || undefined }]);
  };

  const config: PatientConfig = useMemo(() => {
    const c: PatientConfig = { p: procId, d: date };
    if (side) c.s = side;
    if (name.trim()) c.n = name.trim();
    if (!same(r, proc.defaults)) c.r = r;
    if (starts.some((s, i) => s !== proc.phases[i].fromWeek)) c.ph = starts;
    if (note.trim()) c.note = note.trim();
    if (team.dr?.trim()) c.dr = team.dr.trim();
    if (team.tel?.trim()) c.tel = team.tel.trim();
    if (rev) c.rev = rev;
    return c;
  }, [procId, proc, date, side, name, r, starts, note, team, rev]);

  const startsValid = starts.every((s, i) => i === 0 || s > starts[i - 1]);
  const link = patientLink(config);
  const short = startsValid ? encodeShort(config, proc) : null;
  const shortProblem = shortCodeProblem(config, proc);
  const isLower = proc.limb === "inferior";
  const patterns = PATTERNS.filter((p) => p.limb === proc.limb);
  const protocolActive = same(r, proc.defaults);

  useEffect(() => {
    QRCode.toDataURL(link, { margin: 1, width: 480, errorCorrectionLevel: "M" }).then(setQr, () => setQr(""));
  }, [link]);

  const copy = async (text: string, what: "link" | "code") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(what);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      prompt("Copia:", text);
    }
  };

  const share = () => {
    const text = `Tu plan de recuperación. Ábrelo en este enlace${short ? ` o escribe el código ${short} en la app` : ""}:`;
    if (navigator.share) navigator.share({ title: "Tu plan de recuperación", text, url: link }).catch(() => {});
    else copy(`${text} ${link}`, "link");
  };

  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1.5 text-sm font-medium ${
      active ? "border-brand-700 bg-brand-700 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-brand-400"
    }`;

  return (
    <div className="min-h-dvh">
      <header className="no-print border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <p className="flex items-center gap-2 font-semibold text-brand-700">
            <span className="size-3 rotate-45 bg-brand-700" aria-hidden="true" /> RehApp · equipo médico
          </p>
          <button onClick={onLock} className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900">
            <LogOut className="size-4" /> Cerrar sesión
          </button>
        </div>
      </header>

      <div className="no-print mx-auto max-w-6xl px-4 py-6 lg:py-10">
        <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl">Crear el plan de un paciente</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Elige la intervención y la pauta, y entrega al paciente el QR, el enlace o el código corto. No se guarda nada en ningún servidor.
        </p>

        {saved.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-slate-700">Mis plantillas</p>
            <div className="flex flex-wrap gap-2">
              {saved.map((t) => (
                <span key={t.id} className="inline-flex items-center rounded-full border border-brand-300 bg-white">
                  <button onClick={() => loadTemplate(t)} className="py-1.5 pr-1 pl-3 text-sm font-medium text-brand-800">
                    {t.name}
                  </button>
                  <button
                    onClick={() => confirm(`¿Borrar la plantilla «${t.name}»?`) && setSaved((prev) => prev.filter((x) => x.id !== t.id))}
                    className="p-1.5 pr-2 text-slate-400 hover:text-red-600"
                    aria-label={`Borrar plantilla ${t.name}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-5">
            <Step n={1} title="Intervención">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className={label}>Tipo de cirugía</span>
                  <select className={input} value={procId} onChange={(e) => changeProc(e.target.value)}>
                    {groupedProcedures().map((g) => (
                      <optgroup key={g.group} label={g.group}>
                        {g.items.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className={label}>Fecha de la cirugía</span>
                  <input type="date" className={input} value={date} onChange={(e) => e.target.value && setDate(e.target.value)} />
                </label>
                <label className="block">
                  <span className={label}>Lado</span>
                  <select className={input} value={side} onChange={(e) => setSide(e.target.value as "izq" | "der" | "")}>
                    <option value="">—</option>
                    <option value="izq">Izquierdo</option>
                    <option value="der">Derecho</option>
                  </select>
                </label>
              </div>
            </Step>

            <Step n={2} title="Pauta postoperatoria" hint="Elige una pauta habitual o ajusta las semanas a mano.">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setR(proc.defaults)} className={chip(protocolActive)}>
                  La del protocolo
                </button>
                {patterns.map((p) => (
                  <button key={p.id} onClick={() => setR({ ...r, ...p.r })} className={chip(!protocolActive && same({ ...r, ...p.r }, r))}>
                    {p.name}
                  </button>
                ))}
              </div>
              <div className="mt-5 grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
                {isLower ? (
                  <>
                    <WeekField
                      label="Sin apoyo hasta la semana"
                      value={r.noWeightUntil}
                      onChange={(v) => setR({ ...r, noWeightUntil: v })}
                    />
                    <WeekField
                      label="Apoyo parcial hasta la semana"
                      value={r.partialUntil}
                      onChange={(v) => setR({ ...r, partialUntil: v })}
                    />
                  </>
                ) : (
                  <>
                    <WeekField
                      label="Sin cargar peso hasta la semana"
                      value={r.noLiftUntil}
                      onChange={(v) => setR({ ...r, noLiftUntil: v })}
                    />
                    <div className="hidden sm:block" />
                  </>
                )}
                <label className="block">
                  <span className={label}>Ortesis / inmovilización</span>
                  <input
                    className={input}
                    value={r.device ?? ""}
                    placeholder="Ninguna"
                    onChange={(e) => setR({ ...r, device: e.target.value || undefined })}
                  />
                </label>
                {r.device && (
                  <WeekField label="Llevarla hasta la semana" value={r.deviceUntil} onChange={(v) => setR({ ...r, deviceUntil: v })} />
                )}
              </div>
              {isLower && (
                <p className="mt-3 text-sm text-slate-500">0 en las dos = apoyo completo según tolerancia desde el primer día.</p>
              )}
            </Step>

            <Step n={3} title="Fases" hint="Semana (desde la cirugía) en la que empieza cada fase.">
              <div className="space-y-3">
                {proc.phases.map((ph, i) => (
                  <label key={ph.title} className="flex items-center gap-3">
                    <input
                      type="number"
                      min={0}
                      max={31}
                      disabled={i === 0}
                      className={num}
                      value={starts[i]}
                      onChange={(e) => setStarts(starts.map((s, j) => (j === i ? Number(e.target.value) : s)))}
                    />
                    <span className="text-slate-700">
                      <span className="font-semibold">Fase {i + 1}.</span> {ph.title}
                    </span>
                  </label>
                ))}
              </div>
              {!startsValid && <p className="mt-3 font-medium text-red-700">Cada fase debe empezar después de la anterior.</p>}
            </Step>

            <Step n={4} title="Para el paciente" hint="Estos datos van en el QR y el enlace, no en el código corto.">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={label}>Nombre (solo para saludarle)</span>
                  <input className={input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej.: Carmen" />
                </label>
                <label className="block">
                  <span className={label}>Próxima revisión</span>
                  <input type="date" className={input} value={rev} onChange={(e) => setRev(e.target.value)} />
                </label>
                <label className="block sm:col-span-2">
                  <span className={label}>Indicaciones personales</span>
                  <textarea
                    className={input}
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Ej.: Heparina 1 vez al día durante 30 días. Retirada de grapas en su centro de salud el día 14."
                  />
                </label>
                <label className="block">
                  <span className={label}>Cirujano / equipo</span>
                  <input
                    className={input}
                    value={team.dr ?? ""}
                    onChange={(e) => setTeam({ ...team, dr: e.target.value })}
                    placeholder="Dr./Dra. …"
                  />
                </label>
                <label className="block">
                  <span className={label}>Teléfono de contacto</span>
                  <input className={input} type="tel" value={team.tel ?? ""} onChange={(e) => setTeam({ ...team, tel: e.target.value })} />
                </label>
              </div>
            </Step>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-medium text-slate-600">Código del paciente</p>
              {short ? (
                <>
                  <p className="mt-1 font-sans text-3xl font-bold tracking-wider text-slate-900 tabular-nums">{short}</p>
                  <button onClick={() => copy(short, "code")} className="mt-1 text-sm font-semibold text-brand-700">
                    {copied === "code" ? "¡Copiado!" : "Copiar código"}
                  </button>
                </>
              ) : (
                <p className="mt-1 text-sm text-amber-800">{startsValid ? shortProblem : "Corrige las fases para generar el código."}</p>
              )}
              <p className="mt-2 text-sm text-slate-500">El paciente lo escribe en la app. Útil para dictarlo por teléfono.</p>

              <div className="mt-5 border-t border-slate-200 pt-5 text-center">
                {qr && startsValid ? (
                  <img src={qr} alt="Código QR del plan" className="mx-auto w-56" />
                ) : (
                  <div className="mx-auto size-56 rounded-lg bg-slate-100" />
                )}
                <p className="mt-1 text-sm text-slate-500">QR completo, con nombre e indicaciones.</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button onClick={() => window.print()} disabled={!startsValid} className="col-span-2">
                  <Printer className="size-4" /> Imprimir hoja
                </Button>
                <Button variant="secondary" onClick={() => copy(link, "link")} disabled={!startsValid}>
                  <Copy className="size-4" /> {copied === "link" ? "¡Copiado!" : "Enlace"}
                </Button>
                <Button variant="secondary" onClick={share} disabled={!startsValid}>
                  <Share2 className="size-4" /> Enviar
                </Button>
                <Button variant="ghost" onClick={saveTemplate} className="col-span-2">
                  <Save className="size-4" /> Guardar como plantilla
                </Button>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="col-span-2 flex items-center justify-center gap-1 py-1 text-sm font-medium text-brand-800"
                >
                  <ExternalLink className="size-4" /> Ver como lo verá el paciente
                </a>
              </div>
            </div>
            <p className="mt-3 px-1 text-xs text-slate-500">Las plantillas, el equipo y el teléfono se guardan en este dispositivo.</p>
          </aside>
        </div>
      </div>

      <PrintSheet proc={proc} config={config} qr={qr} r={r} short={short} />
    </div>
  );
}

function PrintSheet({
  proc,
  config,
  qr,
  r,
  short,
}: {
  proc: Procedure;
  config: PatientConfig;
  qr: string;
  r: Restrictions;
  short: string | null;
}) {
  const lines: string[] = [];
  if (proc.limb === "inferior") {
    if (r.noWeightUntil) lines.push(`Sin apoyar el pie hasta el ${formatDate(dateAtWeek(config.d, r.noWeightUntil))}.`);
    if (r.partialUntil && r.partialUntil > (r.noWeightUntil ?? 0))
      lines.push(`Apoyo parcial con muletas hasta el ${formatDate(dateAtWeek(config.d, r.partialUntil))}.`);
    if (!r.noWeightUntil && !r.partialUntil) lines.push("Puede apoyar el pie según tolerancia desde el principio.");
  } else if (r.noLiftUntil) {
    lines.push(`No cargar peso con el brazo hasta el ${formatDate(dateAtWeek(config.d, r.noLiftUntil))}.`);
  }
  if (r.device && r.deviceUntil) lines.push(`Llevar ${withArticle(r.device)} hasta el ${formatDate(dateAtWeek(config.d, r.deviceUntil))}.`);
  const appUrl = window.location.href.split("#")[0];

  return (
    <div className="print-only p-2 text-black">
      <h1 className="text-3xl font-semibold">Tu plan de recuperación</h1>
      <p className="mt-1 text-lg">
        {config.n ? `${config.n} · ` : ""}
        {proc.name}
        {config.s ? ` (${config.s === "izq" ? "izquierdo" : "derecho"})` : ""}
      </p>
      <p>Fecha de la cirugía: {formatDate(config.d)}</p>
      <div className="mt-6 flex items-start gap-8">
        {qr && <img src={qr} alt="" className="w-52" />}
        <div>
          <p className="text-lg font-semibold">Cómo abrir tu plan</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>Abre la cámara de tu móvil, apunta a este código y toca el enlace que aparece.</li>
            {short && (
              <li>
                O entra en <span className="font-semibold">{appUrl}</span> y escribe tu código:{" "}
                <span className="text-xl font-bold tracking-wider">{short}</span>
              </li>
            )}
            <li>Para tenerla siempre a mano, añádela a la pantalla de inicio (menú «Compartir» → «Añadir a pantalla de inicio»).</li>
          </ol>
        </div>
      </div>
      {lines.length > 0 && (
        <>
          <p className="mt-6 text-lg font-semibold">Recuerda</p>
          <ul className="mt-1 list-disc pl-5">
            {lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </>
      )}
      {config.note && (
        <>
          <p className="mt-4 text-lg font-semibold">Indicaciones</p>
          <p className="whitespace-pre-line">{config.note}</p>
        </>
      )}
      {config.rev && <p className="mt-4">Próxima revisión: {formatDate(config.rev)}</p>}
      <p className="mt-6 font-semibold">
        Acude a Urgencias si tienes: dolor muy intenso que no cede, dedos fríos o azulados, fiebre con la herida roja o supurando, o dolor e
        hinchazón en la pantorrilla. Si te falta el aire o te duele el pecho, llama al 112.
      </p>
      {(config.dr || config.tel) && (
        <p className="mt-4">
          {config.dr} {config.tel && `· Tel. ${config.tel}`}
        </p>
      )}
    </div>
  );
}
