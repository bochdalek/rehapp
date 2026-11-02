import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Se publica en GitHub Pages bajo /rehapp/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/rehapp/" : "/",
  plugins: [react(), tailwindcss()],
}));
