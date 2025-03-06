// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import copyImages from "./scripts/vite-plugin-copy-images";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [sveltekit(), copyImages()],
  server: {
    fs: {
      allow: ["./"],
    },
    strictPort: false,
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1500,
    ssrEmitAssets: true,
    sourcemap: false,
  },
});
