import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const entries = await getCollection("articles");

  return rss({
    title: "Trieve blog",
    description:
      "Detailed articles about search, discovery, relevance, RAG, and more from the Trieve team.",
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `${context.site}blog/${entry.id}/`,
    })),
  });
}
