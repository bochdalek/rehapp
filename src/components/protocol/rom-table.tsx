import { ROMGoal } from "@/types/protocol";

export function ROMTable({ goals }: { goals: ROMGoal[] }) {
  if (goals.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50">
            <th className="px-4 py-2.5 text-left font-semibold text-foreground">
              Movimiento
            </th>
            <th className="px-4 py-2.5 text-left font-semibold text-foreground">
              Rango Objetivo
            </th>
            <th className="hidden px-4 py-2.5 text-left font-semibold text-foreground sm:table-cell">
              Restricción
            </th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, i) => (
            <tr
              key={i}
              className="border-t transition-colors hover:bg-muted/30"
            >
              <td className="px-4 py-2.5 font-medium">{goal.movimiento}</td>
              <td className="px-4 py-2.5 text-primary font-semibold">
                {goal.rangoObjetivo}
              </td>
              <td className="hidden px-4 py-2.5 text-muted-foreground sm:table-cell">
                {goal.restriccion || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
