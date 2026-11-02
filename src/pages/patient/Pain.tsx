import { useState } from "react";
import { Card, SectionTitle } from "../../components/ui";
import { parseDate, todayKey } from "../../lib/config";
import { KEYS, useStored } from "../../lib/storage";

type Entry = { v: number; note?: string };

const FACES = ["Sin dolor", "", "Leve", "", "Moderado", "", "Fuerte", "", "Muy fuerte", "", "Insoportable"];

function color(v: number) {
  if (v <= 3) return "bg-emerald-500";
  if (v <= 6) return "bg-amber-500";
  return "bg-red-500";
}

export default function Pain() {
  const key = todayKey();
  const [log, setLog] = useStored<Record<string, Entry>>(KEYS.pain, {});
  const today = log[key];
  const [note, setNote] = useState(today?.note ?? "");

  const save = (v: number) => setLog((p) => ({ ...p, [key]: { v, note: note || undefined } }));
  const saveNote = () => today && setLog((p) => ({ ...p, [key]: { ...p[key], note: note || undefined } }));

  // Últimos 14 días
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (13 - i));
    return todayKey(d);
  });
  const history = Object.entries(log)
    .sort(([a], [b]) => b.localeCompare(a))
    .slice(0, 30);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">¿Cuánto te duele hoy?</h1>
        <p className="text-slate-600">De 0 (nada) a 10 (el peor dolor que puedas imaginar).</p>
        <div className="mt-4 grid grid-cols-6 gap-2">
          {Array.from({ length: 11 }, (_, v) => (
            <button
              key={v}
              onClick={() => save(v)}
              className={`h-12 rounded-lg text-lg font-bold transition ${
                today?.v === v ? `${color(v)} text-white` : "border border-slate-300 bg-white text-slate-700 hover:border-brand-400"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        {today && (
          <p className="mt-3 font-medium text-slate-700">
            Hoy: {today.v}/10 {FACES[today.v] && `· ${FACES[today.v]}`}
          </p>
        )}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onBlur={saveNote}
          placeholder="Notas (opcional): cómo has dormido, si se ha hinchado, medicación…"
          className="mt-3 w-full rounded-lg border border-slate-300 bg-white p-3 text-base"
          rows={2}
        />
        {today && today.v >= 8 && (
          <p className="mt-3 rounded-xl bg-red-50 p-3 text-sm text-red-800">
            Un dolor tan fuerte que no mejora con la medicación ni con reposo y elevación es un motivo para consultar. Mira la
            sección Ayuda.
          </p>
        )}
      </div>

      <SectionTitle>Últimos 14 días</SectionTitle>
      <Card>
        <div className="flex h-36 items-end gap-1">
          {days.map((d) => {
            const e = log[d];
            return (
              <div key={d} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                {e ? (
                  <div className={`w-full rounded-t-md ${color(e.v)}`} style={{ height: `${Math.max(4, e.v * 10)}%` }} title={`${e.v}/10`} />
                ) : (
                  <div className="h-1 w-full rounded bg-slate-100" />
                )}
                <span className="text-[10px] text-slate-400">{parseDate(d).getDate()}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-sm text-slate-500">Lo normal es que el dolor vaya bajando semana a semana.</p>
      </Card>

      {history.length > 0 && (
        <>
          <SectionTitle>Lo que has anotado</SectionTitle>
          <Card className="divide-y divide-slate-100 p-0">
            {history.map(([d, e]) => (
              <div key={d} className="flex items-start gap-3 px-4 py-3">
                <span className={`grid size-9 shrink-0 place-items-center rounded-full font-bold text-white ${color(e.v)}`}>{e.v}</span>
                <div>
                  <p className="font-medium text-slate-800">
                    {parseDate(d).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}
                  </p>
                  {e.note && <p className="text-sm text-slate-500">{e.note}</p>}
                </div>
              </div>
            ))}
          </Card>
        </>
      )}
    </div>
  );
}
