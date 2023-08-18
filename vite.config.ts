import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory for production build
    outDir: "dist",
  },
  css: {
    // Include or import CSS files globally
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`, // Replace with your global styles path
      },
    },
  },
});
