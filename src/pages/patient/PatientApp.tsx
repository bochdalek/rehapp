import { CalendarDays, Activity, LifeBuoy, Sun } from "lucide-react";
import type { Procedure } from "../../data/types";
import { formatDate, type PatientConfig } from "../../lib/config";
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
  const greeting = config.n ? `Hola, ${config.n}` : "RehApp";
  const subtitle = `${proc.name}${config.s ? ` · ${sideLabel(config.s)}` : ""}`;

  return (
    <div className="min-h-dvh lg:flex">
      {/* Ordenador: menú lateral */}
      <aside className="sticky top-0 hidden h-dvh w-72 shrink-0 flex-col border-r border-slate-200 bg-white px-6 py-8 lg:flex">
        <p className="flex items-center gap-2 font-semibold text-brand-700">
          <span className="size-3 rotate-45 bg-brand-700" aria-hidden="true" /> {greeting}
        </p>
        <p className="font-display mt-4 text-xl leading-snug font-semibold text-slate-900">{proc.name}</p>
        <p className="mt-1 text-sm text-slate-500">
          {config.s && (
            <>
              <span className="inline-block first-letter:uppercase">{sideLabel(config.s)}</span> ·{" "}
            </>
          )}
          Operado el {formatDate(config.d)}
        </p>
        <nav className="mt-8 space-y-1">
          {TABS.map(({ path, label, icon: Icon }) => {
            const active = tab === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                aria-current={active ? "page" : undefined}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left ${
                  active ? "bg-brand-50 font-semibold text-brand-800" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="size-5" strokeWidth={active ? 2.4 : 1.8} />
                {label}
              </button>
            );
          })}
        </nav>
        <p className="mt-auto text-xs text-slate-400">Tus datos se guardan solo en este dispositivo.</p>
      </aside>

      <div className="flex min-h-dvh flex-1 flex-col">
        {/* Móvil: cabecera */}
        <header className="flex items-start justify-between gap-3 border-b border-slate-200 px-4 pt-5 pb-3 lg:hidden">
          <div>
            <p className="font-semibold text-brand-700">{greeting}</p>
            <p className="text-sm text-slate-500">{subtitle}</p>
          </div>
          <span className="mt-1 size-3 shrink-0 rotate-45 bg-brand-700" aria-hidden="true" />
        </header>

        <main className="mx-auto w-full max-w-lg flex-1 px-4 pt-5 pb-28 lg:max-w-6xl lg:px-12 lg:pt-12 lg:pb-16">
          {tab === "/" && <Today ctx={ctx} />}
          {tab === "/plan" && <Plan ctx={ctx} />}
          {tab === "/dolor" && <Pain />}
          {tab === "/ayuda" && <Help ctx={ctx} onReset={onReset} />}
        </main>

        {/* Móvil: barra inferior */}
        <nav className="pb-safe fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white/95 shadow-[0_-4px_16px_rgb(0_0_0/0.04)] backdrop-blur lg:hidden">
          <div className="mx-auto grid max-w-lg grid-cols-4">
            {TABS.map(({ path, label, icon: Icon }) => {
              const active = tab === path;
              return (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`flex flex-col items-center gap-1 pt-2 pb-1.5 text-sm ${active ? "font-semibold text-brand-800" : "text-slate-500"}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className={`grid h-8 w-14 place-items-center rounded-full transition-colors ${active ? "bg-brand-100" : ""}`}>
                    <Icon className="size-6" strokeWidth={active ? 2.4 : 1.8} />
                  </span>
                  {label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
