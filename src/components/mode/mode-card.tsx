"use client";

import { useRouter } from "next/navigation";
import { Stethoscope, User, ArrowRight } from "lucide-react";
import { useAppMode, AppMode } from "@/hooks/use-app-mode";
import { cn } from "@/lib/utils";

interface ModeCardProps {
  variant: AppMode;
}

export function ModeCard({ variant }: ModeCardProps) {
  const router = useRouter();
  const { setMode } = useAppMode();

  const config = {
    profesional: {
      icon: Stethoscope,
      title: "Soy profesional médico",
      description:
        "Acceso completo a los 16 protocolos con evidencia científica, referencias bibliográficas y detalles clínicos.",
      cta: "Acceder",
      path: "/profesional",
      colorClass:
        "bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/40",
      iconClass: "bg-primary text-primary-foreground",
    },
    paciente: {
      icon: User,
      title: "Soy paciente",
      description:
        "Guía personalizada según tu fractura y semanas desde la cirugía. Con ejercicios, precauciones y cuándo consultar.",
      cta: "Comenzar",
      path: "/paciente",
      colorClass:
        "bg-accent/5 hover:bg-accent/10 border-accent/20 hover:border-accent/40",
      iconClass: "bg-accent text-accent-foreground",
    },
  }[variant];

  const Icon = config.icon;

  const handleClick = () => {
    setMode(variant);
    router.push(config.path);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col items-start gap-4 rounded-2xl border-2 p-6 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-8",
        config.colorClass
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-xl shadow-sm",
          config.iconClass
        )}
      >
        <Icon className="h-7 w-7" />
      </div>

      <div>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">{config.title}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {config.description}
        </p>
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
        {config.cta}
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  );
}
