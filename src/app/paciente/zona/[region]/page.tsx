import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allProtocols } from "@/data/protocols";
import { getProtocolsByDiagramRegion } from "@/lib/protocol-helpers";
import {
  DiagramRegion,
  DIAGRAM_REGION_LABELS,
  DIAGRAM_REGIONS,
} from "@/lib/body-diagram-mapping";
import { FractureOptionCard } from "@/components/patient/fracture-option-card";

export function generateStaticParams() {
  return DIAGRAM_REGIONS.map((region) => ({ region }));
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  if (!DIAGRAM_REGIONS.includes(region as DiagramRegion)) {
    notFound();
  }

  const diagramRegion = region as DiagramRegion;
  const protocols = getProtocolsByDiagramRegion(allProtocols, diagramRegion);

  if (protocols.length === 0) {
    notFound();
  }

  // Auto-advance if only one protocol matches
  if (protocols.length === 1) {
    redirect(`/paciente/protocolo/${protocols[0].id}`);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/paciente"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Cambiar zona
      </Link>

      <div className="mb-8">
        <p className="mb-1 text-sm font-medium uppercase tracking-wide text-primary">
          {DIAGRAM_REGION_LABELS[diagramRegion]}
        </p>
        <h1 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
          ¿Qué tipo de fractura tienes?
        </h1>
        <p className="text-base text-muted-foreground">
          Selecciona la que corresponde a tu caso
        </p>
      </div>

      <div className="space-y-3">
        {protocols.map((protocol) => (
          <FractureOptionCard key={protocol.id} protocol={protocol} />
        ))}
      </div>

      <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
        <strong>¿No sabes cuál es la tuya?</strong> Consulta el informe
        quirúrgico que te entregaron en el hospital, o pregunta a tu cirujano
        qué tipo de fractura tienes y cómo te la operaron.
      </p>
    </div>
  );
}
