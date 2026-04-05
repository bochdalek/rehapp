"use client";

import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";
import { useAppMode } from "@/hooks/use-app-mode";

export function ModeSwitcher() {
  const router = useRouter();
  const { isHydrated, clearMode } = useAppMode();

  if (!isHydrated) return null;

  const handleClick = () => {
    clearMode();
    router.push("/");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      <RefreshCw className="h-3 w-3" />
      Cambiar modo
    </button>
  );
}
