"use client";

import { Target, CheckCircle2, ChevronRight } from "lucide-react";
import { Phase } from "@/types/protocol";
import { PatientWeightBearingBadge } from "./patient-weight-bearing-badge";
import { PatientExerciseList } from "./patient-exercise-list";
import { PatientRedFlags } from "./patient-red-flags";

interface Props {
  phase: Phase;
  currentWeek: number;
  totalPhases: number;
  isBeforeStart: boolean;
  isAfterEnd: boolean;
  nextPhase?: Phase;
}

export function PatientPhaseCard({
  phase,
  currentWeek,
  totalPhases,
  isBeforeStart,
  isAfterEnd,
  nextPhase,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Special state banners */}
      {isBeforeStart && (
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-200">
            Tu cirugía es muy reciente. Estos son los ejercicios de la fase
            inicial.
          </p>
        </div>
      )}
      {isAfterEnd && (
        <div className="rounded-xl border-2 border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/30">
          <p className="text-sm font-medium text-green-900 dark:text-green-200">
            Has superado el protocolo estándar. Consulta con tu médico o
            fisioterapeuta para el seguimiento personalizado.
          </p>
        </div>
      )}

      {/* Phase header */}
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-5 sm:p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Fase {phase.numero} de {totalPhases} · Semana {currentWeek}
        </p>
        <h1 className="mb-2 text-xl font-bold sm:text-2xl">{phase.nombre}</h1>
        <p className="text-sm text-muted-foreground">{phase.duracion}</p>
      </div>

      {/* Weight bearing */}
      <PatientWeightBearingBadge status={phase.estadoCarga} />

      {/* Objectives */}
      {phase.objetivos.length > 0 && (
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-base font-bold sm:text-lg">
            <Target className="h-5 w-5 text-primary" />
            Objetivos de esta fase
          </h2>
          <ul className="space-y-2 pl-4">
            {phase.objetivos.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Red flags (prominent) */}
      <PatientRedFlags flags={phase.banderasRojas} />

      {/* Precautions */}
      {phase.precauciones.length > 0 && (
        <section className="rounded-xl border bg-amber-50/50 p-5 dark:bg-amber-950/10">
          <h2 className="mb-3 text-base font-bold text-amber-900 dark:text-amber-200 sm:text-lg">
            Precauciones importantes
          </h2>
          <ul className="space-y-2">
            {phase.precauciones.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-200"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600 dark:bg-amber-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Exercises */}
      {phase.ejercicios.length > 0 && (
        <section>
          <h2 className="mb-3 text-base font-bold sm:text-lg">
            Tus ejercicios
          </h2>
          <div className="overflow-hidden rounded-xl border">
            <PatientExerciseList exercises={phase.ejercicios} />
          </div>
        </section>
      )}

      {/* Advancement criteria */}
      {phase.criteriosAvance.length > 0 && nextPhase && (
        <section className="rounded-xl border-2 border-green-200 bg-green-50/50 p-5 dark:border-green-900 dark:bg-green-950/10">
          <h2 className="mb-3 flex items-center gap-2 text-base font-bold text-green-900 dark:text-green-200 sm:text-lg">
            <ChevronRight className="h-5 w-5" />
            Cuándo podrás pasar a la siguiente fase
          </h2>
          <p className="mb-3 text-xs font-medium text-green-800 dark:text-green-300">
            Siguiente: {nextPhase.nombre} ({nextPhase.duracion})
          </p>
          <ul className="space-y-2">
            {phase.criteriosAvance.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-green-900 dark:text-green-200"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
