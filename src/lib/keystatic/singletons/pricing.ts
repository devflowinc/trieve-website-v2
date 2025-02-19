import { fields, singleton } from "@keystatic/core";

import { metaData } from "../shared/metadata";
import { pageHeader } from "../shared/page-header";
import { pricingPlans } from "../shared/pricing-plans";

export const pricing = singleton({
  label: "Pricing",
  path: "src/content/singles/pricing/",
  schema: {
    metaData,
    pageHeader,
    pricingPlans,
    closingText: fields.markdoc.inline({
      label: "Closing Text",
      options: {
        code: false,
        strikethrough: false,
        heading: false,
        blockquote: false,
        orderedList: false,
        unorderedList: false,
        table: false,
        image: false,
        divider: false,
        codeBlock: false,
      },
    }),
  },
});
