import { collection } from "@keystatic/core";

import { metaData } from "../shared/metadata";
import { pageHeader } from "../shared/page-header";
import { contentBlocks } from "../shared/content-blocks";
import { title } from "../shared/title";

export const pages = collection({
  label: "Content pages",
  path: "src/content/pages/*/",
  slugField: "title",
  columns: ["title"],
  schema: {
    title,
    metaData,
    pageHeader,
    contentBlocks,
  },
});
