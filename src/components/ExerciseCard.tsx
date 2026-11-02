import { useState } from "react";
import { Check, ChevronDown, Lightbulb } from "lucide-react";
import type { Exercise } from "../data/types";

interface Props {
  ex: Exercise;
  done?: boolean;
  onToggle?: () => void;
}

export default function ExerciseCard({ ex, done, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl bg-white shadow-sm ring-1 transition ${done ? "ring-teal-300" : "ring-slate-200"}`}>
      <div className="flex items-center gap-3 p-3">
        {onToggle && (
          <button
            onClick={onToggle}
            aria-label={done ? "Marcar como no hecho" : "Marcar como hecho"}
            className={`grid size-11 shrink-0 place-items-center rounded-full border-2 transition ${
              done ? "border-teal-600 bg-teal-600 text-white" : "border-slate-300 text-transparent"
            }`}
          >
            <Check className="size-6" strokeWidth={3} />
          </button>
        )}
        <button onClick={() => setOpen((o) => !o)} className="flex flex-1 items-center gap-2 text-left" aria-expanded={open}>
          <div className="flex-1">
            <p className={`font-semibold ${done ? "text-slate-500 line-through decoration-teal-500" : "text-slate-900"}`}>{ex.name}</p>
            <p className="text-sm text-slate-500">{ex.dose}</p>
          </div>
          <ChevronDown className={`size-5 shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 px-4 pt-3 pb-4">
          <ol className="space-y-2">
            {ex.how.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-teal-50 text-sm font-bold text-teal-800">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          {ex.tip && (
            <p className="mt-3 flex gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
              <Lightbulb className="size-5 shrink-0" />
              {ex.tip}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
