import { BookOpen, ExternalLink } from "lucide-react";
import { allReferences } from "@/data/references";

export default function ReferenciasPage() {
  const sorted = [...allReferences].sort((a, b) => a.autores.localeCompare(b.autores));

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Referencias</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Bibliografía completa utilizada en los protocolos de rehabilitación.
      </p>

      <div className="mb-4 text-sm text-muted-foreground">
        {sorted.length} referencias
      </div>

      <ol className="space-y-4">
        {sorted.map((ref, i) => (
          <li
            key={ref.id}
            className="rounded-lg border bg-card p-4 transition-colors hover:bg-muted/30"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm leading-relaxed">
                  <span className="font-medium text-foreground">
                    {ref.autores}
                  </span>
                  {". "}
                  {ref.titulo}.{" "}
                  <em className="text-muted-foreground">{ref.revista}</em>.{" "}
                  {ref.anio}.
                  {ref.volumen && ` ${ref.volumen}`}
                  {ref.paginas && `:${ref.paginas}`}.
                </p>
                <div className="mt-1.5 flex flex-wrap gap-3 text-xs">
                  {ref.doi && (
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      DOI
                    </a>
                  )}
                  {ref.pmid && (
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <BookOpen className="h-3 w-3" />
                      PubMed
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
