import { fields } from "@keystatic/core";

export const metaData = fields.object(
  {
    title: fields.text({
      label: "Meta title",
      description: "Title for the page (leave empty for default)",
    }),
    description: fields.text({
      label: "Meta description",
      multiline: true,
      description:
        "Short meta description for the page, (leave empty for default)",
    }),
  },
  {
    label: "SEO Metadata",
    description: "SEO metadata for the page (including document title)",
  }
);
