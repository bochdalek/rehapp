import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Protocol } from "@/types/protocol";
import { getPatientProtocolName } from "@/lib/patient-labels";

interface FractureOptionCardProps {
  protocol: Protocol;
}

export function FractureOptionCard({ protocol }: FractureOptionCardProps) {
  const name = getPatientProtocolName(protocol.id, protocol.nombreCorto);

  return (
    <Link
      href={`/paciente/protocolo/${protocol.id}`}
      className="group flex items-center justify-between rounded-xl border-2 border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md sm:p-5"
    >
      <div className="flex-1">
        <h3 className="mb-1 text-base font-semibold leading-snug group-hover:text-primary sm:text-lg">
          {name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>Duración total: {protocol.duracionTotal}</span>
        </div>
      </div>
      <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-primary" />
    </Link>
  );
}
