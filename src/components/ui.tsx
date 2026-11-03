import type { ReactNode } from "react";
import logoUrl from "../assets/logo.webp";

/** Logo de RehApp (icono redondeado con el nombre). Decorativo salvo que se pida texto alternativo. */
export function Logo({ className = "size-10", alt = "" }: { className?: string; alt?: string }) {
  return <img src={logoUrl} alt={alt} aria-hidden={alt ? undefined : true} className={`shrink-0 ${className}`} />;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 ${className}`}>{children}</div>;
}

export function SectionTitle({ children, aside, className = "" }: { children: ReactNode; aside?: ReactNode; className?: string }) {
  return (
    <div
      className={`${/(^|\s)mt-/.test(className) ? "" : "mt-8"} mb-3 flex items-baseline justify-between gap-3 border-b border-slate-200 pb-2 ${className}`}
    >
      <h2 className="text-xl font-semibold text-slate-900">{children}</h2>
      {aside && <span className="text-sm text-slate-500">{aside}</span>}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({ children, onClick, variant = "primary", className = "", type = "button", disabled }: BtnProps) {
  const styles = {
    primary: "bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-900",
    secondary: "bg-white text-brand-800 border border-brand-300 hover:bg-brand-50",
    ghost: "text-brand-800 hover:bg-brand-50",
    danger: "bg-white text-red-700 border border-red-300 hover:bg-red-50",
  }[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition-colors disabled:opacity-50 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export function BulletList({ items, icon, className = "" }: { items: string[]; icon: ReactNode; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span className="mt-0.5 shrink-0">{icon}</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
