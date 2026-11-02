import { useState } from "react";
import { ChevronDown, Siren, Hospital, ShieldCheck, Stethoscope } from "lucide-react";
import { alarms, GENERAL_FAQ } from "../../data/general";
import { Button, Card, SectionTitle } from "../../components/ui";
import type { PatientCtx } from "../../lib/patient";
import { CLINIC } from "../../data/clinic";

const LEVEL = {
  "112": { box: "bg-red-600 text-white", Icon: Siren, item: "text-red-50" },
  urgencias: { box: "bg-orange-50 border-l-4 border-orange-500 rounded-l-none text-orange-950", Icon: Hospital, item: "text-slate-700" },
  consulta: { box: "bg-white border-l-4 border-brand-600 rounded-l-none text-slate-900", Icon: Stethoscope, item: "text-slate-700" },
};

export default function Help({ ctx, onReset }: { ctx: PatientCtx; onReset: () => void }) {
  const { proc, config } = ctx;
  const [open, setOpen] = useState<string | null>(null);
  const faq = [...(proc.faq ?? []), ...GENERAL_FAQ];
  // Quien entra con código corto no trae estos datos: se usan los de la consulta
  const dr = config.dr || CLINIC.team;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
      <div>
        {dr && (
          <Card className="mb-4">
            <p className="font-display text-xl font-semibold text-slate-900">{dr}</p>
            <p className="text-slate-600">Apunta tus dudas y coméntalas en la próxima revisión.</p>
          </Card>
        )}

        <SectionTitle className={dr ? "" : "mt-0"}>Cuándo pedir ayuda</SectionTitle>
        <div className="space-y-3">
          {alarms(proc.limb, proc.warnings).map((a) => {
            const st = LEVEL[a.level];
            return (
              <div key={a.level} className={`rounded-xl p-4 ${st.box}`}>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <st.Icon className="size-6" /> {a.title}
                </h3>
                <ul className={`mt-2 list-disc space-y-1 pl-5 ${st.item}`}>
                  {a.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {a.level === "112" && (
                  <a href="tel:112" className="mt-3 block rounded-lg bg-white py-3 text-center font-bold text-red-700">
                    Llamar al 112
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <SectionTitle className="lg:mt-0">Preguntas frecuentes</SectionTitle>
        <Card className="divide-y divide-slate-100 p-0">
          {faq.map((f) => {
            const isOpen = open === f.q;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  className="flex w-full items-center gap-2 px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 font-medium text-slate-900">{f.q}</span>
                  <ChevronDown className={`size-5 shrink-0 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="px-4 pb-4 text-slate-700">{f.a}</p>}
              </div>
            );
          })}
        </Card>

        <SectionTitle>Tus datos</SectionTitle>
        <Card>
          <p className="flex gap-2 text-slate-700">
            <ShieldCheck className="size-5 shrink-0 text-brand-700" />
            Todo lo que anotas se guarda solo en este móvil. No se envía a ningún sitio.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Esta aplicación es una guía general y no sustituye las indicaciones de tu cirujano ni de tu fisioterapeuta. Ante cualquier duda,
            pregunta.
          </p>
          <Button
            variant="danger"
            className="mt-4 w-full"
            onClick={() => {
              if (confirm("¿Quieres quitar tu plan de este móvil? Necesitarás el QR o el enlace para volver a cargarlo.")) onReset();
            }}
          >
            Quitar mi plan de este móvil
          </Button>
        </Card>
      </div>
    </div>
  );
}
