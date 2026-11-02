import { useState } from "react";
import { ChevronDown, Phone, Siren, Hospital, PhoneCall, ShieldCheck } from "lucide-react";
import { alarms, GENERAL_FAQ } from "../../data/general";
import { Button, Card, SectionTitle } from "../../components/ui";
import type { PatientCtx } from "../../lib/patient";

const LEVEL = {
  "112": { box: "bg-red-600 text-white", Icon: Siren, item: "text-red-50" },
  urgencias: { box: "bg-orange-50 ring-1 ring-orange-200 text-orange-900", Icon: Hospital, item: "text-slate-700" },
  consulta: { box: "bg-white ring-1 ring-slate-200 text-slate-900", Icon: PhoneCall, item: "text-slate-700" },
};

export default function Help({ ctx, onReset }: { ctx: PatientCtx; onReset: () => void }) {
  const { proc, config } = ctx;
  const [open, setOpen] = useState<string | null>(null);
  const faq = [...(proc.faq ?? []), ...GENERAL_FAQ];

  return (
    <div>
      {(config.tel || config.dr) && (
        <Card className="mb-4">
          <p className="text-sm text-slate-500">Tu equipo</p>
          {config.dr && <p className="text-lg font-semibold text-slate-900">{config.dr}</p>}
          {config.tel && (
            <a
              href={`tel:${config.tel.replace(/\s/g, "")}`}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 font-semibold text-white"
            >
              <Phone className="size-5" /> Llamar · {config.tel}
            </a>
          )}
        </Card>
      )}

      <SectionTitle>Señales de alarma</SectionTitle>
      <div className="space-y-3">
        {alarms(proc.limb, proc.warnings).map((a) => {
          const st = LEVEL[a.level];
          return (
            <div key={a.level} className={`rounded-2xl p-4 ${st.box}`}>
              <p className="flex items-center gap-2 text-lg font-bold">
                <st.Icon className="size-6" /> {a.title}
              </p>
              <ul className={`mt-2 list-disc space-y-1 pl-5 ${st.item}`}>
                {a.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {a.level === "112" && (
                <a href="tel:112" className="mt-3 block rounded-xl bg-white py-3 text-center font-bold text-red-700">
                  Llamar al 112
                </a>
              )}
            </div>
          );
        })}
      </div>

      <SectionTitle>Preguntas frecuentes</SectionTitle>
      <Card className="divide-y divide-slate-100 p-0">
        {faq.map((f) => {
          const isOpen = open === f.q;
          return (
            <div key={f.q}>
              <button onClick={() => setOpen(isOpen ? null : f.q)} className="flex w-full items-center gap-2 px-4 py-3 text-left" aria-expanded={isOpen}>
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
          <ShieldCheck className="size-5 shrink-0 text-teal-700" />
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
  );
}
