import { EVIDENCE, type EvidenceLevel } from "../data/evidence";

/** Cómo se explica a un paciente cuánta evidencia hay */
export const LEVEL_PLAIN: Record<EvidenceLevel, { label: string; text: string }> = {
  alta: { label: "Mucha evidencia", text: "Hay estudios de buena calidad que lo respaldan." },
  moderada: {
    label: "Buena evidencia",
    text: "Lo respaldan ensayos clínicos y revisiones de estudios. Puede afinarse con nuevos estudios.",
  },
  baja: {
    label: "Evidencia limitada",
    text: "Hay pocos estudios y no son concluyentes. La pauta combina lo que dicen con la experiencia de los cirujanos.",
  },
  "muy baja": {
    label: "Poca evidencia",
    text: "Apenas hay estudios sobre la recuperación de esta operación. La pauta se basa sobre todo en la experiencia de los cirujanos.",
  },
};

export function refCount(id: string): number {
  return EVIDENCE[id]?.refs.length ?? 0;
}

export const TOTAL_REFS = new Set(Object.values(EVIDENCE).flatMap((e) => e.refs.map((r) => r.pmid))).size;
