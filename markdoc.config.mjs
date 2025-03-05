import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    image: {
      ...nodes.image,
      render: component("./src/components/markdoc/ContentImage.astro"),
    },
  },
  tags: {
    Callout: {
      render: component("./src/components/markdoc/Callout.astro"),
    },
  },
});
