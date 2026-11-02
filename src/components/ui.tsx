import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 ${className}`}>{children}</div>;
}

export function SectionTitle({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <h2 className="mt-6 mb-2 flex items-center gap-2 px-1 text-sm font-semibold tracking-wide text-slate-500 uppercase">
      {icon}
      {children}
    </h2>
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
    primary: "bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900",
    secondary: "bg-white text-teal-800 ring-1 ring-teal-700/30 hover:bg-teal-50",
    ghost: "text-teal-800 hover:bg-teal-50",
    danger: "bg-white text-red-700 ring-1 ring-red-300 hover:bg-red-50",
  }[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold transition disabled:opacity-50 ${styles} ${className}`}
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
