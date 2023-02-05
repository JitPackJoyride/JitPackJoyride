import { rssSchema } from "@astrojs/rss";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: rssSchema.extend({
    tags: z.array(z.string()),
    image: z.string().optional(),
    footnote: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
