import type { Procedure, Restrictions } from "../data/types";
import { currentPhaseIndex, daysSince, phaseStarts, restrictionsFor, type PatientConfig } from "./config";

export interface PatientCtx {
  config: PatientConfig;
  proc: Procedure;
  r: Restrictions;
  starts: number[];
  days: number;
  week: number;
  phaseIdx: number;
}

export function buildCtx(config: PatientConfig, proc: Procedure, now = new Date()): PatientCtx {
  const days = daysSince(config.d, now);
  const starts = phaseStarts(proc, config);
  return {
    config,
    proc,
    r: restrictionsFor(proc, config),
    starts,
    days,
    week: Math.floor(Math.max(days, 0) / 7) + 1,
    phaseIdx: currentPhaseIndex(starts, Math.max(days, 0)),
  };
}

export function sideLabel(s?: "izq" | "der"): string {
  return s === "izq" ? "lado izquierdo" : s === "der" ? "lado derecho" : "";
}
