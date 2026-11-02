import { Camera, Stethoscope } from "lucide-react";
import { Button } from "../components/ui";
import { navigate } from "../lib/router";
import { todayKey, type PatientConfig } from "../lib/config";

const STEPS = [
  { title: "Saber en qué punto estás", text: "En qué semana y fase de tu recuperación te encuentras, y qué viene después." },
  { title: "Qué puedes hacer y qué no", text: "Si puedes apoyar el pie o cargar con el brazo, y hasta cuándo llevar la férula." },
  { title: "Tus ejercicios de cada día", text: "Explicados paso a paso, para que los marques al hacerlos." },
  { title: "Cuándo pedir ayuda", text: "Las señales de alarma y el teléfono de tu equipo, siempre a mano." },
];

export default function Welcome({ onDemo }: { onDemo: (c: PatientConfig) => void }) {
  const demo = () => {
    const d = new Date();
    d.setDate(d.getDate() - 10);
    onDemo({ p: "protesis-rodilla", d: todayKey(d), s: "der", n: "Carmen" });
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 py-8">
      <p className="flex items-center gap-2 font-semibold text-brand-700">
        <span className="size-3 rotate-45 bg-brand-700" aria-hidden="true" /> RehApp
      </p>

      <h1 className="mt-8 text-4xl leading-tight font-semibold text-slate-900">Tu recuperación, semana a semana.</h1>
      <p className="mt-3 text-lg text-slate-600">
        Una guía para después de tu operación de fractura o de prótesis de rodilla, preparada por tu cirujano.
      </p>

      <div className="mt-6 flex gap-3 rounded-xl bg-brand-700 p-4 text-white">
        <Camera className="mt-0.5 size-6 shrink-0" />
        <p>
          <span className="font-semibold">Para empezar, escanea el código QR</span> que te dimos en la consulta con la cámara del móvil, o abre el
          enlace que te enviamos.
        </p>
      </div>

      <ol className="mt-8 space-y-5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span className="font-display w-6 shrink-0 text-2xl leading-none font-semibold text-brand-300">{i + 1}</span>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
              <p className="text-slate-600">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-slate-500">Lo que anotes se guarda solo en tu móvil.</p>

      <div className="mt-auto flex flex-col gap-2 pt-8">
        <Button variant="secondary" onClick={demo}>
          Ver un ejemplo
        </Button>
        <Button variant="ghost" onClick={() => navigate("/medico")}>
          <Stethoscope className="size-5" /> Acceso para el equipo médico
        </Button>
      </div>
    </main>
  );
}
