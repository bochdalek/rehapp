"use client";

import { useState, useMemo } from "react";
import { Activity, BookOpen } from "lucide-react";
import { ProtocolCard } from "@/components/protocol/protocol-card";
import { SearchBar } from "@/components/search/search-bar";
import { FilterChips } from "@/components/search/filter-chips";
import { allProtocols } from "@/data/protocols";
import { filterProtocols, getRegionCounts } from "@/lib/protocol-helpers";
import { BodyRegion } from "@/types/protocol";

export default function ProfesionalPage() {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);

  const filtered = useMemo(
    () => filterProtocols(allProtocols, query, selectedRegion ?? undefined),
    [query, selectedRegion]
  );

  const counts = useMemo(() => getRegionCounts(allProtocols), []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Hero */}
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <BookOpen className="h-4 w-4" />
          Basado en evidencia científica
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Protocolos de Rehabilitación
          <br />
          <span className="text-primary">Postquirúrgica</span>
        </h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          Guías clínicas estructuradas por fases para la rehabilitación de las
          fracturas más frecuentes tratadas quirúrgicamente.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 space-y-4">
        <SearchBar value={query} onChange={setQuery} />
        <FilterChips
          selected={selectedRegion}
          onSelect={setSelectedRegion}
          counts={counts}
        />
      </div>

      {/* Stats */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Activity className="h-4 w-4" />
        <span>
          {filtered.length} {filtered.length === 1 ? "protocolo" : "protocolos"}
          {selectedRegion || query ? " encontrados" : " disponibles"}
        </span>
      </div>

      {/* Protocol Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((protocol) => (
            <ProtocolCard key={protocol.id} protocol={protocol} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            No se encontraron protocolos
          </p>
          <p className="mt-1 text-sm text-muted-foreground/60">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      )}
    </div>
  );
}
