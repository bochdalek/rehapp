// Cambia la clave del modo médico.
// Uso: node scripts/cambiar-clave.mjs "nueva-clave"
// Guarda en src/data/clinic.ts solo la huella (PBKDF2-SHA256), nunca la clave.
import { pbkdf2Sync, randomBytes } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const key = process.argv[2];
if (!key || key.length < 8) {
  console.error('Indica una clave de al menos 8 caracteres: node scripts/cambiar-clave.mjs "nueva-clave"');
  process.exit(1);
}
const clean = key.trim().toLowerCase().replace(/[\s-]/g, "");
const salt = randomBytes(16);
const hash = pbkdf2Sync(clean, salt, 250_000, 32, "sha256").toString("hex");
const file = new URL("../src/data/clinic.ts", import.meta.url);
const src = readFileSync(file, "utf8")
  .replace(/salt: "[0-9a-f]+"/, `salt: "${salt.toString("hex")}"`)
  .replace(/hash: "[0-9a-f]+"/, `hash: "${hash}"`);
writeFileSync(file, src);
console.log("Clave cambiada. Sube el cambio para que se publique.");
