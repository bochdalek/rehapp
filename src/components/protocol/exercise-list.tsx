"use client";

import { Exercise } from "@/types/protocol";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dumbbell, AlertTriangle, TrendingUp } from "lucide-react";
import { ExercisePhoto } from "@/components/exercise-photo";

interface ExerciseListProps {
  exercises: Exercise[];
}

export function ExerciseList({ exercises }: ExerciseListProps) {
  if (exercises.length === 0) return null;

  return (
    <Accordion multiple className="w-full">
      {exercises.map((exercise) => (
        <AccordionItem key={exercise.id} value={exercise.id}>
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <Dumbbell className="h-4 w-4 shrink-0 text-primary/60" />
              <div>
                <span className="text-sm font-medium">{exercise.nombre}</span>
                {exercise.repeticiones && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    {exercise.repeticiones}
                  </span>
                )}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <div className="ml-7 space-y-3">
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
                <div className="flex items-start gap-2 rounded-md bg-amber-50 p-2.5 dark:bg-amber-950/20">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
                  <div className="text-xs text-amber-800 dark:text-amber-300">
                    {exercise.precauciones.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              )}

              {exercise.progresion && (
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                  <p>
                    <strong>Progresión:</strong> {exercise.progresion}
                  </p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
