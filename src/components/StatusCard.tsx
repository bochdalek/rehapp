import { AlertOctagon, AlertTriangle, CheckCircle2 } from "lucide-react";
import { formatDate, type StatusLine } from "../lib/config";

const STYLES = {
  red: { box: "bg-red-50 border-red-600", title: "text-red-800", Icon: AlertOctagon },
  amber: { box: "bg-amber-50 border-amber-500", title: "text-amber-900", Icon: AlertTriangle },
  green: { box: "bg-emerald-50 border-emerald-600", title: "text-emerald-800", Icon: CheckCircle2 },
};

export default function StatusCard({ s }: { s: StatusLine }) {
  const st = STYLES[s.tone];
  return (
    <div className={`flex gap-3 rounded-r-xl border-l-4 p-4 ${st.box}`}>
      <st.Icon className={`mt-0.5 size-6 shrink-0 ${st.title}`} />
      <div>
        <p className={`text-lg font-semibold ${st.title}`}>{s.title}</p>
        <p className="mt-1 text-slate-700">{s.detail}</p>
        {s.until && (
          <p className="mt-2 text-sm font-medium text-slate-600">
            Hasta el {formatDate(s.until)}, salvo que te digan otra cosa en la revisión.
          </p>
        )}
      </div>
    </div>
  );
}
