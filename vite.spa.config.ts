import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Standalone SPA build for static hosting (e.g. GitHub Pages).
// Intentionally does NOT use the TanStack Start plugin — Start ships an SSR
// hydration entry that doesn't work on a static host. We mount the same
// routeTree via @tanstack/react-router directly.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: "dist-spa",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "spa/index.html"),
    },
  },
});
