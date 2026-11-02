import type { Limb, Restrictions } from "./types";

/** Pautas postoperatorias habituales. Se aplican sobre cualquier fractura del mismo miembro. */
export interface Pattern {
  id: string;
  name: string;
  limb: Limb;
  r: Restrictions;
}

export const PATTERNS: Pattern[] = [
  // Miembro inferior: semanas sin apoyo / con apoyo parcial
  { id: "mi-inmediata", name: "Carga inmediata según tolerancia", limb: "inferior", r: { noWeightUntil: 0, partialUntil: 0 } },
  { id: "mi-parcial-6", name: "Carga parcial 6 semanas", limb: "inferior", r: { noWeightUntil: 0, partialUntil: 6 } },
  { id: "mi-descarga-4", name: "Descarga 4 sem · parcial hasta 6", limb: "inferior", r: { noWeightUntil: 4, partialUntil: 6 } },
  { id: "mi-descarga-6", name: "Descarga 6 sem · parcial hasta 10", limb: "inferior", r: { noWeightUntil: 6, partialUntil: 10 } },
  { id: "mi-descarga-8", name: "Descarga 8 sem · parcial hasta 12", limb: "inferior", r: { noWeightUntil: 8, partialUntil: 12 } },
  { id: "mi-descarga-12", name: "Descarga 12 sem · parcial hasta 16", limb: "inferior", r: { noWeightUntil: 12, partialUntil: 16 } },

  // Miembro superior: inmovilización y semanas sin cargar peso
  {
    id: "ms-libre-6",
    name: "Sin inmovilizar · sin carga 6 sem",
    limb: "superior",
    r: { device: undefined, deviceUntil: undefined, noLiftUntil: 6 },
  },
  {
    id: "ms-cabestrillo-2",
    name: "Cabestrillo 2 sem · sin carga 6 sem",
    limb: "superior",
    r: { device: "cabestrillo", deviceUntil: 2, noLiftUntil: 6 },
  },
  {
    id: "ms-cabestrillo-4",
    name: "Cabestrillo 4 sem · sin carga 8 sem",
    limb: "superior",
    r: { device: "cabestrillo", deviceUntil: 4, noLiftUntil: 8 },
  },
  { id: "ms-ferula-2", name: "Férula 2 sem · sin carga 6 sem", limb: "superior", r: { device: "férula", deviceUntil: 2, noLiftUntil: 6 } },
  { id: "ms-ferula-4", name: "Férula 4 sem · sin carga 8 sem", limb: "superior", r: { device: "férula", deviceUntil: 4, noLiftUntil: 8 } },
];

/** Plantilla guardada por el cirujano en su dispositivo */
export interface SavedTemplate {
  id: string;
  name: string;
  p: string;
  r: Restrictions;
  ph: number[];
  note?: string;
}
