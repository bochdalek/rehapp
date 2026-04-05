"use client";

import { Phase } from "@/types/protocol";
import { cn } from "@/lib/utils";

interface PhaseTimelineProps {
  phases: Phase[];
  totalWeeks: number;
  activePhase?: number;
  onPhaseClick: (phaseIndex: number) => void;
}

export function PhaseTimeline({
  phases,
  totalWeeks,
  activePhase,
  onPhaseClick,
}: PhaseTimelineProps) {
  return (
    <div className="w-full">
      {/* Desktop timeline */}
      <div className="hidden sm:block">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Semana 0</span>
          <span>Semana {totalWeeks}</span>
        </div>
        <div className="flex h-12 w-full overflow-hidden rounded-xl border bg-muted/30">
          {phases.map((phase, index) => {
            const width =
              ((phase.semanaFin - phase.semanaInicio) / totalWeeks) * 100;
            const isActive = activePhase === index;
            return (
              <button
                key={phase.id}
                onClick={() => onPhaseClick(index)}
                style={{ width: `${width}%` }}
                className={cn(
                  "relative flex items-center justify-center border-r border-background/50 px-2 text-xs font-medium transition-all last:border-r-0",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-inner"
                    : "bg-primary/10 text-primary hover:bg-primary/20",
                  index === 0 && "rounded-l-xl",
                  index === phases.length - 1 && "rounded-r-xl"
                )}
              >
                <span className="truncate">
                  Fase {phase.numero}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-2 flex">
          {phases.map((phase) => {
            const width =
              ((phase.semanaFin - phase.semanaInicio) / totalWeeks) * 100;
            return (
              <div
                key={phase.id}
                style={{ width: `${width}%` }}
                className="truncate px-1 text-center text-[10px] text-muted-foreground"
              >
                {phase.duracion}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile timeline */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 sm:hidden">
        {phases.map((phase, index) => {
          const isActive = activePhase === index;
          return (
            <button
              key={phase.id}
              onClick={() => onPhaseClick(index)}
              className={cn(
                "flex shrink-0 flex-col items-center gap-0.5 rounded-lg border px-3 py-2 text-xs transition-all",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:border-primary/50"
              )}
            >
              <span className="font-semibold">Fase {phase.numero}</span>
              <span className={cn("text-[10px]", isActive ? "opacity-80" : "text-muted-foreground")}>
                {phase.duracion}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
