import { singleton } from "@keystatic/core";

import { metaData } from "../shared/metadata";
import { heroHeader } from "../shared/hero-header";
import { content } from "../shared/content-blocks";

export const homepage = singleton({
  label: "Homepage",
  path: "src/content/singles/homepage/",
  schema: {
    metaData,
    heroHeader,
    content,
  },
});
