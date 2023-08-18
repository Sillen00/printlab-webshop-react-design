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
    preprocessorOptions: {
      
      esbuild: {
        jsxInject: `import React from 'react'`,
      },
    },
  },
});
