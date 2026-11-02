import { HeartPulse, QrCode, Stethoscope } from "lucide-react";
import { Button, Card } from "../components/ui";
import { navigate } from "../lib/router";
import { todayKey, type PatientConfig } from "../lib/config";

export default function Welcome({ onDemo }: { onDemo: (c: PatientConfig) => void }) {
  const demo = () => {
    const d = new Date();
    d.setDate(d.getDate() - 10);
    onDemo({ p: "protesis-rodilla", d: todayKey(d), s: "der", n: "Demo" });
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 py-10">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-2xl bg-teal-700 text-white">
          <HeartPulse className="size-7" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">RehApp</h1>
          <p className="text-slate-500">Tu guía de recuperación tras la cirugía</p>
        </div>
      </div>

      <Card className="mb-4">
        <div className="flex gap-3">
          <QrCode className="mt-1 size-6 shrink-0 text-teal-700" />
          <div>
            <h2 className="text-lg font-semibold text-slate-900">¿Eres paciente?</h2>
            <p className="mt-1 text-slate-600">
              Escanea con la cámara del móvil el código QR que te hemos dado en la consulta, o abre el enlace que te hemos
              enviado. Tu plan de recuperación aparecerá aquí automáticamente.
            </p>
          </div>
        </div>
      </Card>

      <Card className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">¿Qué encontrarás?</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
          <li>En qué semana de tu recuperación estás y qué puedes hacer</li>
          <li>Tus ejercicios de cada día, explicados paso a paso</li>
          <li>Un diario para anotar tu dolor</li>
          <li>Cuándo debes llamar o acudir a Urgencias</li>
        </ul>
        <p className="mt-3 text-sm text-slate-500">Tus datos se guardan solo en este móvil.</p>
      </Card>

      <div className="mt-auto flex flex-col gap-2 pt-6">
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
