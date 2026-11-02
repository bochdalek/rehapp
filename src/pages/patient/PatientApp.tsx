import { CalendarDays, Activity, LifeBuoy, Sun } from "lucide-react";
import type { Procedure } from "../../data/types";
import type { PatientConfig } from "../../lib/config";
import { navigate } from "../../lib/router";
import { buildCtx, sideLabel } from "../../lib/patient";
import Today from "./Today";
import Plan from "./Plan";
import Pain from "./Pain";
import Help from "./Help";

const TABS = [
  { path: "/", label: "Hoy", icon: Sun },
  { path: "/plan", label: "Mi plan", icon: CalendarDays },
  { path: "/dolor", label: "Mi dolor", icon: Activity },
  { path: "/ayuda", label: "Ayuda", icon: LifeBuoy },
];

interface Props {
  config: PatientConfig;
  proc: Procedure;
  route: string;
  onReset: () => void;
}

export default function PatientApp({ config, proc, route, onReset }: Props) {
  const ctx = buildCtx(config, proc);
  const tab = TABS.find((t) => t.path === route)?.path ?? "/";

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col">
      <header className="flex items-start justify-between gap-3 border-b border-slate-200 px-4 pt-5 pb-3">
        <div>
          <p className="font-semibold text-brand-700">{config.n ? `Hola, ${config.n}` : "RehApp"}</p>
          <p className="text-sm text-slate-500">
            {proc.name}
            {config.s && ` · ${sideLabel(config.s)}`}
          </p>
        </div>
        <span className="mt-1 size-3 shrink-0 rotate-45 bg-brand-700" aria-hidden="true" />
      </header>

      <main className="flex-1 px-4 pt-5 pb-28">
        {tab === "/" && <Today ctx={ctx} />}
        {tab === "/plan" && <Plan ctx={ctx} />}
        {tab === "/dolor" && <Pain />}
        {tab === "/ayuda" && <Help ctx={ctx} onReset={onReset} />}
      </main>

      <nav className="pb-safe fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-lg grid-cols-4">
          {TABS.map(({ path, label, icon: Icon }) => {
            const active = tab === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`relative flex flex-col items-center gap-0.5 py-2 text-sm ${active ? "font-semibold text-brand-800" : "text-slate-500"}`}
                aria-current={active ? "page" : undefined}
              >
                {active && <span className="absolute inset-x-6 top-0 h-1 rounded-b bg-brand-700" />}
                <Icon className="size-6" strokeWidth={active ? 2.4 : 1.8} />
                {label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
