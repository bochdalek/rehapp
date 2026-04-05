"use client";

import { Exercise } from "@/types/protocol";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dumbbell, AlertTriangle } from "lucide-react";
import { ExercisePhoto } from "@/components/exercise-photo";

interface Props {
  exercises: Exercise[];
}

export function PatientExerciseList({ exercises }: Props) {
  if (exercises.length === 0) return null;

  return (
    <Accordion multiple className="w-full">
      {exercises.map((exercise) => (
        <AccordionItem key={exercise.id} value={exercise.id}>
          <AccordionTrigger className="px-4 py-3.5 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Dumbbell className="h-4 w-4 text-primary" />
              </div>
              <div>
                <span className="block text-sm font-semibold sm:text-base">
                  {exercise.nombre}
                </span>
                {exercise.repeticiones && (
                  <span className="text-xs text-muted-foreground">
                    {exercise.repeticiones}
                  </span>
                )}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="ml-11 space-y-3">
              <ExercisePhoto exercise={exercise} />

              <p className="text-sm leading-relaxed text-foreground/90">
                {exercise.descripcion}
              </p>

              {exercise.frecuencia && (
                <p className="text-xs text-muted-foreground">
                  <strong>Frecuencia:</strong> {exercise.frecuencia}
                </p>
              )}

              {exercise.precauciones && exercise.precauciones.length > 0 && (
                <div className="flex items-start gap-2 rounded-md bg-amber-50 p-3 dark:bg-amber-950/20">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  <div className="text-xs text-amber-900 dark:text-amber-200">
                    <strong className="mb-0.5 block">Cuidado:</strong>
                    {exercise.precauciones.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
