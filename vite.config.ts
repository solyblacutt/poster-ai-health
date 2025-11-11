import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite construirá tomando como raíz la carpeta "client"
// y dejará los archivos finales en "server/public" (que tu Express ya sabe servir).
// Para GitHub Pages, subiremos ese "server/public" como artefacto estático.

export default defineConfig({
  base: "/poster-ai-health/", // 👈 nombre EXACTO de tu repo en GitHub
  root: path.resolve(__dirname, "client"),
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "server/public"),
    emptyOutDir: true,
  },
});
