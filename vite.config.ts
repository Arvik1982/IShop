import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/IShop/" : "/",
  server: {
    watch: { usePolling: true },
    host: true,
    strictPort: true,
    port: 5173,
  },
}));
