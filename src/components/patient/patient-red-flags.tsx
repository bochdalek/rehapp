import { AlertCircle, Phone } from "lucide-react";

interface Props {
  flags: string[];
}

export function PatientRedFlags({ flags }: Props) {
  if (flags.length === 0) return null;

  return (
    <div className="rounded-xl border-2 border-red-400 bg-red-50 p-5 dark:border-red-800 dark:bg-red-950/30">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-red-900 dark:text-red-200">
            Llama a tu médico si...
          </h3>
          <p className="text-xs text-red-800 dark:text-red-300">
            Estas son señales de alarma que requieren consulta urgente
          </p>
        </div>
      </div>
      <ul className="space-y-2">
        {flags.map((flag, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-red-900 dark:text-red-200"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{flag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
