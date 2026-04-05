"use client";

import { forwardRef } from "react";
import { Phase } from "@/types/protocol";
import { WeightBearingBadge } from "./weight-bearing-badge";
import { ROMTable } from "./rom-table";
import { ExerciseList } from "./exercise-list";
import { RedFlags } from "./red-flags";
import { CriteriaList } from "./criteria-list";
import { Target, Shield } from "lucide-react";

interface PhaseDetailProps {
  phase: Phase;
}

export const PhaseDetail = forwardRef<HTMLDivElement, PhaseDetailProps>(
  function PhaseDetail({ phase }, ref) {
    return (
      <div ref={ref} className="scroll-mt-40">
        <div className="rounded-xl border bg-card shadow-sm">
          {/* Phase header */}
          <div className="border-b bg-muted/30 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {phase.numero}
                  </span>
                  <h3 className="text-lg font-semibold">{phase.nombre}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{phase.duracion}</p>
              </div>
              <WeightBearingBadge
                status={phase.estadoCarga}
                percentage={phase.cargaPorcentaje}
              />
            </div>
            {phase.cargaDetalle && (
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {phase.cargaDetalle}
              </p>
            )}
          </div>

          <div className="space-y-6 p-5 sm:p-6">
            {/* Objectives */}
            <div>
              <h4 className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
                <Target className="h-4 w-4 text-primary" />
                Objetivos
              </h4>
              <ul className="space-y-1 pl-6">
                {phase.objetivos.map((obj, i) => (
                  <li
                    key={i}
                    className="list-disc text-sm text-foreground/80"
                  >
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* ROM Goals */}
            {phase.romObjetivos.length > 0 && (
              <div>
                <h4 className="mb-2.5 text-sm font-semibold">
                  Objetivos de Rango de Movimiento
                </h4>
                <ROMTable goals={phase.romObjetivos} />
              </div>
            )}

            {/* Exercises */}
            {phase.ejercicios.length > 0 && (
              <div>
                <h4 className="mb-2.5 text-sm font-semibold">Ejercicios</h4>
                <div className="rounded-lg border">
                  <ExerciseList exercises={phase.ejercicios} />
                </div>
              </div>
            )}

            {/* Precautions */}
            {phase.precauciones.length > 0 && (
              <div>
                <h4 className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
                  <Shield className="h-4 w-4 text-amber-600" />
                  Precauciones
                </h4>
                <ul className="space-y-1 pl-6">
                  {phase.precauciones.map((p, i) => (
                    <li
                      key={i}
                      className="list-disc text-sm text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Red flags */}
            <RedFlags flags={phase.banderasRojas} />

            {/* Advancement criteria */}
            <CriteriaList
              title="Criterios para Avanzar a la Siguiente Fase"
              criteria={phase.criteriosAvance}
            />

            {/* Notes */}
            {phase.notas && (
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm italic text-muted-foreground">
                  {phase.notas}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
