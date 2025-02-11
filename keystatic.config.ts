import { config } from "@keystatic/core";

import { articles } from "@lib/keystatic/collections/articles";
import { homepage } from "@lib/keystatic/singletons/homepage";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    articles,
  },
  singletons: {
    homepage,
  },
});
