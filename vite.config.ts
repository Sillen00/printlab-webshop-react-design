import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    // ...other build configuration
    rollupOptions: {
      output: {
        entryFileNames: "test-hash.js", // Use [name]-[hash].js to generate unique filenames
      },
    },
  },
});
