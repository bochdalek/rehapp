# RehApp

Guía de recuperación para pacientes operados de **fracturas** y **prótesis de rodilla**.

## Cómo funciona

1. **El cirujano** abre `#/medico` (protegido con clave), elige la intervención, la fecha y el lado, aplica una
   pauta habitual (p. ej. «Descarga 6 sem · parcial hasta 10») o una de sus plantillas, ajusta las fases y
   añade indicaciones personales.
2. Se genera:
   - un **código corto** de 12 caracteres (p. ej. `28FW-0S8T-4CRA`) que el paciente escribe en la app;
     lleva intervención, fecha, lado, restricciones y fases;
   - un **QR / enlace** completo, que además lleva nombre, indicaciones y revisión;
   - una **hoja imprimible** con ambos.

   No hay servidor ni base de datos: todo viaja dentro del código o del enlace.
3. **El paciente** lo abre en su móvil u ordenador y ve:
   - **Hoy**: día y semana desde la cirugía, fase actual, si puede apoyar/cargar, ortesis, próxima revisión y ejercicios del día para marcar.
   - **Mi plan**: todas las fases con fechas, objetivos, qué puede y qué no puede hacer, y ejercicios.
   - **Mi dolor**: diario de dolor 0-10 con gráfica.
   - **Ayuda**: señales de alarma (112 / Urgencias / centro de salud) y preguntas frecuentes.

Los datos del paciente se guardan solo en su dispositivo (`localStorage`). En ordenador la app usa menú lateral y dos columnas.

## Ajustes de la consulta

- `src/data/clinic.ts`: nombre del equipo que verán los pacientes que entren con código corto.
- Clave del modo médico: `node scripts/cambiar-clave.mjs "nueva-clave"`. Solo se guarda su huella.

> La clave impide que un paciente entre por curiosidad en el modo médico, pero al no haber servidor no es
> una protección fuerte: no se debe considerar un control de acceso a datos sensibles (la app no guarda ninguno).

## Contenido clínico

Todo el contenido está en `src/data/` y se puede editar sin tocar la interfaz:

| Archivo | Contenido |
| --- | --- |
| `procedures/upper.ts` | Clavícula, húmero proximal, diáfisis humeral, codo, radio distal, mano |
| `procedures/lower.ts` | Prótesis de rodilla, cadera, pelvis/acetábulo, fémur, rótula, meseta tibial, tibia, tobillo, pilón, calcáneo, pie |
| `exercises.ts` | Biblioteca de ejercicios explicados para pacientes |
| `general.ts` | Señales de alarma y preguntas frecuentes generales |
| `templates.ts` | Pautas postoperatorias habituales (carga/descarga, inmovilización) |

> ⚠️ Los protocolos son orientativos y deben ser revisados por el equipo quirúrgico antes de usarse con pacientes.

## Desarrollo

```bash
npm install
npm run dev
```

`npm run build` genera la web estática en `dist/`. Al hacer push a `main` se publica automáticamente en GitHub Pages.

Tecnología: React + TypeScript + Vite + Tailwind CSS.
