import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    cssTarget: "safari14",
  },
  plugins: [react()],
});
