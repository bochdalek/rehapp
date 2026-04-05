import { notFound } from "next/navigation";
import { allProtocols } from "@/data/protocols";
import { getProtocolBySlug } from "@/lib/protocol-helpers";
import { ProtocolClient } from "./protocol-client";

export function generateStaticParams() {
  return allProtocols.map((protocol) => ({
    slug: protocol.id,
  }));
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
    title: `${protocol.nombreCorto} | REHAPP`,
    description: protocol.descripcion,
  };
}

export default async function ProtocolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const protocol = getProtocolBySlug(allProtocols, slug);

  if (!protocol) {
    notFound();
  }

  return <ProtocolClient protocol={protocol} />;
}
