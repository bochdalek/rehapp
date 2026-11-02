import { useState } from "react";
import { ArrowLeft, ChevronDown, ExternalLink } from "lucide-react";
import { EVIDENCE, EVIDENCE_REVIEWED, type Reference } from "../data/evidence";
import { PROCEDURES } from "../data/procedures";
import { LEVEL_PLAIN, TOTAL_REFS } from "../lib/evidence";
import { navigate } from "../lib/router";

function RefList({ refs }: { refs: Reference[] }) {
  return (
    <ol className="space-y-3">
      {refs.map((r) => (
        <li key={r.pmid} className="text-sm">
          <p className="text-slate-800">
            {r.authors} {r.title} <span className="italic">{r.journal}</span>. {r.year}.
          </p>
          <p className="mt-0.5 text-slate-500">{r.supports}</p>
          <a
            href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`}
            target="_blank"
            rel="noreferrer"
            className="mt-0.5 inline-flex items-center gap-1 font-medium text-brand-700"
          >
            Ver en PubMed <ExternalLink className="size-3.5" />
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Página pública: de dónde sale la información de la app */
export default function Sources({ highlight }: { highlight?: string }) {
  const [open, setOpen] = useState<string | null>(highlight ?? null);
  const ordered = highlight
    ? [...PROCEDURES.filter((p) => p.id === highlight), ...PROCEDURES.filter((p) => p.id !== highlight)]
    : PROCEDURES;
  const general = EVIDENCE.general;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 lg:py-12">
      <button
        onClick={() => (history.length > 1 ? history.back() : navigate("/"))}
        className="mb-6 flex items-center gap-1 font-medium text-brand-800"
      >
        <ArrowLeft className="size-4" /> Volver
      </button>

      <h1 className="text-3xl leading-tight font-semibold text-slate-900 lg:text-4xl">De dónde sale esta información</h1>
      <div className="mt-4 space-y-3 text-slate-700">
        <p>
          Los plazos, ejercicios y consejos de esta app se han contrastado con la investigación publicada. Para cada operación se buscaron
          en PubMed, la gran base de datos de artículos médicos, los mejores estudios disponibles: revisiones Cochrane, revisiones de muchos
          estudios a la vez y ensayos clínicos. En total, {TOTAL_REFS} estudios
          {EVIDENCE_REVIEWED && `, revisados en ${EVIDENCE_REVIEWED}`}.
        </p>
        <p>
          En la recuperación de las fracturas no siempre hay estudios de calidad. Por eso indicamos en cada caso cuánta evidencia hay. Donde
          es escasa, la pauta combina lo publicado con la experiencia de los cirujanos. En todos los casos, tu cirujano adapta el plan a tu
          operación y a ti.
        </p>
      </div>

      <h2 className="mt-10 mb-3 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">Por operación</h2>
      <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {ordered.map((p) => {
          const ev = EVIDENCE[p.id];
          if (!ev) return null;
          const isOpen = open === p.id;
          const plain = LEVEL_PLAIN[ev.level];
          return (
            <li key={p.id}>
              <button
                onClick={() => setOpen(isOpen ? null : p.id)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex-1">
                  <span className="block font-semibold text-slate-900">
                    {p.name}
                    {p.id === highlight && <span className="ml-2 text-sm font-medium text-brand-700">· tu operación</span>}
                  </span>
                  <span className="block text-sm text-slate-500">
                    {plain.label} · {ev.refs.length} estudios
                  </span>
                </span>
                <ChevronDown className={`size-5 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="space-y-4 px-4 pb-5">
                  <p className="rounded-lg bg-slate-50 p-3 text-slate-700">{plain.text}</p>
                  <p className="text-slate-700">{ev.summary}</p>
                  <RefList refs={ev.refs} />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {general && (
        <>
          <h2 className="mt-10 mb-3 border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900">Consejos generales</h2>
          <p className="mb-4 text-slate-700">{general.summary}</p>
          <RefList refs={general.refs} />
        </>
      )}

      <p className="mt-10 text-sm text-slate-500">
        Esta app es una guía y no sustituye las indicaciones de tu cirujano ni de tu fisioterapeuta.
      </p>
    </main>
  );
}
