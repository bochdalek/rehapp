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
      <header className="bg-teal-700 px-4 pt-6 pb-5 text-white">
        <p className="text-sm text-teal-100">{config.n ? `Hola, ${config.n}` : "Tu recuperación"}</p>
        <h1 className="text-xl leading-tight font-bold">{proc.name}</h1>
        {config.s && <p className="text-sm text-teal-100 capitalize">{sideLabel(config.s)}</p>}
      </header>

      <main className="flex-1 px-4 pt-4 pb-28">
        {tab === "/" && <Today ctx={ctx} />}
        {tab === "/plan" && <Plan ctx={ctx} />}
        {tab === "/dolor" && <Pain />}
        {tab === "/ayuda" && <Help ctx={ctx} onReset={onReset} />}
      </main>

      <nav className="pb-safe fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-lg grid-cols-4">
          {TABS.map(({ path, label, icon: Icon }) => {
            const active = tab === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex flex-col items-center gap-0.5 py-2 text-xs font-medium ${active ? "text-teal-700" : "text-slate-500"}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="size-6" strokeWidth={active ? 2.5 : 2} />
                {label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
