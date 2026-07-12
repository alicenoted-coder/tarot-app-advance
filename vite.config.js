import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 部署在 https://<user>.github.io/tarot-app-advance/ 子路徑下，
// build 時需要對應的 base；本地 dev 維持根路徑 http://localhost:5173/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/tarot-app-advance/" : "/",
  plugins: [react()],
}));
