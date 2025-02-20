// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://trieve.ai/",
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["127.0.0.1"],
  },
  integrations: [react(), markdoc(), keystatic(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },
});
