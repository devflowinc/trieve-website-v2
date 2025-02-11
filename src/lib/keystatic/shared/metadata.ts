import { fields } from "@keystatic/core";

export const metaData = fields.object(
  {
    title: fields.text({ label: "Meta title" }),
    description: fields.text({ label: "Meta description", multiline: true }),
  },
  {
    label: "SEO Metadata",
    description: "SEO metadata for the page (including document title)",
  }
);
