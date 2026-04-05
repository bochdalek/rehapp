import { Protocol, Phase, BodyRegion } from "@/types/protocol";
import {
  DiagramRegion,
  LOCATION_TO_DIAGRAM,
} from "./body-diagram-mapping";

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

/**
 * Returns all protocols that map to a specific body diagram region.
 */
export function getProtocolsByDiagramRegion(
  protocols: Protocol[],
  region: DiagramRegion
): Protocol[] {
  return protocols.filter(
    (p) => LOCATION_TO_DIAGRAM[p.localizacion] === region
  );
}

/**
 * Returns counts of protocols per diagram region.
 */
export function getDiagramRegionCounts(
  protocols: Protocol[]
): Record<DiagramRegion, number> {
  const counts = {} as Record<DiagramRegion, number>;
  protocols.forEach((p) => {
    const region = LOCATION_TO_DIAGRAM[p.localizacion];
    counts[region] = (counts[region] || 0) + 1;
  });
  return counts;
}

/**
 * Returns the phase matching the given week post-surgery.
 * - If week < first phase's start → returns first phase + isBeforeStart flag
 * - If week > last phase's end → returns last phase + isAfterEnd flag
 * - Otherwise returns the phase where semanaInicio <= week <= semanaFin
 */
export function getCurrentPhase(
  protocol: Protocol,
  week: number
): {
  phase: Phase;
  phaseIndex: number;
  isBeforeStart: boolean;
  isAfterEnd: boolean;
} {
  const phases = protocol.fases;
  if (phases.length === 0) {
    throw new Error(`Protocol ${protocol.id} has no phases`);
  }

  const first = phases[0];
  const last = phases[phases.length - 1];

  if (week < first.semanaInicio) {
    return {
      phase: first,
      phaseIndex: 0,
      isBeforeStart: true,
      isAfterEnd: false,
    };
  }

  if (week > last.semanaFin) {
    return {
      phase: last,
      phaseIndex: phases.length - 1,
      isBeforeStart: false,
      isAfterEnd: true,
    };
  }

  const index = phases.findIndex(
    (p) => week >= p.semanaInicio && week <= p.semanaFin
  );
  const finalIndex = index === -1 ? phases.length - 1 : index;

  return {
    phase: phases[finalIndex],
    phaseIndex: finalIndex,
    isBeforeStart: false,
    isAfterEnd: false,
  };
}
