import { collection, fields } from "@keystatic/core";

import { metaData } from "../shared/metadata";
import { pageHeader } from "../shared/page-header";
import { contentBlocks } from "../shared/content-blocks";

export const pages = collection({
  label: "Pages",
  path: "src/content/pages/*/",
  slugField: "title",
  columns: ["title"],
  schema: {
    title: fields.slug({
      name: {
        label: "Page title",
        description: "The name of the page (may be used in navigation, etc.)",
      },
      // Optional slug label overrides
      slug: {
        label: "SEO-friendly slug",
        description: "The unique, URL-friendly slug for the page",
      },
    }),
    metaData,
    pageHeader,
    contentBlocks,
  },
});
