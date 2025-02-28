import { fields } from "@keystatic/core";
import { baseHeaderFields } from "./base";

export const compareHeader = fields.object(
  {
    ...baseHeaderFields,
    coverImage: fields.image({
      label: "Cover Image",
      description: "Optional cover image to display in the header",
      directory: "src/content/comparisons",
      publicPath: "/src/content/comparisons/",
    }),
  },
  {
    label: "Page Header",
    description: "The header part of the page",
  }
);
