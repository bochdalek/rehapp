"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Protocol } from "@/types/protocol";
import { getCurrentPhase } from "@/lib/protocol-helpers";
import { getPatientProtocolName } from "@/lib/patient-labels";
import { WeekInput } from "@/components/patient/week-input";
import { PatientPhaseCard } from "@/components/patient/patient-phase-card";

interface Props {
  protocol: Protocol;
}

export function PatientProtocolClient({ protocol }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const semanaParam = searchParams.get("semana");
  const semana = semanaParam !== null ? parseInt(semanaParam, 10) : null;

  const friendlyName = getPatientProtocolName(protocol.id, protocol.nombreCorto);

  const handleWeekSubmit = (week: number) => {
    router.replace(`/paciente/protocolo/${protocol.id}?semana=${week}`);
  };

  const handleChangeWeeks = () => {
    router.replace(`/paciente/protocolo/${protocol.id}`);
  };

  // If no week specified, ask
  if (semana === null || isNaN(semana)) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        <Link
          href="/paciente"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="mb-6 text-center">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Tu protocolo
          </p>
          <h1 className="text-xl font-bold sm:text-2xl">{friendlyName}</h1>
        </div>

        <WeekInput onSubmit={handleWeekSubmit} />
      </div>
    );
  }

  // Show the protocol phase for the given week
  const { phase, phaseIndex, isBeforeStart, isAfterEnd } = getCurrentPhase(
    protocol,
    semana
  );
  const nextPhase = protocol.fases[phaseIndex + 1];

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8">
      <Link
        href="/paciente"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Inicio
      </Link>

      <div className="mb-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Tu protocolo
        </p>
        <h1 className="text-lg font-bold leading-snug sm:text-xl">
          {friendlyName}
        </h1>
      </div>

      <PatientPhaseCard
        phase={phase}
        currentWeek={semana}
        totalPhases={protocol.fases.length}
        isBeforeStart={isBeforeStart}
        isAfterEnd={isAfterEnd}
        nextPhase={nextPhase}
      />

      {/* Change weeks */}
      <button
        onClick={handleChangeWeeks}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <RefreshCw className="h-4 w-4" />
        Cambiar semanas desde la cirugía
      </button>

      {/* Medical disclaimer */}
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-200">
          <strong>Importante:</strong> Esta guía es informativa. Consulta
          siempre con tu médico o fisioterapeuta antes de iniciar los
          ejercicios. Si sientes dolor intenso o algo no va bien, contacta a
          tu equipo médico.
        </p>
      </div>
    </div>
  );
}
