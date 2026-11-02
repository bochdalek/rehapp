import { CalendarClock, ClipboardList, MessageSquareText } from "lucide-react";
import { getExercise } from "../../data/exercises";
import { Card, SectionTitle } from "../../components/ui";
import ExerciseCard from "../../components/ExerciseCard";
import StatusCard from "../../components/StatusCard";
import { daysSince, formatDate, statusToday, todayKey } from "../../lib/config";
import { KEYS, useStored } from "../../lib/storage";
import type { PatientCtx } from "../../lib/patient";

export default function Today({ ctx }: { ctx: PatientCtx }) {
  const { config, proc, r, starts, days, week, phaseIdx } = ctx;
  const phase = proc.phases[phaseIdx];
  const key = todayKey();
  const [done, setDone] = useStored<Record<string, string[]>>(KEYS.done, {});
  const todayDone = done[key] ?? [];

  const toggle = (id: string) =>
    setDone((prev) => {
      const cur = prev[key] ?? [];
      const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
      return { ...prev, [key]: next };
    });

  if (days < 0) {
    return (
      <div className="space-y-4">
        <Card>
          <p className="text-slate-500">Tu cirugía será el</p>
          <p className="text-2xl font-bold text-slate-900">{formatDate(config.d)}</p>
          <p className="mt-1 text-teal-700">
            Faltan {-days} {-days === 1 ? "día" : "días"}
          </p>
        </Card>
        <Card>
          <h2 className="font-semibold text-slate-900">Prepárate</h2>
          <p className="mt-2 text-slate-700">{proc.intro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Prepara la casa: quita alfombras y deja despejado el camino al baño.</li>
            <li>Ten a mano ropa cómoda y fácil de poner.</li>
            <li>Si fumas, intenta dejarlo: mejora la curación de la herida y del hueso.</li>
            <li>Puedes ir practicando los primeros ejercicios en la sección "Mi plan".</li>
          </ul>
        </Card>
      </div>
    );
  }

  const nextStart = starts[phaseIdx + 1];
  const progress =
    nextStart !== undefined ? Math.min(1, (days / 7 - starts[phaseIdx]) / (nextStart - starts[phaseIdx])) : 1;
  const revDays = config.rev ? daysSince(config.rev) : undefined;
  const doneCount = phase.exercises.filter((id) => todayDone.includes(id)).length;

  return (
    <div>
      <Card>
        <div className="flex items-baseline justify-between">
          <p className="text-3xl font-bold text-slate-900">Día {days}</p>
          <p className="font-semibold text-teal-700">Semana {week}</p>
        </div>
        <p className="mt-1 text-sm text-slate-500">Operado el {formatDate(config.d)}</p>
        <div className="mt-4 rounded-xl bg-teal-50 p-3">
          <p className="text-xs font-semibold tracking-wide text-teal-700 uppercase">
            Fase {phaseIdx + 1} de {proc.phases.length}
          </p>
          <p className="text-lg font-semibold text-slate-900">{phase.title}</p>
          <p className="mt-1 text-slate-700">{phase.summary}</p>
          {nextStart !== undefined && (
            <div className="mt-3">
              <div className="h-2 overflow-hidden rounded-full bg-teal-100">
                <div className="h-full rounded-full bg-teal-600" style={{ width: `${Math.max(4, progress * 100)}%` }} />
              </div>
              <p className="mt-1 text-xs text-slate-500">Siguiente fase a partir de la semana {nextStart}</p>
            </div>
          )}
        </div>
      </Card>

      <div className="mt-4 space-y-3">
        {statusToday(proc, r, config.d, days).map((s) => (
          <StatusCard key={s.title} s={s} />
        ))}
      </div>

      {config.rev && revDays !== undefined && revDays <= 0 && (
        <Card className="mt-3 flex items-center gap-3">
          <CalendarClock className="size-6 shrink-0 text-teal-700" />
          <div>
            <p className="font-semibold text-slate-900">Próxima revisión</p>
            <p className="text-slate-600">
              {formatDate(config.rev)}
              {revDays === 0 ? " · ¡Hoy!" : ` · en ${-revDays} ${revDays === -1 ? "día" : "días"}`}
            </p>
          </div>
        </Card>
      )}

      {config.note && (
        <Card className="mt-3">
          <p className="flex items-center gap-2 font-semibold text-slate-900">
            <MessageSquareText className="size-5 text-teal-700" /> Indicaciones de tu cirujano
          </p>
          <p className="mt-2 whitespace-pre-line text-slate-700">{config.note}</p>
        </Card>
      )}

      <SectionTitle icon={<ClipboardList className="size-4" />}>
        Ejercicios de hoy · {doneCount}/{phase.exercises.length}
      </SectionTitle>
      <div className="space-y-2">
        {phase.exercises.map((id) => (
          <ExerciseCard key={id} ex={getExercise(id)} done={todayDone.includes(id)} onToggle={() => toggle(id)} />
        ))}
      </div>
      {doneCount === phase.exercises.length && (
        <p className="mt-3 rounded-xl bg-teal-50 p-3 text-center font-medium text-teal-800">¡Buen trabajo! Has completado los ejercicios de hoy.</p>
      )}
      <p className="mt-4 px-1 text-sm text-slate-500">
        Toca un ejercicio para ver cómo se hace. Si alguno te produce un dolor intenso que no se pasa al parar, no sigas y coméntalo
        en la revisión.
      </p>
    </div>
  );
}
