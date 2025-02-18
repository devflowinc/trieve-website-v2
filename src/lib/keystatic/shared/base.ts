import { fields } from "@keystatic/core";

export const baseHeaderFields = {
  tagline: fields.text({
    label: "Tagline",
    description: "Small tagline text, appears above the title",
  }),
  title: fields.text({
    label: "Title",
    description: "The main title text for the section",
    validation: {
      isRequired: true,
    },
  }),
  leadText: fields.text({
    label: "Lead Text",
    description: "Lead text for the section (appears below the title)",
  }),
};
