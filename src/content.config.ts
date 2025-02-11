import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.mdoc",
    base: "./src/content/articles",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.date(),
      isDraft: z.boolean(),
      category: z.string(),
      coverImage: image(),
    }),
});

export const collections = {
  articles,
};
