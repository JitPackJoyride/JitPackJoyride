import { defineConfig } from "astro/config";
// https://astro.build/config
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import remarkReadingTime from "./remarkReadingTime.mjs";

export default defineConfig({
  site: "https://jitpackjoyride.com",
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    prefetch(),
    svelte(),
    tailwind(),
    sitemap(),
    robotsTxt(),
    mdx(),
  ],
});
