# RehApp

Guía de recuperación para pacientes operados de **fracturas** y **prótesis de rodilla**.

## Cómo funciona

1. **El cirujano** abre `#/medico`, elige la intervención, la fecha y el lado, ajusta las restricciones
   (apoyo, carga, ortesis) y las semanas de cada fase, y añade indicaciones personales.
2. Se genera un **código QR / enlace** (se puede imprimir una hoja para el paciente). Toda la
   configuración viaja dentro del enlace: no hay servidor ni base de datos.
3. **El paciente** lo abre en su móvil y ve:
   - **Hoy**: día y semana desde la cirugía, fase actual, si puede apoyar/cargar, ortesis, próxima revisión y ejercicios del día para marcar.
   - **Mi plan**: todas las fases con fechas, objetivos, qué puede y qué no puede hacer, y ejercicios.
   - **Mi dolor**: diario de dolor 0-10 con gráfica.
   - **Ayuda**: señales de alarma (112 / Urgencias / consulta), teléfono del equipo y preguntas frecuentes.

Los datos del paciente se guardan solo en su móvil (`localStorage`).

## Contenido clínico

Todo el contenido está en `src/data/` y se puede editar sin tocar la interfaz:

| Archivo | Contenido |
| --- | --- |
| `procedures/upper.ts` | Clavícula, húmero proximal, diáfisis humeral, codo, radio distal, mano |
| `procedures/lower.ts` | Prótesis de rodilla, cadera, pelvis/acetábulo, fémur, rótula, meseta tibial, tibia, tobillo, pilón, calcáneo, pie |
| `exercises.ts` | Biblioteca de ejercicios explicados para pacientes |
| `general.ts` | Señales de alarma y preguntas frecuentes generales |

> ⚠️ Los protocolos son orientativos y deben ser revisados por el equipo quirúrgico antes de usarse con pacientes.

## Desarrollo

```bash
npm install
npm run dev
```

`npm run build` genera la web estática en `dist/`. Al hacer push a `main` se publica automáticamente en GitHub Pages.

Tecnología: React + TypeScript + Vite + Tailwind CSS.
