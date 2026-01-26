import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://rafaelhipolito.xyz",
  integrations: [sitemap(), mdx(), pagefind(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "css-variables",
    },
  },
});