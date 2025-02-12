import { collection, fields } from "@keystatic/core";

export const articles = collection({
  label: "Articles",
  path: "src/content/articles/*/",
  slugField: "title",
  format: {
    contentField: "content",
  },
  columns: ["title", "summary", "date", "category", "isDraft"],
  schema: {
    title: fields.slug({
      name: {
        label: "Title",
        description: "The title of the post",
      },
      // Optional slug label overrides
      slug: {
        label: "SEO-friendly slug",
        description: "The URL-friendly slug for the post",
      },
    }),
    summary: fields.text({ label: "Summary", multiline: true }),
    date: fields.date({ label: "Date" }),
    isDraft: fields.checkbox({
      label: "Draft",
      description: "Is this a draft?",
    }),
    category: fields.select({
      label: "Category",
      options: [
        { value: "news", label: "News" },
        { value: "tutorials", label: "Tutorials" },
        { value: "explainers", label: "Explainers" },
        { value: "announcements", label: "Announcements" },
        { value: "reviews", label: "Reviews" },
        { value: "other", label: "Other" },
      ],
      defaultValue: "news",
    }),
    coverImage: fields.image({
      label: "Cover Image",
      directory: "src/assets/images/articles",
      publicPath: "/src/assets/images/articles/",
    }),
    content: fields.markdoc({
      label: "Content",
      description: "The content of the post",
      options: {
        image: {
          directory: "src/assets/images/articles",
          publicPath: "/src/assets/images/articles/",
        },
      },
    }),
  },
});
