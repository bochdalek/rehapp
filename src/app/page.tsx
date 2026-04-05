"use client";

import { BookOpen } from "lucide-react";
import { ModeCard } from "@/components/mode/mode-card";
import { ModeGate } from "@/components/mode/mode-gate";

export default function LandingPage() {
  return (
    <ModeGate>
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" />
            Basado en evidencia científica
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Protocolos de Rehabilitación
            <br />
            <span className="text-primary">Postquirúrgica</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Selecciona cómo quieres acceder a REHAPP
          </p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6">
          <ModeCard variant="profesional" />
          <ModeCard variant="paciente" />
        </div>
      </div>
    </ModeGate>
  );
}
