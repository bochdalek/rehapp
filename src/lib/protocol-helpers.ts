import { Protocol, BodyRegion } from "@/types/protocol";

export function getProtocolBySlug(
  protocols: Protocol[],
  slug: string
): Protocol | undefined {
  return protocols.find((p) => p.id === slug);
}

export function filterProtocols(
  protocols: Protocol[],
  query: string,
  region?: BodyRegion
): Protocol[] {
  let filtered = protocols;

  if (region) {
    filtered = filtered.filter((p) => p.region === region);
  }

  if (query.trim()) {
    const q = query.toLowerCase().trim();
    filtered = filtered.filter(
      (p) =>
        p.nombre.toLowerCase().includes(q) ||
        p.nombreCorto.toLowerCase().includes(q) ||
        p.descripcion.toLowerCase().includes(q) ||
        p.localizacion.toLowerCase().includes(q)
    );
  }

  return filtered;
}

export function getRegionCounts(
  protocols: Protocol[]
): Record<BodyRegion, number> {
  const counts: Record<BodyRegion, number> = {
    "miembro-superior": 0,
    "miembro-inferior": 0,
    pelvis: 0,
  };

  protocols.forEach((p) => {
    counts[p.region]++;
  });

  return counts;
}
