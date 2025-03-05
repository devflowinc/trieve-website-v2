import Markdoc, { type Node, type Config } from "@markdoc/markdoc";
import { callout } from "./schema";

type ContentFn = () => Promise<{ node: Node }>;

const config: Config = {
  tags: {
    callout,
  },
};

export async function renderHtml(contentFn: ContentFn): Promise<string | null> {
  const content = await contentFn();
  const errors = Markdoc.validate(content.node);

  if (errors.length) {
    console.error(errors);
    return null;
  }

  const transformed = Markdoc.transform(content.node, config);
  const html = Markdoc.renderers.html(transformed);

  return html;
}
