import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { ArrowLeft, Copy, ExternalLink, Printer, Share2 } from "lucide-react";
import { getProcedure, groupedProcedures, PROCEDURES } from "../data/procedures";
import type { Procedure, Restrictions } from "../data/types";
import { Button, Card } from "../components/ui";
import { navigate } from "../lib/router";
import { dateAtWeek, formatDate, patientLink, todayKey, type PatientConfig } from "../lib/config";
import { useStored } from "../lib/storage";

const base = "rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-teal-600 focus:outline-none";
const input = `w-full ${base}`;
const num = `w-20 shrink-0 ${base}`;
const label = "mb-1 block text-sm font-medium text-slate-700";

/** Datos del equipo que se recuerdan en el dispositivo del cirujano */
interface TeamDefaults {
  dr?: string;
  tel?: string;
}

function NumberField({ value, onChange, label: l, suffix = "semanas" }: { value?: number; onChange: (v?: number) => void; label: string; suffix?: string }) {
  return (
    <label className="block">
      <span className={label}>{l}</span>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={0}
          max={52}
          inputMode="numeric"
          className={num}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value === "" ? undefined : Number(e.target.value))}
        />
        <span className="text-sm text-slate-500">{suffix}</span>
      </div>
    </label>
  );
}

function diff(a: Restrictions, b: Restrictions): Restrictions | undefined {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]) as Set<keyof Restrictions>;
  const changed = [...keys].some((k) => a[k] !== b[k]);
  return changed ? a : undefined;
}

export default function Surgeon() {
  const [team, setTeam] = useStored<TeamDefaults>("rehapp.team", {});
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
  const [copied, setCopied] = useState(false);

  const changeProc = (id: string) => {
    const p = getProcedure(id)!;
    setProcId(id);
    setR(p.defaults);
    setStarts(p.phases.map((ph) => ph.fromWeek));
  };

  const config: PatientConfig = useMemo(() => {
    const defaultsStarts = proc.phases.map((p) => p.fromWeek);
    const c: PatientConfig = { p: procId, d: date };
    if (side) c.s = side;
    if (name.trim()) c.n = name.trim();
    const rd = diff(r, proc.defaults);
    if (rd) c.r = rd;
    if (starts.some((s, i) => s !== defaultsStarts[i])) c.ph = starts;
    if (note.trim()) c.note = note.trim();
    if (team.dr?.trim()) c.dr = team.dr.trim();
    if (team.tel?.trim()) c.tel = team.tel.trim();
    if (rev) c.rev = rev;
    return c;
  }, [procId, proc, date, side, name, r, starts, note, team, rev]);

  const link = patientLink(config);

  useEffect(() => {
    QRCode.toDataURL(link, { margin: 1, width: 480, errorCorrectionLevel: "M" }).then(setQr, () => setQr(""));
  }, [link]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      prompt("Copia este enlace:", link);
    }
  };

  const share = () => {
    if (navigator.share) navigator.share({ title: "Tu plan de recuperación", text: "Abre este enlace para ver tu plan de recuperación:", url: link }).catch(() => {});
    else copy();
  };

  const isLower = proc.limb === "inferior";
  const startsValid = starts.every((s, i) => i === 0 || s > starts[i - 1]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="no-print">
        <button onClick={() => navigate("/")} className="mb-4 flex items-center gap-1 text-sm font-medium text-teal-800">
          <ArrowLeft className="size-4" /> Inicio
        </button>
        <h1 className="text-2xl font-bold text-slate-900">Crear plan para un paciente</h1>
        <p className="mt-1 text-slate-600">
          Rellena los datos y entrega al paciente el código QR (impreso o en pantalla) o envíale el enlace. No se guarda nada en
          ningún servidor: toda la información va dentro del propio enlace.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            <Card className="space-y-4">
              <label className="block">
                <span className={label}>Intervención</span>
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
              <div className="grid grid-cols-2 gap-3">
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
              <label className="block">
                <span className={label}>Nombre del paciente (opcional, solo para saludarle)</span>
                <input className={input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej.: Carmen" />
              </label>
            </Card>

            <Card className="space-y-4">
              <div>
                <h2 className="font-semibold text-slate-900">Restricciones</h2>
                <p className="text-sm text-slate-500">Valores por defecto del protocolo. Ajústalos a la fijación y al paciente.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {isLower ? (
                  <>
                    <NumberField label="Sin apoyo (descarga) hasta la semana" value={r.noWeightUntil} onChange={(v) => setR({ ...r, noWeightUntil: v })} />
                    <NumberField label="Apoyo parcial hasta la semana" value={r.partialUntil} onChange={(v) => setR({ ...r, partialUntil: v })} />
                  </>
                ) : (
                  <NumberField label="Sin cargar peso con el brazo hasta la semana" value={r.noLiftUntil} onChange={(v) => setR({ ...r, noLiftUntil: v })} />
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
                {r.device && <NumberField label="Llevarla hasta la semana" value={r.deviceUntil} onChange={(v) => setR({ ...r, deviceUntil: v })} />}
              </div>
              {isLower && (
                <p className="text-sm text-slate-500">0 en ambos = apoyo completo según tolerancia desde el primer día.</p>
              )}
            </Card>

            <Card className="space-y-3">
              <div>
                <h2 className="font-semibold text-slate-900">Fases</h2>
                <p className="text-sm text-slate-500">Semana (desde la cirugía) en la que empieza cada fase.</p>
              </div>
              {proc.phases.map((ph, i) => (
                <div key={ph.title} className="flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={52}
                    disabled={i === 0}
                    className={num}
                    value={starts[i]}
                    onChange={(e) => setStarts(starts.map((s, j) => (j === i ? Number(e.target.value) : s)))}
                  />
                  <span className="text-slate-700">
                    <span className="font-medium">Fase {i + 1}:</span> {ph.title}
                  </span>
                </div>
              ))}
              {!startsValid && <p className="text-sm font-medium text-red-700">Cada fase debe empezar después de la anterior.</p>}
            </Card>

            <Card className="space-y-4">
              <label className="block">
                <span className={label}>Indicaciones personales (se muestran en la pantalla principal)</span>
                <textarea
                  className={input}
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ej.: Heparina 1 vez al día durante 30 días. Retirada de grapas en su centro de salud el día 14."
                />
              </label>
              <label className="block">
                <span className={label}>Próxima revisión</span>
                <input type="date" className={input} value={rev} onChange={(e) => setRev(e.target.value)} />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className={label}>Cirujano / equipo</span>
                  <input className={input} value={team.dr ?? ""} onChange={(e) => setTeam({ ...team, dr: e.target.value })} placeholder="Dr./Dra. …" />
                </label>
                <label className="block">
                  <span className={label}>Teléfono de contacto</span>
                  <input className={input} type="tel" value={team.tel ?? ""} onChange={(e) => setTeam({ ...team, tel: e.target.value })} />
                </label>
              </div>
              <p className="text-xs text-slate-500">El nombre del equipo y el teléfono se recuerdan en este dispositivo.</p>
            </Card>
          </div>

          <div className="lg:sticky lg:top-6 lg:self-start">
            <Card className="flex flex-col items-center text-center">
              <p className="font-semibold text-slate-900">Código para el paciente</p>
              {qr && startsValid ? <img src={qr} alt="Código QR del plan" className="mt-3 w-64" /> : <div className="mt-3 size-64 rounded-xl bg-slate-100" />}
              <p className="mt-2 text-sm text-slate-500">El paciente lo escanea con la cámara del móvil.</p>
              <div className="mt-4 grid w-full grid-cols-2 gap-2">
                <Button variant="secondary" onClick={copy} disabled={!startsValid}>
                  <Copy className="size-4" /> {copied ? "¡Copiado!" : "Copiar"}
                </Button>
                <Button variant="secondary" onClick={share} disabled={!startsValid}>
                  <Share2 className="size-4" /> Enviar
                </Button>
                <Button onClick={() => window.print()} disabled={!startsValid} className="col-span-2">
                  <Printer className="size-4" /> Imprimir hoja para el paciente
                </Button>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="col-span-2 flex items-center justify-center gap-1 py-2 text-sm font-medium text-teal-800"
                >
                  <ExternalLink className="size-4" /> Ver como lo verá el paciente
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <PrintSheet proc={proc} config={config} qr={qr} r={r} />
    </div>
  );
}

function PrintSheet({ proc, config, qr, r }: { proc: Procedure; config: PatientConfig; qr: string; r: Restrictions }) {
  const lines: string[] = [];
  if (proc.limb === "inferior") {
    if (r.noWeightUntil) lines.push(`Sin apoyar el pie hasta el ${formatDate(dateAtWeek(config.d, r.noWeightUntil))}.`);
    if (r.partialUntil && r.partialUntil > (r.noWeightUntil ?? 0))
      lines.push(`Apoyo parcial con muletas hasta el ${formatDate(dateAtWeek(config.d, r.partialUntil))}.`);
    if (!r.noWeightUntil && !r.partialUntil) lines.push("Puede apoyar el pie según tolerancia desde el principio.");
  } else if (r.noLiftUntil) {
    lines.push(`No cargar peso con el brazo hasta el ${formatDate(dateAtWeek(config.d, r.noLiftUntil))}.`);
  }
  if (r.device && r.deviceUntil) lines.push(`Llevar ${r.device} hasta el ${formatDate(dateAtWeek(config.d, r.deviceUntil))}.`);

  return (
    <div className="print-only text-black">
      <h1 className="text-2xl font-bold">Tu plan de recuperación</h1>
      <p className="mt-1 text-lg">
        {config.n ? `${config.n} · ` : ""}
        {proc.name}
        {config.s ? ` (${config.s === "izq" ? "izquierdo" : "derecho"})` : ""}
      </p>
      <p>Fecha de la cirugía: {formatDate(config.d)}</p>
      <div className="mt-6 flex items-start gap-8">
        {qr && <img src={qr} alt="" className="w-56" />}
        <div>
          <p className="text-lg font-semibold">Cómo abrir tu plan</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>Abre la cámara de tu móvil.</li>
            <li>Apunta a este código y toca el enlace que aparece.</li>
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
      <p className="mt-6 font-semibold">Acude a Urgencias si tienes: dolor muy intenso que no cede, dedos fríos o azulados, fiebre con la herida roja o supurando, o dolor e hinchazón en la pantorrilla. Si te falta el aire o te duele el pecho, llama al 112.</p>
      {(config.dr || config.tel) && (
        <p className="mt-4">
          {config.dr} {config.tel && `· Tel. ${config.tel}`}
        </p>
      )}
    </div>
  );
}
