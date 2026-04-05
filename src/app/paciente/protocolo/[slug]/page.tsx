import { notFound } from "next/navigation";
import { Suspense } from "react";
import { allProtocols } from "@/data/protocols";
import { getProtocolBySlug } from "@/lib/protocol-helpers";
import { PatientProtocolClient } from "./patient-protocol-client";

export function generateStaticParams() {
  return allProtocols.map((protocol) => ({ slug: protocol.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const protocol = getProtocolBySlug(allProtocols, slug);
  if (!protocol) return { title: "Protocolo no encontrado" };

  return {
    title: `${protocol.nombreCorto} | Mi rehabilitación | REHAPP`,
    description: `Guía paso a paso para tu rehabilitación: ${protocol.nombreCorto}`,
  };
}

export default async function PatientProtocolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const protocol = getProtocolBySlug(allProtocols, slug);

  if (!protocol) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="p-8 text-center text-muted-foreground">Cargando...</div>}>
      <PatientProtocolClient protocol={protocol} />
    </Suspense>
  );
}
