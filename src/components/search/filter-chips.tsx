"use client";

import { BodyRegion, BODY_REGION_LABELS } from "@/types/protocol";
import { cn } from "@/lib/utils";

interface FilterChipsProps {
  selected: BodyRegion | null;
  onSelect: (region: BodyRegion | null) => void;
  counts: Record<BodyRegion, number>;
}

const regions: BodyRegion[] = [
  "miembro-superior",
  "miembro-inferior",
  "pelvis",
];

export function FilterChips({ selected, onSelect, counts }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
          selected === null
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        Todos
      </button>
      {regions.map((region) => (
        <button
          key={region}
          onClick={() => onSelect(selected === region ? null : region)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
            selected === region
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {BODY_REGION_LABELS[region]}
          <span className="ml-1.5 text-xs opacity-60">{counts[region]}</span>
        </button>
      ))}
    </div>
  );
}
