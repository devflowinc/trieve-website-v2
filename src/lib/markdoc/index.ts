import Markdoc, { type Node } from "@markdoc/markdoc";

type ContentFn = () => Promise<{ node: Node }>;

export async function renderHtml(contentFn: ContentFn): Promise<string | null> {
  const content = await contentFn();
  const errors = Markdoc.validate(content.node);

  if (errors.length) {
    console.error(errors);
    return null;
  }

  const transformed = Markdoc.transform(content.node);
  const html = Markdoc.renderers.html(transformed);

  return html;
}
