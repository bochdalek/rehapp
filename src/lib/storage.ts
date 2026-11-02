import { useCallback, useEffect, useState } from "react";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/** Estado guardado en el dispositivo (los datos nunca salen del móvil) */
export function useStored<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => read(key, fallback));

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) setValue(read(key, fallback));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key]);

  const set = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const v = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        try {
          if (v === null || v === undefined) localStorage.removeItem(key);
          else localStorage.setItem(key, JSON.stringify(v));
        } catch {
          /* almacenamiento no disponible */
        }
        return v;
      });
    },
    [key],
  );

  return [value, set] as const;
}

export const KEYS = {
  config: "rehapp.config",
  done: "rehapp.done",
  pain: "rehapp.pain",
} as const;
