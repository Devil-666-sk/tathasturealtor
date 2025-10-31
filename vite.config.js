import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ⚙️ Replace this with your actual Google Apps Script Web App URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzocGcxm4D1lMJSmRNTmjgnV_tK6kY5G7SUQkLur55vteAf3JhvF1bUsM65qH1LOSgu/exec";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  // 🧩 This adds a proxy to fix CORS issues during localhost development
  server: {
    proxy: {
      "/api": {
        target: SCRIPT_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // removes /api prefix
      },
    },
  },
});
