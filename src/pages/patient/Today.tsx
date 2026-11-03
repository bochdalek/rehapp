import { CalendarClock, MessageSquareText } from "lucide-react";
import { Card, SectionTitle } from "../../components/ui";
import ExerciseList from "../../components/ExerciseCard";
import RecoveryPath from "../../components/RecoveryPath";
import StatusCard from "../../components/StatusCard";
import { daysSince, formatDate, statusToday, todayKey } from "../../lib/config";
import { KEYS, useStored } from "../../lib/storage";
import type { PatientCtx } from "../../lib/patient";

function sinceText(days: number) {
  if (days === 0) return "Hoy es el día de tu operación.";
  if (days === 1) return "Ayer fue tu operación.";
  if (days < 14) return `Han pasado ${days} días desde tu operación.`;
  const w = Math.floor(days / 7);
  const d = days % 7;
  return `Llevas ${w} semanas${d ? ` y ${d} ${d === 1 ? "día" : "días"}` : ""} desde tu operación.`;
}

export default function Today({ ctx }: { ctx: PatientCtx }) {
  const { config, proc, r, days, phaseIdx } = ctx;
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
      <div>
        <h1 className="text-3xl leading-tight font-semibold text-slate-900">Te operamos el {formatDate(config.d)}.</h1>
        <p className="mt-2 text-lg text-slate-600">
          Faltan {-days} {-days === 1 ? "día" : "días"}. Mientras tanto, puedes ir preparándote.
        </p>
        <Card className="mt-5">
          <p className="text-slate-700">{proc.intro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Prepara la casa: quita alfombras y deja despejado el camino al baño.</li>
            <li>Ten a mano ropa cómoda y fácil de poner.</li>
            <li>Si fumas, intenta dejarlo: la herida y el hueso curan mejor.</li>
            <li>Puedes practicar los primeros ejercicios en «Mi plan».</li>
          </ul>
        </Card>
      </div>
    );
  }

  const revDays = config.rev ? daysSince(config.rev) : undefined;
  const doneCount = phase.exercises.filter((id) => todayDone.includes(id)).length;
  const allDone = doneCount === phase.exercises.length;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="text-slate-600">{sinceText(days)}</p>
        <h1 className="mt-1 text-3xl leading-tight font-semibold text-slate-900 lg:text-4xl">{phase.title}</h1>
        <p className="mt-2 text-slate-700">{phase.summary}</p>

        <Card className="mt-5">
          <RecoveryPath ctx={ctx} />
        </Card>

        <SectionTitle>Hoy debes saber</SectionTitle>
        <div className="space-y-3">
          {statusToday(proc, r, config.d, days).map((s) => (
            <StatusCard key={s.title} s={s} />
          ))}
          {config.note && (
            <div className="rounded-r-xl border-l-4 border-brand-600 bg-white p-4">
              <p className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <MessageSquareText className="size-5 text-brand-700" /> De tu cirujano
              </p>
              <p className="mt-1 whitespace-pre-line text-slate-700">{config.note}</p>
            </div>
          )}
          {config.rev && revDays !== undefined && revDays <= 0 && (
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <CalendarClock className="size-6 shrink-0 text-brand-700" />
              <p className="text-slate-700">
                <span className="font-semibold text-slate-900">Revisión {revDays === 0 ? "hoy" : `el ${formatDate(config.rev)}`}</span>
                {revDays < 0 && ` · dentro de ${-revDays} ${revDays === -1 ? "día" : "días"}`}
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <SectionTitle className="lg:mt-0" aside={allDone ? "Completados" : `${doneCount} de ${phase.exercises.length} hechos`}>
          Tus ejercicios de hoy
        </SectionTitle>
        <div
          className="mb-3 h-2 overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-label="Ejercicios hechos hoy"
          aria-valuemin={0}
          aria-valuemax={phase.exercises.length}
          aria-valuenow={doneCount}
        >
          <div
            className={`h-full rounded-full transition-[width] duration-500 ${allDone ? "bg-emerald-600" : "bg-brand-600"}`}
            style={{ width: `${(doneCount / phase.exercises.length) * 100}%` }}
          />
        </div>
        <ExerciseList ids={phase.exercises} done={todayDone} onToggle={toggle} />
        {allDone ? (
          <p className="mt-3 rounded-xl bg-emerald-50 p-3 text-emerald-900">
            Has hecho todos los ejercicios de hoy. Mañana, otra vez: la constancia es lo que más ayuda.
          </p>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            Toca «Cómo» para ver los pasos. Si un ejercicio te causa un dolor fuerte que no se pasa al parar, déjalo y coméntalo en la
            revisión.
          </p>
        )}
      </div>
    </div>
  );
}
