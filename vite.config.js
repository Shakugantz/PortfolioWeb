import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  /***DEPLOY EN VERCEL ***/
  /*base: "/",
  plugins: [react()],
  server: {
  open: true,
},*/
  /***DEPLOY EN GITHUB PAGES ***/
  base: "/PortfolioWeb/",
  plugins: [react()],
  server: {
    open: true,
  },
});
