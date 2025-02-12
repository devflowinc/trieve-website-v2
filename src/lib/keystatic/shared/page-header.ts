import { fields } from "@keystatic/core";

export const pageHeader = fields.object(
  {
    tagline: fields.text({ label: "Tagline" }),
    title: fields.text({ label: "Title" }),
    leadText: fields.text({ label: "Lead Text" }),
  },
  {
    label: "Page Header",
    description: "The header part of the page",
  }
);
