import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages sirve bajo /rehapp/; Vercel (variable VERCEL) sirve en la raíz
export default defineConfig(({ command }) => ({
  base: command === "build" && !process.env.VERCEL ? "/rehapp/" : "/",
  plugins: [react(), tailwindcss()],
}));
