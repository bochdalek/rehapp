import { Footprints } from "lucide-react";
import { WeightBearingStatus } from "@/types/protocol";
import {
  PATIENT_WEIGHT_BEARING_LABELS,
  PATIENT_WEIGHT_BEARING_DESCRIPTIONS,
  PATIENT_WEIGHT_BEARING_COLORS,
} from "@/lib/patient-labels";
import { cn } from "@/lib/utils";

interface Props {
  status: WeightBearingStatus;
}

export function PatientWeightBearingBadge({ status }: Props) {
  if (status === "no-aplica") return null;

  const label = PATIENT_WEIGHT_BEARING_LABELS[status];
  const description = PATIENT_WEIGHT_BEARING_DESCRIPTIONS[status];
  const colors = PATIENT_WEIGHT_BEARING_COLORS[status];

  return (
    <div className={cn("rounded-xl border-2 p-4", colors)}>
      <div className="mb-2 flex items-center gap-2">
        <Footprints className="h-5 w-5" />
        <h3 className="text-base font-bold">{label}</h3>
      </div>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
