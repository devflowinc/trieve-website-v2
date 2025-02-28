import { collection, fields } from "@keystatic/core";

import { title } from "../shared/title";
import { metaData } from "../shared/metadata";
import { compareHeader } from "../shared/compare-header";

export const comparisons = collection({
  label: "Compare pages",
  path: "src/content/comparisons/*/",
  format: {
    data: "yaml",
    contentField: "content",
  },
  slugField: "title",
  columns: ["title"],
  schema: {
    title,
    metaData,
    compareHeader,
    content: fields.markdoc({
      label: "Content",
      description: "The content of the page",
    }),
  },
});
