import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr:
      process.env.NODE_ENV === "production"
        ? false
        : {
            clientPort: 443,
            host: "qlue.in",
          },
  },
  plugins: [react()],
  define: {
    "process.env": {}, // Allows environment variables
  },
});
