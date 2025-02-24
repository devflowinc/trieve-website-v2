import { fields } from "@keystatic/core";

export const title = fields.slug({
  name: {
    label: "Page title",
    description: "The name of the page (may be used in navigation, etc.)",
    validation: {
      isRequired: true,
    },
  },
  // Optional slug label overrides
  slug: {
    label: "SEO-friendly slug",
    description:
      "The unique, URL-friendly slug for the page (don't include slashes in front)",
  },
});
