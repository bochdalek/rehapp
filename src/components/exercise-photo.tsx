import { ArrowRight } from "lucide-react";
import { Exercise } from "@/types/protocol";
import { resolvePhoto } from "@/data/exercise-photo-mapping";

interface ExercisePhotoProps {
  exercise: Exercise;
}

// basePath for GitHub Pages (matches next.config.ts)
const BASE_PATH = process.env.NODE_ENV === "production" ? "/rehapp" : "";

export function ExercisePhoto({ exercise }: ExercisePhotoProps) {
  const photoId = resolvePhoto(exercise.id, exercise.nombre);
  if (!photoId) return null;

  return (
    <div className="my-3 rounded-lg border bg-muted/20 p-3">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <figure className="flex flex-col gap-1">
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/exercises/${photoId}/0.jpg`}
              alt={`${exercise.nombre} - Posición inicial`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="text-center text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            Inicio
          </figcaption>
        </figure>

        <ArrowRight
          className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6"
          aria-hidden="true"
        />

        <figure className="flex flex-col gap-1">
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/exercises/${photoId}/1.jpg`}
              alt={`${exercise.nombre} - Posición final`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="text-center text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            Final
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
