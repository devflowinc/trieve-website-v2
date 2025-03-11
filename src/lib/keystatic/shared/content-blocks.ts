import { fields } from "@keystatic/core";
import { baseHeaderFields } from "./base";

// Generic section header block
export const headerBlock = {
  label: "Section Header Block",
  schema: fields.object({
    ...baseHeaderFields,
  }),
};

// Section that displays a grid of features
export const featuresBlock = {
  label: "Features Grid",
  schema: fields.object({
    header: fields.object(
      {
        ...baseHeaderFields,
      },
      {
        label: "Header",
        description: "The header part of the features block",
      }
    ),
    items: fields.array(
      fields.object({
        icon: fields.text({ label: "Icon Name" }),
        title: fields.text({ label: "Feature Title" }),
        description: fields.text({
          label: "Feature Description",
          multiline: true,
        }),
      }),
      {
        label: "Features",
        description: "The features to display in the grid",
        itemLabel: (props) => props.fields.title.value,
      }
    ),
  }),
};

// Section that displays a list of image and text cards
export const imageAndTextBlock = {
  label: "Image and Text Blocks",
  schema: fields.object({
    header: fields.object(
      {
        ...baseHeaderFields,
      },
      {
        label: "Header",
        description: "The header part of the image and text cards block",
      }
    ),
    items: fields.array(
      fields.object({
        layout: fields.select({
          label: "Layout",
          description: "The layout of the card",
          defaultValue: "image-left",
          options: [
            { value: "image-left", label: "Image Left" },
            { value: "image-right", label: "Image Right" },
          ],
        }),
        title: fields.text({ label: "Card Title" }),
        description: fields.text({
          label: "Card Description",
          multiline: true,
        }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: "Item Label" }),
            description: fields.text({ label: "Item Value", multiline: true }),
          }),
          {
            label: "Entries",
            description: "The entries to display in the card",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
        image: fields.image({
          label: "Card Image",
          directory: "src/assets/images/blocks",
          publicPath: "/src/assets/images/blocks/",
        }),
      }),
      {
        label: "Slides",
        description: "The cards/slides display in the section",
        itemLabel: (props) => props.fields.title.value,
      }
    ),
  }),
};

// Section that displays brands with logos
export const brandsBlock = {
  label: "Trusted Brands",
  schema: fields.object({
    header: fields.object(
      {
        ...baseHeaderFields,
      },
      {
        label: "Header",
        description: "The header part of the brands block",
      }
    ),
  }),
};

// Dynamic section of content blocks
export const contentBlocks = fields.object(
  {
    content: fields.blocks(
      {
        headerBlock: headerBlock,
        featuresBlock: featuresBlock,
        imageAndTextBlock: imageAndTextBlock,
        brandsBlock: brandsBlock,
      },
      {
        label: "Content blocks",
        description: "Add and reorder various content blocks on the page.",
      }
    ),
  },
  {
    label: "Page Content",
    description: "The dynamic content sections to display on the page.",
  }
);
