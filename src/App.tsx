import { useEffect } from "react";
import { useHashRoute, navigate } from "./lib/router";
import { KEYS, useStored } from "./lib/storage";
import { decodeConfig, type PatientConfig } from "./lib/config";
import { decodeShort } from "./lib/shortcode";
import { getProcedure } from "./data/procedures";
import Welcome from "./pages/Welcome";
import Surgeon from "./pages/Surgeon";
import PatientApp from "./pages/patient/PatientApp";
import Sources from "./pages/Sources";

export default function App() {
  const route = useHashRoute();
  const [config, setConfig] = useStored<PatientConfig | null>(KEYS.config, null);

  // Un enlace /p/<datos> o /c/<código corto> configura la app del paciente y lo lleva a "Hoy"
  useEffect(() => {
    if (route.startsWith("/p/") || route.startsWith("/c/")) {
      const c = route.startsWith("/p/") ? decodeConfig(route.slice(3)) : decodeShort(route.slice(3));
      if (c && getProcedure(c.p)) setConfig(c);
      navigate("/");
    }
  }, [route, setConfig]);

  if (route.startsWith("/medico")) return <Surgeon />;
  if (route.startsWith("/p/") || route.startsWith("/c/")) return null;

  const proc = config ? getProcedure(config.p) : undefined;
  if (route.startsWith("/fuentes")) return <Sources highlight={proc?.id} />;
  if (!config || !proc) return <Welcome onDemo={setConfig} />;

  return <PatientApp config={config} proc={proc} route={route} onReset={() => setConfig(null)} />;
}
