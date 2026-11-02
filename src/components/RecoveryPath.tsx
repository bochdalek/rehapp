import { Check } from "lucide-react";
import { dateAtWeek, formatDate, milestones } from "../lib/config";
import type { PatientCtx } from "../lib/patient";

/**
 * El camino de la recuperación: las fases como tramos de una misma línea,
 * los hitos (dejar la férula, apoyar…) como marcas, y el paciente sobre ella.
 */
export default function RecoveryPath({ ctx }: { ctx: PatientCtx }) {
  const { proc, r, starts, days, phaseIdx, config } = ctx;
  const nowWeek = Math.max(days, 0) / 7;
  const ms = milestones(proc, r);
  const end = Math.max(starts[starts.length - 1] + 6, ...ms.map((m) => m.week + 2), nowWeek + 1);
  const pos = (w: number) => `${Math.min(100, (w / end) * 100)}%`;

  // Próximo acontecimiento: un hito o el paso a la siguiente fase
  const events = [
    ...ms.map((m) => ({ week: m.week, label: m.label })),
    ...starts.slice(1).map((w, i) => ({ week: w, label: `Empieza la fase ${i + 2}: ${proc.phases[i + 1].title.toLowerCase()}` })),
  ]
    .filter((e) => e.week > nowWeek)
    .sort((a, b) => a.week - b.week);
  const next = events[0];

  // Etiquetas de la escala separadas al menos un 18% entre sí
  const labels: number[] = [];
  let last = 0;
  starts.slice(1).forEach((w) => {
    const p = (w / end) * 100;
    if (p - last >= 18 && p <= 92) {
      labels.push(w);
      last = p;
    }
  });
  const daysTo = next ? Math.round(next.week * 7 - Math.max(days, 0)) : 0;

  return (
    <div>
      <div className="relative pt-7 pb-3" aria-hidden="true">
        {/* tramos = fases */}
        <div className="relative h-3">
          {starts.map((s, i) => {
            const to = starts[i + 1] ?? end;
            const filled = nowWeek >= to ? 1 : nowWeek <= s ? 0 : (nowWeek - s) / (to - s);
            return (
              <div
                key={i}
                className="absolute top-0 h-3 overflow-hidden rounded-full bg-brand-100"
                style={{ left: `calc(${pos(s)} + ${i ? 3 : 0}px)`, width: `calc(${pos(to - s)} - ${i ? 3 : 0}px)` }}
              >
                <div className="h-full bg-brand-600" style={{ width: `${filled * 100}%` }} />
              </div>
            );
          })}
          {/* hitos */}
          {ms.map((m) => (
            <span
              key={m.label}
              className={`absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-white ${
                nowWeek >= m.week ? "bg-brand-800" : "bg-amber-500"
              }`}
              style={{ left: pos(m.week) }}
            />
          ))}
          {/* tú */}
          <div className="walk-in absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: pos(nowWeek) }}>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-1.5 py-0.5 text-xs font-semibold whitespace-nowrap text-white">
              Hoy
            </span>
            <span className="block size-6 rounded-full border-4 border-white bg-brand-700 shadow-[0_0_0_2px_var(--color-brand-700)]" />
          </div>
        </div>
      </div>
      {/* escala: solo las semanas en que cambia de fase, sin que se pisen */}
      <div className="relative h-5 text-xs text-slate-500" aria-hidden="true">
        <span className="absolute left-0">Cirugía</span>
        {labels.map((w) => (
          <span key={w} className="absolute -translate-x-1/2 whitespace-nowrap" style={{ left: pos(w) }}>
            sem. {w}
          </span>
        ))}
      </div>

      <p className="sr-only">
        Estás en la fase {phaseIdx + 1} de {proc.phases.length}.
      </p>

      {next ? (
        <div className="mt-2 flex items-start gap-3 border-t border-slate-200 pt-3">
          <span className="mt-1.5 size-3 shrink-0 rotate-45 bg-amber-500" />
          <p className="text-slate-700">
            <span className="font-semibold text-slate-900">{next.label}</span>
            <br />
            {formatDate(dateAtWeek(config.d, next.week))} ·{" "}
            {daysTo <= 1 ? "mañana" : daysTo < 14 ? `dentro de ${daysTo} días` : `dentro de ${Math.round(daysTo / 7)} semanas`}
          </p>
        </div>
      ) : (
        <p className="mt-2 flex items-center gap-2 border-t border-slate-200 pt-3 text-slate-700">
          <Check className="size-5 text-brand-700" /> Has pasado todas las fases del plan. Sigue activo.
        </p>
      )}
    </div>
  );
}
