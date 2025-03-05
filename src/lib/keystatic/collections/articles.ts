import { collection, fields } from "@keystatic/core";
import { wrapper } from "@keystatic/core/content-components";

export const articles = collection({
  label: "Blog articles",
  path: "src/content/articles/*/",
  slugField: "title",
  format: {
    contentField: "content",
  },
  columns: ["title", "summary", "date", "category", "author", "isDraft"],
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
    date: fields.date({
      label: "Date",
      validation: {
        isRequired: true,
      },
    }),
    isDraft: fields.checkbox({
      label: "Draft",
      description: "Is this a draft?",
    }),
    author: fields.relationship({
      label: "Author",
      description: "The author of the post",
      collection: "authors",
      validation: {
        isRequired: true,
      },
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
    tags: fields.text({
      label: "Tags",
      description: "Coma separated list of tags for the article",
    }),
    coverImage: fields.image({
      label: "Cover Image",
      directory: "src/content/articles",
      publicPath: "/src/content/articles/",
    }),
    content: fields.markdoc({
      label: "Content",
      description: "The content of the post",
      options: {
        image: {
          directory: "src/content/articles",
          publicPath: "/src/content/articles/",
        },
      },
      components: {
        Callout: wrapper({
          label: "Callout",
          schema: {},
        }),
      },
    }),
  },
});
