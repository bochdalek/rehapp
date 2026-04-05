export type BodyRegion =
  | "miembro-superior"
  | "miembro-inferior"
  | "pelvis";

export type AnatomicalLocation =
  | "clavicula"
  | "hombro"
  | "brazo"
  | "codo"
  | "muneca"
  | "pelvis"
  | "acetabulo"
  | "cadera"
  | "muslo"
  | "rodilla"
  | "pierna"
  | "tobillo"
  | "pie";

export type SurgicalApproach =
  | "RAFI"
  | "artroplastia"
  | "clavo-endomedular"
  | "placa"
  | "tornillos"
  | "cerclaje"
  | "hemiartroplastia"
  | "artroplastia-total";

export type WeightBearingStatus =
  | "sin-carga"
  | "carga-contacto"
  | "carga-parcial"
  | "carga-progresiva"
  | "carga-completa"
  | "no-aplica";

export interface Exercise {
  id: string;
  nombre: string;
  descripcion: string;
  repeticiones?: string;
  frecuencia?: string;
  precauciones?: string[];
  progresion?: string;
}

export interface ROMGoal {
  movimiento: string;
  rangoObjetivo: string;
  restriccion?: string;
}

export interface Phase {
  id: string;
  numero: number;
  nombre: string;
  duracion: string;
  semanaInicio: number;
  semanaFin: number;
  objetivos: string[];
  estadoCarga: WeightBearingStatus;
  cargaPorcentaje?: number;
  cargaDetalle?: string;
  romObjetivos: ROMGoal[];
  ejercicios: Exercise[];
  precauciones: string[];
  banderasRojas: string[];
  criteriosAvance: string[];
  notas?: string;
}

export interface Protocol {
  id: string;
  nombre: string;
  nombreCorto: string;
  descripcion: string;
  region: BodyRegion;
  localizacion: AnatomicalLocation;
  abordajeQuirurgico: SurgicalApproach[];
  clasificaciones?: string[];
  indicacionesQuirurgicas?: string[];
  duracionTotal: string;
  semanasTotal: number;
  fases: Phase[];
  criteriosRetornoActividad: string[];
  complicacionesPotenciales: string[];
  referencias: string[];
  fechaActualizacion: string;
  nivelEvidencia?: string;
}

export interface Reference {
  id: string;
  autores: string;
  titulo: string;
  revista: string;
  anio: number;
  volumen?: string;
  paginas?: string;
  doi?: string;
  pmid?: string;
}

// Body region labels for UI
export const BODY_REGION_LABELS: Record<BodyRegion, string> = {
  "miembro-superior": "Miembro Superior",
  "miembro-inferior": "Miembro Inferior",
  pelvis: "Pelvis y Acetábulo",
};

export const WEIGHT_BEARING_LABELS: Record<WeightBearingStatus, string> = {
  "sin-carga": "Sin carga",
  "carga-contacto": "Carga por contacto",
  "carga-parcial": "Carga parcial",
  "carga-progresiva": "Carga progresiva",
  "carga-completa": "Carga completa",
  "no-aplica": "No aplica",
};

export const WEIGHT_BEARING_COLORS: Record<WeightBearingStatus, string> = {
  "sin-carga": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  "carga-contacto": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "carga-parcial": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "carga-progresiva": "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
  "carga-completa": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "no-aplica": "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
};

export const LOCATION_ICONS: Record<AnatomicalLocation, string> = {
  clavicula: "Bone",
  hombro: "Bone",
  brazo: "Bone",
  codo: "Bone",
  muneca: "Hand",
  pelvis: "Bone",
  acetabulo: "Bone",
  cadera: "Bone",
  muslo: "Bone",
  rodilla: "Bone",
  pierna: "Bone",
  tobillo: "Footprints",
  pie: "Footprints",
};
