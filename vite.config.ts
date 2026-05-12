import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./", // 🔥 FIX for Vercel blank screen
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
