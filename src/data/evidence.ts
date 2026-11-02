/**
 * Evidencia de cada protocolo, revisada en PubMed. Solo la ve el equipo médico.
 * Cada referencia se comprobó contra los metadatos de PubMed (PMID, título, autores, revista, año).
 */

export type EvidenceLevel = "alta" | "moderada" | "baja" | "muy baja";

export interface Reference {
  pmid: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  /** Qué apoya del protocolo */
  supports: string;
}

export interface Evidence {
  level: EvidenceLevel;
  summary: string;
  /** Puntos sin evidencia sólida, a criterio del cirujano */
  gaps: string[];
  refs: Reference[];
}

export const EVIDENCE: Record<string, Evidence> = {};

/** Fecha de la última revisión bibliográfica */
export const EVIDENCE_REVIEWED = "";
