// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["127.0.0.1"],
  },
  integrations: [react(), markdoc(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
