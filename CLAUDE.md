# RehApp

App web estática (React + TypeScript + Vite + Tailwind v4) para pacientes en recuperación tras cirugía de fracturas y prótesis de rodilla. Todo en español.

- Contenido clínico en `src/data/` (procedimientos, ejercicios, alarmas, FAQ). Los ids de ejercicios usados en las fases deben existir en `exercises.ts`.
- Sin backend: la configuración del paciente va codificada en el enlace (`#/p/<código>`, ver `src/lib/config.ts`) y el progreso se guarda en `localStorage`.
- Enrutado por hash (`src/lib/router.ts`) para funcionar en GitHub Pages bajo `/rehapp/`.
- Comprobar con `npm run build` (incluye `tsc`).
- Código corto del paciente en `src/lib/shortcode.ts`: depende del campo `code` de cada procedimiento, que no debe cambiar nunca (los nuevos, al final).
- Clave del modo médico: `node scripts/cambiar-clave.mjs` (guarda la huella en `src/data/clinic.ts`).
