import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
// @ts-ignore
// eslint-disable-next-line
const isGH = process.env.DEPLOY_ENV === 'GH_PAGES';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGH ? '/Click-EWE/' : '/',
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
