import { CheckCircle2 } from "lucide-react";

interface CriteriaListProps {
  title: string;
  criteria: string[];
}

export function CriteriaList({ title, criteria }: CriteriaListProps) {
  if (criteria.length === 0) return null;

  return (
    <div className="rounded-lg border bg-green-50/50 p-4 dark:bg-green-950/10">
      <h4 className="mb-2.5 text-sm font-semibold text-foreground">{title}</h4>
      <ul className="space-y-1.5">
        {criteria.map((criterion, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
            <span className="text-foreground/80">{criterion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
