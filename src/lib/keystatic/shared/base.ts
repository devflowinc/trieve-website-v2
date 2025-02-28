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
    multiline: true,
    description: "Lead text for the section (appears below the title)",
  }),
};

export const baseButtonFields = {
  label: fields.text({
    label: "Button label",
    description: "The text to display on the button",
    validation: {
      isRequired: true,
    },
  }),
  href: fields.text({
    label: "Button href",
    description: "The URL to navigate to when the button is clicked",
    validation: {
      isRequired: true,
    },
  }),
  newTab: fields.checkbox({
    label: "Open in new tab",
    description: "Whether to open the link in a new tab",
  }),
  variant: fields.select({
    label: "Button variant",
    description: "The style variant of the button",
    options: [
      { value: "primary", label: "Primary" },
      { value: "secondary", label: "Secondary" },
      { value: "tertiary", label: "Tertiary" },
    ],
    defaultValue: "primary",
  }),
};
