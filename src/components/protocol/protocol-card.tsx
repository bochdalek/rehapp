"use client";

import Link from "next/link";
import { Clock, Bone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Protocol, BODY_REGION_LABELS } from "@/types/protocol";

const regionColorMap: Record<string, string> = {
  "miembro-superior":
    "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
  "miembro-inferior":
    "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800",
  pelvis:
    "bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-800",
};

const regionBadgeMap: Record<string, string> = {
  "miembro-superior":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "miembro-inferior":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  pelvis:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

export function ProtocolCard({ protocol }: { protocol: Protocol }) {
  return (
    <Link href={`/protocolo/${protocol.id}`}>
      <Card
        className={`group relative overflow-hidden border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${regionColorMap[protocol.region] || ""}`}
      >
        <CardContent className="p-5">
          <div className="mb-3 flex items-start justify-between gap-2">
            <Badge
              variant="secondary"
              className={`text-[10px] font-semibold uppercase tracking-wider ${regionBadgeMap[protocol.region] || ""}`}
            >
              {BODY_REGION_LABELS[protocol.region]}
            </Badge>
            <Bone className="h-4 w-4 text-muted-foreground/40" />
          </div>

          <h3 className="mb-1.5 text-base font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
            {protocol.nombreCorto}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {protocol.descripcion}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {protocol.duracionTotal}
              </span>
              <span>{protocol.fases.length} fases</span>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
