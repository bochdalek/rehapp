/**
 * Ajustes del equipo. Se muestran a los pacientes que entren con código corto
 * (el código no lleva estos datos).
 */
export const CLINIC = {
  /** Nombre del cirujano o del equipo, p. ej. "Dra. García · Traumatología" */
  team: "",
};

/**
 * Clave de acceso al modo médico. Solo se guarda su huella (PBKDF2-SHA256),
 * nunca la clave. Para cambiarla, genera una nueva huella (ver README).
 */
export const ACCESS = {
  salt: "a98c9891c47bf86bd9a4bcaf9144a151",
  hash: "ca8b5220c251690d9ca91b3728e6244bed275af85bfd218dc75be85c15396366",
  iterations: 250_000,
};
