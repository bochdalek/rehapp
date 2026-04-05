import {
  WeightBearingStatus,
  WEIGHT_BEARING_LABELS,
  WEIGHT_BEARING_COLORS,
} from "@/types/protocol";
import { cn } from "@/lib/utils";

interface WeightBearingBadgeProps {
  status: WeightBearingStatus;
  percentage?: number;
}

export function WeightBearingBadge({
  status,
  percentage,
}: WeightBearingBadgeProps) {
  const label = WEIGHT_BEARING_LABELS[status];
  const colors = WEIGHT_BEARING_COLORS[status];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        colors
      )}
    >
      {label}
      {percentage !== undefined && ` (${percentage}%)`}
    </span>
  );
}
