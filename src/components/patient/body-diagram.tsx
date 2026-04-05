"use client";

import { useState } from "react";
import {
  DiagramRegion,
  DIAGRAM_REGION_LABELS,
} from "@/lib/body-diagram-mapping";
import { cn } from "@/lib/utils";

interface BodyDiagramProps {
  onRegionClick: (region: DiagramRegion) => void;
  enabledRegions?: Set<DiagramRegion>;
}

interface RegionDef {
  region: DiagramRegion;
  path: string; // SVG path of visible shape
  hitArea: { x: number; y: number; w: number; h: number };
  labelPos: { x: number; y: number };
}

// Coordinates for a stylized front-view human figure, viewBox 400x720
// Centered at x=200
const REGIONS: RegionDef[] = [
  {
    region: "hombro",
    // Two shoulder areas — one path with both sides
    path: "M 130 115 Q 140 95, 170 95 L 230 95 Q 260 95, 270 115 L 265 140 Q 260 130, 200 130 Q 140 130, 135 140 Z",
    hitArea: { x: 125, y: 90, w: 150, h: 60 },
    labelPos: { x: 200, y: 122 },
  },
  {
    region: "brazo",
    // Both upper arms
    path: "M 130 140 L 120 220 L 148 220 L 152 145 Z M 270 140 L 280 220 L 252 220 L 248 145 Z",
    hitArea: { x: 115, y: 140, w: 180, h: 85 },
    labelPos: { x: 200, y: 180 },
  },
  {
    region: "codo",
    path: "M 118 220 L 115 245 L 152 245 L 150 220 Z M 282 220 L 285 245 L 248 245 L 250 220 Z",
    hitArea: { x: 113, y: 218, w: 180, h: 32 },
    labelPos: { x: 200, y: 235 },
  },
  {
    region: "muneca",
    // Forearms to wrists + hands
    path: "M 115 245 L 108 340 L 138 340 L 148 245 Z M 285 245 L 292 340 L 262 340 L 252 245 Z M 108 340 Q 100 352, 108 362 Q 118 360, 138 348 L 138 340 Z M 292 340 Q 300 352, 292 362 Q 282 360, 262 348 L 262 340 Z",
    hitArea: { x: 98, y: 245, w: 210, h: 125 },
    labelPos: { x: 200, y: 300 },
  },
  {
    region: "pelvis",
    // Hip region / pelvic band
    path: "M 150 295 L 145 340 Q 170 348, 200 348 Q 230 348, 255 340 L 250 295 Z",
    hitArea: { x: 140, y: 290, w: 120, h: 65 },
    labelPos: { x: 200, y: 320 },
  },
  {
    region: "cadera",
    // Hip joints (sides)
    path: "M 145 340 L 140 365 L 170 365 L 172 345 Z M 255 340 L 260 365 L 230 365 L 228 345 Z",
    hitArea: { x: 135, y: 340, w: 130, h: 32 },
    labelPos: { x: 200, y: 358 },
  },
  {
    region: "muslo",
    // Both thighs
    path: "M 172 345 L 158 475 L 195 475 L 200 345 Z M 228 345 L 242 475 L 205 475 L 200 345 Z",
    hitArea: { x: 152, y: 370, w: 100, h: 108 },
    labelPos: { x: 200, y: 420 },
  },
  {
    region: "rodilla",
    path: "M 158 475 L 160 510 L 195 510 L 195 475 Z M 242 475 L 240 510 L 205 510 L 205 475 Z",
    hitArea: { x: 152, y: 472, w: 100, h: 45 },
    labelPos: { x: 200, y: 495 },
  },
  {
    region: "pierna",
    // Shins / lower legs
    path: "M 160 510 L 158 620 L 192 620 L 195 510 Z M 240 510 L 242 620 L 208 620 L 205 510 Z",
    hitArea: { x: 152, y: 512, w: 100, h: 115 },
    labelPos: { x: 200, y: 565 },
  },
  {
    region: "tobillo-pie",
    // Ankles + feet
    path: "M 158 620 L 155 648 L 192 648 L 192 620 Z M 242 620 L 245 648 L 208 648 L 208 620 Z M 150 648 Q 148 670, 170 680 L 198 680 L 198 648 Z M 250 648 Q 252 670, 230 680 L 202 680 L 202 648 Z",
    hitArea: { x: 145, y: 620, w: 115, h: 68 },
    labelPos: { x: 200, y: 660 },
  },
];

// Head (decorative, not clickable)
const HEAD_PATH = "M 200 40 Q 170 40, 168 70 Q 168 95, 180 98 L 180 102 L 185 110 L 215 110 L 220 102 L 220 98 Q 232 95, 232 70 Q 230 40, 200 40 Z";

// Non-clickable torso outline
const TORSO_PATH = "M 150 140 Q 140 200, 150 295 L 250 295 Q 260 200, 250 140 Z";

export function BodyDiagram({ onRegionClick, enabledRegions }: BodyDiagramProps) {
  const [hovered, setHovered] = useState<DiagramRegion | null>(null);

  const isEnabled = (region: DiagramRegion) =>
    !enabledRegions || enabledRegions.has(region);

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
      {/* SVG body */}
      <div className="relative w-full max-w-[280px] sm:max-w-sm">
        <svg
          viewBox="0 0 400 720"
          className="h-auto w-full text-muted-foreground"
          aria-label="Diagrama del cuerpo humano - selecciona la zona lesionada"
        >
          {/* Head (decorative) */}
          <path
            d={HEAD_PATH}
            fill="currentColor"
            fillOpacity={0.1}
            stroke="currentColor"
            strokeWidth={2}
            strokeOpacity={0.4}
          />

          {/* Torso outline (decorative) */}
          <path
            d={TORSO_PATH}
            fill="currentColor"
            fillOpacity={0.05}
            stroke="currentColor"
            strokeWidth={1}
            strokeOpacity={0.2}
          />

          {/* Clickable regions */}
          {REGIONS.map((def) => {
            const enabled = isEnabled(def.region);
            const isHovered = hovered === def.region;
            return (
              <g
                key={def.region}
                role="button"
                tabIndex={enabled ? 0 : -1}
                aria-label={DIAGRAM_REGION_LABELS[def.region]}
                className={cn(
                  "outline-none",
                  enabled
                    ? "cursor-pointer"
                    : "cursor-not-allowed opacity-40"
                )}
                onClick={() => enabled && onRegionClick(def.region)}
                onKeyDown={(e) => {
                  if (enabled && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onRegionClick(def.region);
                  }
                }}
                onMouseEnter={() => enabled && setHovered(def.region)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => enabled && setHovered(def.region)}
                onBlur={() => setHovered(null)}
              >
                {/* Visible shape */}
                <path
                  d={def.path}
                  className={cn(
                    "transition-all",
                    enabled && isHovered
                      ? "fill-primary/30 stroke-primary"
                      : enabled
                        ? "fill-primary/5 stroke-primary/40"
                        : "fill-muted stroke-muted-foreground/30"
                  )}
                  strokeWidth={2}
                />
                {/* Invisible hit area */}
                <rect
                  x={def.hitArea.x}
                  y={def.hitArea.y}
                  width={def.hitArea.w}
                  height={def.hitArea.h}
                  fill="transparent"
                />
              </g>
            );
          })}

          {/* Hovered region label on SVG */}
          {hovered && (
            <g pointerEvents="none">
              {(() => {
                const def = REGIONS.find((r) => r.region === hovered);
                if (!def) return null;
                const label = DIAGRAM_REGION_LABELS[hovered];
                const textWidth = label.length * 6.5 + 16;
                return (
                  <>
                    <rect
                      x={def.labelPos.x - textWidth / 2}
                      y={def.labelPos.y - 10}
                      width={textWidth}
                      height={20}
                      rx={10}
                      className="fill-primary"
                    />
                    <text
                      x={def.labelPos.x}
                      y={def.labelPos.y + 4}
                      textAnchor="middle"
                      className="fill-primary-foreground text-[11px] font-semibold"
                    >
                      {label}
                    </text>
                  </>
                );
              })()}
            </g>
          )}
        </svg>
      </div>

      {/* Alternative list selector (mobile-friendly) */}
      <div className="w-full sm:flex-1">
        <p className="mb-3 text-sm font-semibold text-muted-foreground">
          O selecciona de la lista:
        </p>
        <div className="grid grid-cols-2 gap-2">
          {REGIONS.map((def) => {
            const enabled = isEnabled(def.region);
            return (
              <button
                key={def.region}
                onClick={() => enabled && onRegionClick(def.region)}
                disabled={!enabled}
                onMouseEnter={() => enabled && setHovered(def.region)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-all",
                  enabled
                    ? "hover:border-primary hover:bg-primary/10"
                    : "cursor-not-allowed opacity-40"
                )}
              >
                {DIAGRAM_REGION_LABELS[def.region]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
