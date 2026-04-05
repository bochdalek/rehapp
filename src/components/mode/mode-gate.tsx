"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppMode } from "@/hooks/use-app-mode";

interface ModeGateProps {
  children: React.ReactNode;
}

/**
 * Client-side redirect based on stored mode.
 * - While not hydrated: renders children (skeleton-free UI)
 * - After hydration: if mode stored, redirects to /profesional or /paciente
 * - If no mode: stays on landing page
 */
export function ModeGate({ children }: ModeGateProps) {
  const router = useRouter();
  const { mode, isHydrated } = useAppMode();

  useEffect(() => {
    if (isHydrated && mode) {
      router.replace(mode === "profesional" ? "/profesional" : "/paciente");
    }
  }, [isHydrated, mode, router]);

  // While redirecting, render nothing to avoid flash
  if (isHydrated && mode) {
    return null;
  }

  return <>{children}</>;
}
