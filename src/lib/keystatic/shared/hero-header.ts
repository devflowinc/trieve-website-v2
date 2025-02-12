import { fields } from "@keystatic/core";

export const heroHeader = fields.object(
  {
    tagline: fields.text({ label: "Hero tagline" }),
    title: fields.text({ label: "Hero title" }),
    leadText: fields.text({ label: "Hero lead text" }),
    actions: fields.array(
      fields.object({
        label: fields.text({ label: "Action label" }),
        href: fields.text({ label: "Action href" }),
        newTab: fields.checkbox({ label: "Open in new tab" }),
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
      }),
      {
        label: "Actions",
        description: "The actions to display in the hero header",
        itemLabel: (props) => props.fields.label.value,
      }
    ),
  },
  {
    label: "Section: HeroHeader",
    description: "The hero header section of the homepage",
  }
);
