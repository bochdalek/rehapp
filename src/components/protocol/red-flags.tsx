import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function RedFlags({ flags }: { flags: string[] }) {
  if (flags.length === 0) return null;

  return (
    <Alert className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20">
      <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
      <AlertDescription>
        <p className="mb-2 text-sm font-semibold text-red-800 dark:text-red-300">
          Banderas Rojas - Consultar inmediatamente
        </p>
        <ul className="space-y-1">
          {flags.map((flag, i) => (
            <li
              key={i}
              className="text-sm text-red-700 dark:text-red-400"
            >
              &bull; {flag}
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
