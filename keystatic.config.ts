import { config, fields, singleton } from "@keystatic/core";
import {
  headerBlock,
  featuresBlock,
  imageAndTextBlock,
} from "./src/lib/keystatic/blocks";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "src/content/singles/homepage/",
      schema: {
        metaData: fields.object(
          {
            title: fields.text({ label: "Meta title" }),
            description: fields.text({ label: "Meta description" }),
          },
          {
            label: "SEO Metadata",
            description: "SEO metadata for the page (including document title)",
          }
        ),
        heroHeader: fields.object(
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
        ),
        content: fields.blocks(
          {
            headerBlock: headerBlock,
            featuresBlock: featuresBlock,
            imageAndTextBlock: imageAndTextBlock,
          },
          {
            label: "Content Sections",
            description:
              "The dynamic content blocks to display on the homepage",
          }
        ),
      },
    }),
  },
});
