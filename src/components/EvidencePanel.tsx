import { useState } from "react";
import { BookOpen, ChevronDown, ExternalLink } from "lucide-react";
import { EVIDENCE, EVIDENCE_REVIEWED, type EvidenceLevel } from "../data/evidence";

const LEVEL_STYLE: Record<EvidenceLevel, string> = {
  alta: "bg-emerald-100 text-emerald-900",
  moderada: "bg-sky-100 text-sky-900",
  baja: "bg-amber-100 text-amber-900",
  "muy baja": "bg-red-100 text-red-900",
};

/** Resumen de la evidencia y referencias del protocolo, para el equipo médico */
export default function EvidencePanel({ procId, title = "Evidencia de este protocolo" }: { procId: string; title?: string }) {
  const ev = EVIDENCE[procId];
  const [open, setOpen] = useState(false);
  if (!ev) return null;

  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-3 p-5 text-left" aria-expanded={open}>
        <BookOpen className="size-5 shrink-0 text-brand-700" />
        <span className="flex-1">
          <span className="block text-lg font-semibold text-slate-900">{title}</span>
          <span className="block text-sm text-slate-500">
            {ev.refs.length} referencias · revisado en PubMed{EVIDENCE_REVIEWED && ` (${EVIDENCE_REVIEWED})`}
          </span>
        </span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${LEVEL_STYLE[ev.level]}`}>Certeza {ev.level}</span>
        <ChevronDown className={`size-5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="space-y-5 border-t border-slate-200 p-5">
          <p className="text-slate-700">{ev.summary}</p>
          {ev.gaps.length > 0 && (
            <div>
              <h3 className="font-sans text-sm font-semibold text-slate-900">Sin evidencia sólida: a tu criterio</h3>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {ev.gaps.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          )}
          <ol className="space-y-3">
            {ev.refs.map((r, i) => (
              <li key={r.pmid} className="flex gap-3 text-sm">
                <span className="w-5 shrink-0 font-semibold text-brand-700">{i + 1}.</span>
                <div>
                  <p className="text-slate-800">
                    {r.authors} {r.title} <span className="italic">{r.journal}</span>. {r.year}.
                  </p>
                  <p className="mt-0.5 text-slate-500">{r.supports}</p>
                  <p className="mt-0.5 flex flex-wrap gap-x-4">
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-brand-700"
                    >
                      PubMed {r.pmid} <ExternalLink className="size-3.5" />
                    </a>
                    {r.doi && (
                      <a
                        href={`https://doi.org/${r.doi}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-brand-700"
                      >
                        DOI <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
