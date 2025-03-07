// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

const isDev = process.env.NODE_ENV !== "production";

// https://astro.build/config
export default defineConfig({
  site: "https://trieve.ai/",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    markdoc(),
    sitemap(),
    ...(isDev ? [keystatic()] : []),
    icon(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },
});