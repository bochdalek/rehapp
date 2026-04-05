"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { BodyDiagram } from "@/components/patient/body-diagram";
import { DiagramRegion } from "@/lib/body-diagram-mapping";
import { allProtocols } from "@/data/protocols";
import { getDiagramRegionCounts } from "@/lib/protocol-helpers";

export default function PacientePage() {
  const router = useRouter();

  const enabledRegions = useMemo(() => {
    const counts = getDiagramRegionCounts(allProtocols);
    const set = new Set<DiagramRegion>();
    (Object.keys(counts) as DiagramRegion[]).forEach((r) => {
      if (counts[r] > 0) set.add(r);
    });
    return set;
  }, []);

  const handleRegionClick = (region: DiagramRegion) => {
    router.push(`/paciente/zona/${region}`);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
          ¿Dónde fue tu cirugía?
        </h1>
        <p className="mx-auto max-w-xl text-base text-muted-foreground">
          Toca sobre la zona del cuerpo donde te operaron para ver tu protocolo
          de rehabilitación personalizado.
        </p>
      </div>

      <BodyDiagram
        onRegionClick={handleRegionClick}
        enabledRegions={enabledRegions}
      />
    </div>
  );
}
