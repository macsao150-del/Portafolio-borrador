import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import flowbiteReact from "flowbite-react/plugin/vite";


// Convertir import.meta.url a __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({
  server: {
    port: 5173,        
    host: true,    
    allowedHosts: "all",  
  },
  plugins: [react(), tailwindcss(), jsconfigPaths(), flowbiteReact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});