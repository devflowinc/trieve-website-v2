import { fields } from "@keystatic/core";
import { baseButtonFields } from "./base";

export const pricingPlans = fields.object({
  plans: fields.array(
    fields.object(
      {
        name: fields.text({
          label: "Plan Name",
          validation: { isRequired: true },
        }),
        description: fields.text({ label: "Description" }),
        price: fields.text({ label: "Price" }),
        highlight: fields.text({
          label: "Highlight",
          description: "Short label to show as a highlight ribbon",
        }),
        features: fields.array(
          fields.object({
            name: fields.text({ label: "Feature Name" }),
            value: fields.text({ label: "Feature Value" }),
          }),
          {
            label: "Features",
            description: "The features of the pricing plan",
            itemLabel: (props) => props.fields.value.value,
          }
        ),
        action: fields.object(
          {
            ...baseButtonFields,
          },
          {
            label: "Action",
            description: "The action button for the pricing plan",
          }
        ),
      },
      {
        label: "Plans",
        description: "The pricing plans",
      }
    ),
    {
      label: "Pricing plans",
      description: "The pricing plans",
      itemLabel: (props) => props.fields.name.value,
    }
  ),
});
