import type { Procedure, Restrictions } from "../data/types";

/** Lo que el cirujano configura y viaja dentro del enlace / QR */
export interface PatientConfig {
  /** id del procedimiento */
  p: string;
  /** fecha de cirugía YYYY-MM-DD */
  d: string;
  /** lado: "izq" | "der" */
  s?: "izq" | "der";
  /** nombre (opcional, solo para saludar) */
  n?: string;
  /** restricciones personalizadas */
  r?: Restrictions;
  /** semanas de inicio de cada fase, si se han ajustado */
  ph?: number[];
  /** notas del cirujano */
  note?: string;
  /** nombre del cirujano / equipo */
  dr?: string;
  /** teléfono de contacto */
  tel?: string;
  /** próxima revisión YYYY-MM-DD */
  rev?: string;
}

export function encodeConfig(c: PatientConfig): string {
  const json = JSON.stringify(c);
  const bytes = new TextEncoder().encode(json);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeConfig(code: string): PatientConfig | null {
  try {
    const b64 = code.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
    const c = JSON.parse(new TextDecoder().decode(bytes)) as PatientConfig;
    if (!c || typeof c.p !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(c.d)) return null;
    return c;
  } catch {
    return null;
  }
}

export function patientLink(c: PatientConfig): string {
  const base = window.location.href.split("#")[0];
  return `${base}#/p/${encodeConfig(c)}`;
}

/** Fecha local a medianoche a partir de YYYY-MM-DD */
export function parseDate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function todayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function daysSince(dateStr: string, now = new Date()): number {
  const a = parseDate(dateStr);
  const b = parseDate(todayKey(now));
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

export function formatDate(s: string): string {
  return parseDate(s).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}

/** Fecha en la que se cumple la semana `week` desde la cirugía */
export function dateAtWeek(surgery: string, week: number): string {
  const d = parseDate(surgery);
  d.setDate(d.getDate() + week * 7);
  return todayKey(d);
}

export function restrictionsFor(proc: Procedure, c: PatientConfig): Restrictions {
  return { ...proc.defaults, ...(c.r ?? {}) };
}

export function phaseStarts(proc: Procedure, c: PatientConfig): number[] {
  const custom = c.ph;
  if (custom && custom.length === proc.phases.length) return custom;
  return proc.phases.map((p) => p.fromWeek);
}

/** Índice de la fase actual según los días transcurridos */
export function currentPhaseIndex(starts: number[], days: number): number {
  const week = days / 7;
  let idx = 0;
  starts.forEach((s, i) => {
    if (week >= s) idx = i;
  });
  return idx;
}

export type Tone = "red" | "amber" | "green";

export interface StatusLine {
  tone: Tone;
  title: string;
  detail: string;
  until?: string;
}

/** Traduce las restricciones a mensajes claros para el paciente en el día de hoy */
export function statusToday(proc: Procedure, r: Restrictions, surgery: string, days: number): StatusLine[] {
  const week = days / 7;
  const out: StatusLine[] = [];

  if (r.device && r.deviceUntil && week < r.deviceUntil) {
    out.push({
      tone: "amber",
      title: `Lleva tu ${r.device}`,
      detail: "Úsala tal y como te han explicado. Quítatela solo para lo que te hayan autorizado (aseo, ejercicios).",
      until: dateAtWeek(surgery, r.deviceUntil),
    });
  }

  if (proc.limb === "inferior") {
    const nw = r.noWeightUntil ?? 0;
    const pw = r.partialUntil ?? 0;
    if (week < nw) {
      out.push({
        tone: "red",
        title: "No apoyes el pie operado",
        detail: "Camina con muletas o andador sin cargar peso en la pierna operada. Puedes rozar el suelo con el pie para mantener el equilibrio.",
        until: dateAtWeek(surgery, nw),
      });
    } else if (week < pw) {
      out.push({
        tone: "amber",
        title: "Apoyo parcial con muletas",
        detail: "Puedes apoyar parte de tu peso en la pierna operada, siempre con muletas o andador. Ve aumentando poco a poco si no hay dolor.",
        until: dateAtWeek(surgery, pw),
      });
    } else {
      out.push({
        tone: "green",
        title: "Puedes apoyar el pie",
        detail: "Apoya todo el peso que tolere tu pierna. Deja las muletas de forma progresiva (primero una, luego ninguna) cuando camines sin cojear.",
      });
    }
  } else {
    const nl = r.noLiftUntil ?? 0;
    if (week < nl) {
      out.push({
        tone: "red",
        title: "No cargues peso con el brazo",
        detail: "Nada más pesado que un vaso de agua o un móvil. No te apoyes en ese brazo para levantarte ni empujes con él.",
        until: dateAtWeek(surgery, nl),
      });
    } else {
      out.push({
        tone: "green",
        title: "Puedes ir cargando peso",
        detail: "Empieza con objetos ligeros y aumenta poco a poco. Las molestias leves son normales; el dolor intenso no.",
      });
    }
  }
  return out;
}
