import type { Schema } from "@markdoc/markdoc";

export const callout: Schema = {
  render: "Callout",
  description: "A callout block to highlight important information.",
  children: ["paragraph", "tag", "list"],
};
