import { config } from "@keystatic/core";

import { articles } from "@lib/keystatic/collections/articles";
import { authors } from "@lib/keystatic/collections/authors";
import { comparisons } from "@lib/keystatic/collections/comparisons";
import { legalPages } from "@lib/keystatic/collections/legal-pages";
import { pages } from "@lib/keystatic/collections/pages";
import { homepage } from "@lib/keystatic/singletons/homepage";
import { pricing } from "@lib/keystatic/singletons/pricing";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    articles,
    authors,
    pages,
    comparisons,
    legalPages,
  },
  singletons: {
    homepage,
    pricing,
  },
});
