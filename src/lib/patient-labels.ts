import { WeightBearingStatus } from "@/types/protocol";

/**
 * Patient-friendly names for each protocol.
 * Keyed by protocol.id. Manual translations from clinical to plain Spanish.
 */
export const PATIENT_PROTOCOL_NAMES: Record<string, string> = {
  "clavicula-rafi": "Fractura de clavícula operada con placa",
  "humero-proximal-rafi": "Fractura de hombro (húmero) operada con placa",
  "diafisis-humeral-clavo": "Fractura del brazo (húmero) operada con clavo",
  "olecranon-rafi": "Fractura de codo operada",
  "radio-distal-placa": "Fractura de muñeca operada con placa",
  "pelvis-rafi": "Fractura de pelvis operada",
  "acetabulo-rafi": "Fractura de acetábulo (cadera) operada",
  "cadera-cuello-femoral-artroplastia":
    "Fractura del cuello del fémur con prótesis de cadera",
  "cadera-intertrocanterica-clavo":
    "Fractura de cadera operada con clavo",
  "diafisis-femoral-clavo": "Fractura del muslo (fémur) operada con clavo",
  "femur-distal-rafi": "Fractura del fémur cerca de la rodilla con placa",
  "rotula-rafi": "Fractura de rótula operada",
  "meseta-tibial-rafi": "Fractura de la meseta tibial (rodilla) con placa",
  "diafisis-tibial-clavo": "Fractura de la tibia (pierna) operada con clavo",
  "tobillo-rafi": "Fractura de tobillo operada con placa o tornillos",
  "calcaneo-rafi": "Fractura del talón (calcáneo) operada",
};

export function getPatientProtocolName(
  id: string,
  fallback: string
): string {
  return PATIENT_PROTOCOL_NAMES[id] || fallback;
}

/**
 * Plain-language weight-bearing labels for patients.
 */
export const PATIENT_WEIGHT_BEARING_LABELS: Record<WeightBearingStatus, string> = {
  "sin-carga": "No apoyes el pie",
  "carga-contacto": "Apoyo mínimo (solo para equilibrio)",
  "carga-parcial": "Apoyo parcial",
  "carga-progresiva": "Apoyo aumentando poco a poco",
  "carga-completa": "Puedes apoyar todo el peso",
  "no-aplica": "No aplica",
};

export const PATIENT_WEIGHT_BEARING_DESCRIPTIONS: Record<WeightBearingStatus, string> = {
  "sin-carga":
    "Tu pie no puede tocar el suelo. Usa muletas o andador para moverte sin apoyar ese lado.",
  "carga-contacto":
    "Puedes apoyar el pie levemente solo para mantener el equilibrio, sin descargar peso.",
  "carga-parcial":
    "Puedes apoyar una parte del peso de tu cuerpo (según indique tu médico).",
  "carga-progresiva":
    "Puedes ir apoyando cada vez más peso, progresando poco a poco.",
  "carga-completa":
    "Puedes apoyar todo tu peso y caminar normalmente.",
  "no-aplica":
    "Este ejercicio no implica apoyar el peso.",
};

export const PATIENT_WEIGHT_BEARING_COLORS: Record<WeightBearingStatus, string> = {
  "sin-carga": "bg-red-100 text-red-900 border-red-300 dark:bg-red-950/40 dark:text-red-200 dark:border-red-800",
  "carga-contacto": "bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/40 dark:text-orange-200 dark:border-orange-800",
  "carga-parcial": "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800",
  "carga-progresiva": "bg-lime-100 text-lime-900 border-lime-300 dark:bg-lime-950/40 dark:text-lime-200 dark:border-lime-800",
  "carga-completa": "bg-green-100 text-green-900 border-green-300 dark:bg-green-950/40 dark:text-green-200 dark:border-green-800",
  "no-aplica": "bg-gray-100 text-gray-900 border-gray-300 dark:bg-gray-900/40 dark:text-gray-200 dark:border-gray-700",
};
