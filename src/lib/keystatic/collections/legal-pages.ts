import { collection, fields } from "@keystatic/core";

import { metaData } from "../shared/metadata";
import { title } from "../shared/title";

export const legalPages = collection({
  label: "Legal pages",
  path: "src/content/legal/*/",
  format: {
    data: "yaml",
    contentField: "content",
  },
  slugField: "title",
  columns: ["title"],
  schema: {
    title,
    metaData,
    content: fields.markdoc({
      label: "Content",
      description: "The content of the page",
    }),
  },
});
