"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Printer,
  AlertCircle,
  Stethoscope,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhaseTimeline } from "@/components/protocol/phase-timeline";
import { PhaseDetail } from "@/components/protocol/phase-detail";
import { CriteriaList } from "@/components/protocol/criteria-list";
import { getReferencesByIds } from "@/data/references";
import { Protocol, BODY_REGION_LABELS } from "@/types/protocol";

export function ProtocolClient({ protocol }: { protocol: Protocol }) {
  const [activePhase, setActivePhase] = useState(0);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handlePhaseClick = useCallback((index: number) => {
    setActivePhase(index);
    phaseRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = phaseRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActivePhase(index);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [protocol]);

  const references = getReferencesByIds(protocol.referencias);

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      {/* Back + Print */}
      <div className="no-print mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Protocolos
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.print()}
          className="gap-1.5"
        >
          <Printer className="h-4 w-4" />
          Imprimir
        </Button>
      </div>

      {/* Protocol Header */}
      <div className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {BODY_REGION_LABELS[protocol.region]}
          </Badge>
          {protocol.abordajeQuirurgico.map((approach) => (
            <Badge key={approach} variant="outline" className="text-xs">
              {approach}
            </Badge>
          ))}
        </div>
        <h1 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {protocol.nombre}
        </h1>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          {protocol.descripcion}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {protocol.duracionTotal}
          </span>
          <span className="flex items-center gap-1.5">
            <Stethoscope className="h-4 w-4" />
            {protocol.fases.length} fases
          </span>
          <span className="text-xs">
            Actualizado: {protocol.fechaActualizacion}
          </span>
        </div>
      </div>

      {/* Classifications */}
      {protocol.clasificaciones && protocol.clasificaciones.length > 0 && (
        <div className="mb-6 rounded-lg border bg-muted/20 p-4">
          <h3 className="mb-2 text-sm font-semibold">Clasificaciones</h3>
          <div className="flex flex-wrap gap-2">
            {protocol.clasificaciones.map((c, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Phase Timeline */}
      <div className="no-print sticky top-16 z-40 mb-8 rounded-xl border bg-background/95 p-4 shadow-sm backdrop-blur-sm">
        <PhaseTimeline
          phases={protocol.fases}
          totalWeeks={protocol.semanasTotal}
          activePhase={activePhase}
          onPhaseClick={handlePhaseClick}
        />
      </div>

      {/* Phase Details */}
      <div className="space-y-8">
        {protocol.fases.map((phase, index) => (
          <PhaseDetail
            key={phase.id}
            phase={phase}
            ref={(el) => {
              phaseRefs.current[index] = el;
            }}
          />
        ))}
      </div>

      {/* Return to Activity */}
      {protocol.criteriosRetornoActividad.length > 0 && (
        <div className="mt-10">
          <CriteriaList
            title="Criterios de Retorno a la Actividad"
            criteria={protocol.criteriosRetornoActividad}
          />
        </div>
      )}

      {/* Complications */}
      {protocol.complicacionesPotenciales.length > 0 && (
        <div className="mt-6 rounded-lg border p-4">
          <h3 className="mb-2.5 flex items-center gap-2 text-sm font-semibold">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            Complicaciones Potenciales
          </h3>
          <ul className="space-y-1 pl-6">
            {protocol.complicacionesPotenciales.map((c, i) => (
              <li key={i} className="list-disc text-sm text-muted-foreground">
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* References */}
      {references.length > 0 && (
        <div className="mt-10 rounded-lg border bg-muted/20 p-5">
          <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
            <BookOpen className="h-4 w-4 text-primary" />
            Referencias
          </h3>
          <ol className="space-y-3">
            {references.map((ref, i) => (
              <li key={ref.id} className="text-sm leading-relaxed">
                <span className="mr-2 font-semibold text-primary">
                  {i + 1}.
                </span>
                <span className="text-foreground/80">
                  {ref.autores}. {ref.titulo}. <em>{ref.revista}</em>.{" "}
                  {ref.anio}.
                  {ref.volumen && ` ${ref.volumen}`}
                  {ref.paginas && `:${ref.paginas}`}.
                </span>
                {ref.doi && (
                  <span className="ml-1 text-xs text-muted-foreground">
                    DOI: {ref.doi}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
