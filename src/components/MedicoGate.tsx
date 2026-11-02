import { useState, type FormEvent, type ReactNode } from "react";
import { Lock } from "lucide-react";
import { Button } from "./ui";
import { checkKey, isUnlocked, setUnlocked } from "../lib/access";
import { navigate } from "../lib/router";

export default function MedicoGate({ children }: { children: (lock: () => void) => ReactNode }) {
  const [ok, setOk] = useState(isUnlocked);
  const [key, setKey] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (ok)
    return (
      <>
        {children(() => {
          setUnlocked(false);
          setOk(false);
        })}
      </>
    );

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const good = await checkKey(key).catch(() => false);
    setBusy(false);
    if (good) {
      if (remember) setUnlocked(true);
      setOk(true);
    } else setError("Clave incorrecta.");
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-sm flex-col justify-center px-4">
      <Lock className="size-8 text-brand-700" />
      <h1 className="mt-3 text-3xl font-semibold text-slate-900">Acceso del equipo médico</h1>
      <p className="mt-2 text-slate-600">Introduce la clave para crear planes de pacientes.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <input
          type="password"
          autoFocus
          autoComplete="current-password"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-lg"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          aria-label="Clave"
          aria-invalid={!!error}
        />
        {error && <p className="font-medium text-red-700">{error}</p>}
        <label className="flex items-center gap-2 text-slate-700">
          <input type="checkbox" className="size-5 accent-brand-700" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
          Recordar en este dispositivo
        </label>
        <Button type="submit" className="w-full" disabled={busy || !key}>
          {busy ? "Comprobando…" : "Entrar"}
        </Button>
      </form>
      <button onClick={() => navigate("/")} className="mt-6 text-sm text-slate-500 underline">
        Volver al inicio
      </button>
    </main>
  );
}
