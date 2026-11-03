import { useState } from "react";
import { Check, ChevronDown, Lightbulb } from "lucide-react";
import type { Exercise } from "../data/types";
import { getExercise } from "../data/exercises";

interface RowProps {
  ex: Exercise;
  done?: boolean;
  onToggle?: () => void;
}

function ExerciseRow({ ex, done, onToggle }: RowProps) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex items-center gap-3 py-3">
        {onToggle && (
          <button
            onClick={onToggle}
            aria-pressed={done}
            aria-label={`${ex.name}: ${done ? "hecho" : "marcar como hecho"}`}
            className={`grid size-11 shrink-0 place-items-center rounded-full border-2 transition-colors ${
              done ? "border-brand-700 bg-brand-700 text-white" : "border-slate-300 text-transparent hover:border-brand-400"
            }`}
          >
            <Check className="size-6" strokeWidth={3} />
          </button>
        )}
        <button onClick={() => setOpen((o) => !o)} className="flex flex-1 items-center gap-2 text-left" aria-expanded={open}>
          <span className="flex-1">
            <span className={`block font-semibold ${done ? "text-slate-500" : "text-slate-900"}`}>{ex.name}</span>
            <span className="block text-sm text-slate-500">{ex.dose}</span>
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-brand-700">
            {open ? "Cerrar" : "Cómo"}
            <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className={`pb-4 ${onToggle ? "pl-14" : ""}`}>
          <ol className="space-y-2">
            {ex.how.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-display w-5 shrink-0 text-lg leading-snug font-semibold text-brand-700">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          {ex.tip && (
            <p className="mt-3 flex gap-2 border-l-4 border-amber-400 bg-amber-50 py-2 pr-3 pl-3 text-sm text-amber-950">
              <Lightbulb className="size-5 shrink-0" />
              {ex.tip}
            </p>
          )}
        </div>
      )}
    </li>
  );
}

/** Lista de ejercicios: con casillas si se pasan `done` y `onToggle` */
export default function ExerciseList({ ids, done, onToggle }: { ids: string[]; done?: string[]; onToggle?: (id: string) => void }) {
  return (
    <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white px-4 shadow-sm shadow-slate-900/5">
      {ids.map((id) => (
        <ExerciseRow key={id} ex={getExercise(id)} done={done?.includes(id)} onToggle={onToggle ? () => onToggle(id) : undefined} />
      ))}
    </ul>
  );
}
