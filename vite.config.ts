import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(() => ({
    plugins: [react(), eslint(), mkcert()],
    server: {
      port: 443
    }
  }));
