import { useState, type FormEvent } from "react";
import { Camera, KeyRound } from "lucide-react";
import { Button, Logo } from "../components/ui";
import { todayKey, type PatientConfig } from "../lib/config";
import { decodeShort } from "../lib/shortcode";

const STEPS = [
  { title: "Saber en qué punto estás", text: "En qué semana y fase de tu recuperación te encuentras, y qué viene después." },
  { title: "Qué puedes hacer y qué no", text: "Si puedes apoyar el pie o cargar con el brazo, y hasta cuándo llevar la férula." },
  { title: "Tus ejercicios de cada día", text: "Explicados paso a paso, para que los marques al hacerlos." },
  { title: "Cuándo pedir ayuda", text: "Las señales de alarma, para saber cuándo ir a Urgencias o a tu centro de salud." },
];

export default function Welcome({ onDemo }: { onDemo: (c: PatientConfig) => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const c = decodeShort(code);
    if (c) onDemo(c);
    else setError("Ese código no es válido. Revisa que esté bien escrito.");
  };

  const demo = () => {
    const d = new Date();
    d.setDate(d.getDate() - 10);
    onDemo({ p: "protesis-rodilla", d: todayKey(d), s: "der", n: "Carmen" });
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 py-8">
      <Logo className="size-24 drop-shadow-md" alt="RehApp" />

      <h1 className="mt-6 text-4xl leading-tight font-semibold text-slate-900">Tu recuperación, semana a semana.</h1>
      <p className="mt-3 text-lg text-slate-600">
        Una guía para después de tu operación de fractura o de prótesis de rodilla, preparada por tu cirujano.
      </p>

      <div className="mt-6 rounded-xl bg-linear-to-br from-brand-800 via-brand-700 to-accent-600 p-4 text-white shadow-md shadow-brand-900/15">
        <p className="flex gap-3">
          <Camera className="mt-0.5 size-6 shrink-0" />
          <span>
            <span className="font-semibold">Escanea el código QR</span> que te dimos en la consulta con la cámara del móvil.
          </span>
        </p>
        <form onSubmit={submit} className="mt-4 border-t border-white/25 pt-4">
          <label htmlFor="code" className="flex gap-3">
            <KeyRound className="mt-0.5 size-6 shrink-0" />
            <span>
              <span className="font-semibold">O escribe tu código</span> (12 letras y números).
            </span>
          </label>
          <div className="mt-3 flex gap-2">
            <input
              id="code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              placeholder="XXXX-XXXX-XXXX"
              autoCapitalize="characters"
              autoComplete="off"
              spellCheck={false}
              className="min-w-0 flex-1 rounded-lg bg-white px-3 py-2.5 text-lg font-semibold tracking-wider text-slate-900 uppercase placeholder:text-slate-400"
              aria-invalid={!!error}
              aria-describedby={error ? "code-error" : undefined}
            />
            <button type="submit" className="rounded-lg bg-white px-4 font-semibold text-brand-800 hover:bg-brand-50">
              Entrar
            </button>
          </div>
          {error && (
            <p id="code-error" className="mt-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-red-700">
              {error}
            </p>
          )}
        </form>
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
      <p className="mt-6 text-sm text-slate-500">
        Lo que anotes se guarda solo en tu móvil. El contenido está contrastado con estudios científicos:{" "}
        <a href="#/fuentes" className="font-semibold text-brand-700 underline">
          ver las fuentes
        </a>
        .
      </p>

      <div className="mt-auto flex flex-col gap-2 pt-8">
        <Button variant="secondary" onClick={demo}>
          Ver un ejemplo
        </Button>
      </div>
    </main>
  );
}
