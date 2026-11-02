import type { Procedure } from "../types";
import { upper } from "./upper";
import { lower } from "./lower";

export const PROCEDURES: Procedure[] = [
  ...lower.filter((p) => p.group === "Prótesis"),
  ...upper,
  ...lower.filter((p) => p.group !== "Prótesis"),
];

export function getProcedure(id: string): Procedure | undefined {
  return PROCEDURES.find((p) => p.id === id);
}

export function groupedProcedures(): { group: string; items: Procedure[] }[] {
  const map = new Map<string, Procedure[]>();
  PROCEDURES.forEach((p) => map.set(p.group, [...(map.get(p.group) ?? []), p]));
  return [...map.entries()].map(([group, items]) => ({ group, items }));
}
