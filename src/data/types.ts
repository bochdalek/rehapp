export type Limb = "superior" | "inferior";

export interface Exercise {
  id: string;
  name: string;
  /** Pasos explicados en lenguaje sencillo */
  how: string[];
  /** Cuántas veces: "10 repeticiones, 3 veces al día" */
  dose: string;
  tip?: string;
}

export interface Phase {
  /** Semana en la que empieza la fase por defecto (0 = día de la cirugía) */
  fromWeek: number;
  title: string;
  summary: string;
  goals: string[];
  allowed: string[];
  avoid: string[];
  exercises: string[];
}

/** Restricciones que el cirujano puede ajustar para cada paciente (en semanas desde la cirugía) */
export interface Restrictions {
  /** Miembro inferior: sin apoyar el pie hasta esta semana */
  noWeightUntil?: number;
  /** Miembro inferior: apoyo parcial con muletas hasta esta semana */
  partialUntil?: number;
  /** Miembro superior: no cargar peso con el brazo hasta esta semana */
  noLiftUntil?: number;
  /** Ortesis / férula / cabestrillo */
  device?: string;
  deviceUntil?: number;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Procedure {
  id: string;
  name: string;
  group: string;
  limb: Limb;
  intro: string;
  defaults: Restrictions;
  phases: Phase[];
  faq?: Faq[];
  warnings?: string[];
}
