"use client";

import { useEffect, useState, useCallback } from "react";

export type AppMode = "profesional" | "paciente";
const STORAGE_KEY = "rehapp-mode";

interface UseAppModeResult {
  mode: AppMode | null;
  isHydrated: boolean;
  setMode: (m: AppMode) => void;
  clearMode: () => void;
}

export function useAppMode(): UseAppModeResult {
  const [mode, setModeState] = useState<AppMode | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "profesional" || stored === "paciente") {
        setModeState(stored);
      }
    } catch {
      // localStorage might be unavailable (SSR, private mode, etc.)
    }
    setIsHydrated(true);
  }, []);

  const setMode = useCallback((m: AppMode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      // ignore
    }
  }, []);

  const clearMode = useCallback(() => {
    setModeState(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { mode, isHydrated, setMode, clearMode };
}
