import { PROCEDURES } from "../data/procedures";
import type { Procedure } from "../data/types";
import { parseDate, phaseStarts, restrictionsFor, todayKey, type PatientConfig } from "./config";

/**
 * Código corto del paciente: 12 caracteres (p. ej. 7KQ2-M9XA-3TRB) que guardan
 * intervención, fecha, lado, restricciones y fases. Así el paciente puede
 * escribirlo en lugar de escanear el QR.
 *
 * No caben: nombre, indicaciones personales, revisión ni el texto exacto de la
 * ortesis (se usa el del protocolo). Para eso está el QR / enlace.
 *
 * Bits: versión 1 · intervención 6 · fecha 14 · lado 2 · restricción A 5 ·
 * restricción B 5 · semanas ortesis 5 · lleva ortesis 1 · inicio fases 2-4 3×5 ·
 * reserva 1 = 55 bits (11 caracteres) + 1 carácter de control.
 */

const ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ"; // Crockford: sin I, L, O, U
const EPOCH = new Date(2024, 0, 1);
const MAX_WEEK = 31;

function checksum(values: number[]): number {
  return values.reduce((sum, v, i) => sum + v * (2 * i + 1), 0) % 32;
}

function dayNumber(date: string): number {
  return Math.round((parseDate(date).getTime() - EPOCH.getTime()) / 86_400_000);
}

/** Por qué no se puede generar el código, o null si se puede */
export function shortCodeProblem(c: PatientConfig, proc: Procedure): string | null {
  const r = restrictionsFor(proc, c);
  const starts = phaseStarts(proc, c);
  const weeks = [r.noWeightUntil, r.partialUntil, r.noLiftUntil, r.deviceUntil, ...starts].map((w) => w ?? 0);
  if (weeks.some((w) => w < 0 || w > MAX_WEEK || !Number.isInteger(w)))
    return `Las semanas deben ser números enteros entre 0 y ${MAX_WEEK}.`;
  const d = dayNumber(c.d);
  if (d < 0 || d >= 1 << 14) return "La fecha de la cirugía está fuera de rango.";
  if (proc.phases.length > 4) return "Este protocolo tiene demasiadas fases para el código corto.";
  return null;
}

export function encodeShort(c: PatientConfig, proc: Procedure): string | null {
  if (shortCodeProblem(c, proc)) return null;
  const r = restrictionsFor(proc, c);
  const starts = phaseStarts(proc, c);
  const lower = proc.limb === "inferior";
  const fields: [number, number][] = [
    [0, 1],
    [proc.code, 6],
    [dayNumber(c.d), 14],
    [c.s === "izq" ? 1 : c.s === "der" ? 2 : 0, 2],
    [(lower ? r.noWeightUntil : r.noLiftUntil) ?? 0, 5],
    [lower ? (r.partialUntil ?? 0) : 0, 5],
    [r.device ? (r.deviceUntil ?? 0) : 0, 5],
    [r.device ? 1 : 0, 1],
    [starts[1] ?? 0, 5],
    [starts[2] ?? 0, 5],
    [starts[3] ?? 0, 5],
    [0, 1],
  ];
  let n = 0n;
  for (const [v, bits] of fields) n = (n << BigInt(bits)) | BigInt(v);
  const values: number[] = [];
  for (let i = 10; i >= 0; i--) values.push(Number((n >> BigInt(i * 5)) & 31n));
  values.push(checksum(values));
  const s = values.map((v) => ALPHABET[v]).join("");
  return `${s.slice(0, 4)}-${s.slice(4, 8)}-${s.slice(8)}`;
}

/** Limpia lo que escribe el paciente: minúsculas, espacios, guiones, O→0, I/L→1 */
export function normalizeShort(input: string): string {
  return input.toUpperCase().replace(/[\s-]/g, "").replace(/O/g, "0").replace(/[IL]/g, "1");
}

export function decodeShort(input: string): PatientConfig | null {
  const s = normalizeShort(input);
  if (s.length !== 12) return null;
  const values = [...s].map((ch) => ALPHABET.indexOf(ch));
  if (values.some((v) => v < 0)) return null;
  if (checksum(values.slice(0, 11)) !== values[11]) return null;

  let n = 0n;
  for (const v of values.slice(0, 11)) n = (n << 5n) | BigInt(v);
  const sizes = [1, 6, 14, 2, 5, 5, 5, 1, 5, 5, 5, 1];
  let shift = sizes.reduce((a, b) => a + b, 0);
  const f = sizes.map((bits) => {
    shift -= bits;
    return Number((n >> BigInt(shift)) & ((1n << BigInt(bits)) - 1n));
  });
  const [version, code, day, side, a, b, devWeeks, hasDevice, p2, p3, p4] = f;
  if (version !== 0) return null;
  const proc = PROCEDURES.find((p) => p.code === code);
  if (!proc) return null;

  const date = new Date(EPOCH);
  date.setDate(date.getDate() + day);
  const lower = proc.limb === "inferior";
  const device = hasDevice ? (proc.defaults.device ?? (lower ? "ortesis" : "férula")) : undefined;

  const c: PatientConfig = {
    p: proc.id,
    d: todayKey(date),
    r: lower
      ? { noWeightUntil: a, partialUntil: b, device, deviceUntil: hasDevice ? devWeeks : undefined }
      : { noLiftUntil: a, device, deviceUntil: hasDevice ? devWeeks : undefined },
  };
  if (side) c.s = side === 1 ? "izq" : "der";
  const starts = [0, p2, p3, p4].slice(0, proc.phases.length);
  if (starts.some((w, i) => w !== proc.phases[i].fromWeek)) c.ph = starts;
  return c;
}
