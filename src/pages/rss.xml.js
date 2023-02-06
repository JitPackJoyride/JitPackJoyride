import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Ajit's Blog",
    description: "Blogs about technology, software, and life.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}`,
      // Note: this will not process components or JSX expressions in MDX files.
      content: sanitizeHtml(post.render()),
    })),
    // (optional) inject custom xml
    customData: `<language>en-gb</language>`,
  });
}
