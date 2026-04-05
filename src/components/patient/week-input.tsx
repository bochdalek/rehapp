"use client";

import { useState } from "react";
import { Minus, Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WeekInputProps {
  initialValue?: number;
  onSubmit: (week: number) => void;
  maxWeeks?: number;
}

export function WeekInput({
  initialValue = 0,
  onSubmit,
  maxWeeks = 52,
}: WeekInputProps) {
  const [week, setWeek] = useState(initialValue);

  const decrement = () => setWeek((w) => Math.max(0, w - 1));
  const increment = () => setWeek((w) => Math.min(maxWeeks, w + 1));

  return (
    <div className="mx-auto max-w-md rounded-2xl border-2 border-primary/20 bg-card p-6 sm:p-8">
      <h2 className="mb-2 text-center text-xl font-bold">
        ¿Cuántas semanas han pasado desde tu cirugía?
      </h2>
      <p className="mb-6 text-center text-sm text-muted-foreground">
        Esto nos permite mostrarte los ejercicios apropiados para tu fase
        actual de recuperación.
      </p>

      <div className="mb-6 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 shrink-0 rounded-full"
          onClick={decrement}
          disabled={week <= 0}
          aria-label="Restar una semana"
        >
          <Minus className="h-5 w-5" />
        </Button>

        <div className="flex flex-1 flex-col items-center">
          <span className="text-5xl font-bold tabular-nums text-primary sm:text-6xl">
            {week}
          </span>
          <span className="mt-1 text-sm font-medium text-muted-foreground">
            {week === 1 ? "semana" : "semanas"}
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 shrink-0 rounded-full"
          onClick={increment}
          disabled={week >= maxWeeks}
          aria-label="Sumar una semana"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>

      <div className="mb-6">
        <input
          type="range"
          min={0}
          max={maxWeeks}
          value={week}
          onChange={(e) => setWeek(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label="Ajustar semanas"
        />
        <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
          <span>0</span>
          <span>{maxWeeks}</span>
        </div>
      </div>

      <Button
        onClick={() => onSubmit(week)}
        className="w-full gap-2"
        size="lg"
      >
        Ver mi protocolo
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
