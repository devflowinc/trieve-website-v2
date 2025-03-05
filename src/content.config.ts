import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const authors = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "./src/content/authors",
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string().optional(),
      avatar: image().optional(),
    }),
});

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
      author: reference("authors"),
      category: z.string(),
      coverImage: image().optional(),
    }),
});

export const collections = {
  articles,
  authors,
};
