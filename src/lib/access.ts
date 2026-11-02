import { ACCESS } from "../data/clinic";

const KEY = "rehapp.medico";

function hex(buf: ArrayBuffer) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function fromHex(h: string) {
  return new Uint8Array(h.match(/../g)!.map((x) => parseInt(x, 16)));
}

export async function checkKey(key: string): Promise<boolean> {
  const clean = key.trim().toLowerCase().replace(/[\s-]/g, "");
  const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(clean), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: fromHex(ACCESS.salt), iterations: ACCESS.iterations },
    material,
    256,
  );
  return hex(bits) === ACCESS.hash;
}

/** El dispositivo recuerda que ya se introdujo la clave (hasta que cambie la clave) */
export function isUnlocked(): boolean {
  try {
    return localStorage.getItem(KEY) === ACCESS.hash;
  } catch {
    return false;
  }
}

export function setUnlocked(on: boolean) {
  try {
    if (on) localStorage.setItem(KEY, ACCESS.hash);
    else localStorage.removeItem(KEY);
  } catch {
    /* sin almacenamiento: habrá que poner la clave cada vez */
  }
}
