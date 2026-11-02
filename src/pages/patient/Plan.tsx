import { useState } from "react";
import { Ban, BookOpen, Check, ChevronDown, Target } from "lucide-react";
import { BulletList, Card } from "../../components/ui";
import ExerciseList from "../../components/ExerciseCard";
import { dateAtWeek, formatDate } from "../../lib/config";
import type { PatientCtx } from "../../lib/patient";
import { refCount } from "../../lib/evidence";

export default function Plan({ ctx }: { ctx: PatientCtx }) {
  const { config, proc, starts, phaseIdx, days } = ctx;
  const [open, setOpen] = useState<number | null>(days < 0 ? 0 : phaseIdx);

  return (
    <div className="lg:max-w-3xl">
      <Card>
        <h2 className="text-xl font-semibold text-slate-900">Sobre tu operación</h2>
        <p className="mt-2 text-slate-700">{proc.intro}</p>
        <p className="mt-3 text-sm text-slate-500">
          Las fechas son orientativas. Cada persona se recupera a su ritmo y tu cirujano puede ajustarlas en las revisiones.
        </p>
        {refCount(proc.id) > 0 && (
          <a href="#/fuentes" className="mt-3 flex items-start gap-2 border-t border-slate-200 pt-3 text-sm text-slate-600">
            <BookOpen className="mt-0.5 size-4 shrink-0 text-brand-700" />
            <span>
              Basado en {refCount(proc.id)} estudios científicos revisados en PubMed y en el criterio de tu cirujano.{" "}
              <span className="font-semibold text-brand-700">Ver las fuentes</span>
            </span>
          </a>
        )}
      </Card>

      <ol className="relative mt-5 space-y-3 border-l-2 border-brand-200 pl-5">
        {proc.phases.map((ph, i) => {
          const isCurrent = days >= 0 && i === phaseIdx;
          const isPast = days >= 0 && i < phaseIdx;
          const end = starts[i + 1];
          const range =
            end !== undefined
              ? `Semana ${starts[i] + 1} a ${end} · desde el ${formatDate(dateAtWeek(config.d, starts[i]))}`
              : `Desde la semana ${starts[i] + 1} · ${formatDate(dateAtWeek(config.d, starts[i]))}`;
          const expanded = open === i;
          return (
            <li key={i} className="relative">
              <span
                className={`absolute top-4 -left-[1.95rem] grid size-5 place-items-center rounded-full ring-4 ring-slate-50 ${
                  isCurrent ? "bg-brand-600" : isPast ? "bg-brand-300" : "bg-slate-300"
                }`}
              >
                {isPast && <Check className="size-3 text-white" strokeWidth={4} />}
              </span>
              <div className={`rounded-xl border bg-white ${isCurrent ? "border-brand-600 border-2" : "border-slate-200"}`}>
                <button
                  onClick={() => setOpen(expanded ? null : i)}
                  className="flex w-full items-center gap-2 p-4 text-left"
                  aria-expanded={expanded}
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-brand-700">
                      Fase {i + 1}
                      {isCurrent && " · estás aquí"}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900">{ph.title}</h3>
                    <p className="text-sm text-slate-500">{range}</p>
                  </div>
                  <ChevronDown className={`size-5 text-slate-400 transition ${expanded ? "rotate-180" : ""}`} />
                </button>
                {expanded && (
                  <div className="space-y-4 border-t border-slate-100 p-4">
                    <p className="text-slate-700">{ph.summary}</p>
                    <div>
                      <p className="mb-2 font-semibold text-slate-900">Objetivos</p>
                      <BulletList items={ph.goals} icon={<Target className="size-5 text-brand-600" />} />
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-slate-900">Puedes</p>
                      <BulletList items={ph.allowed} icon={<Check className="size-5 text-emerald-600" />} />
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-slate-900">Todavía no</p>
                      <BulletList items={ph.avoid} icon={<Ban className="size-5 text-red-500" />} />
                    </div>
                    <div>
                      <p className="mb-2 font-semibold text-slate-900">Ejercicios</p>
                      <ExerciseList ids={ph.exercises} />
                    </div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
