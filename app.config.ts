import { defineConfig } from "@tanstack/react-start/config";
import viteConfig from "./vite.config";

export default defineConfig({
  vite: viteConfig,
  server: {
    preset: process.env.VERCEL ? "vercel" : "node-server",
  },
});
