import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/data/content";
import { absoluteUrl } from "@/lib/seo";

// Built from SEO.pages, so a page added there is listed here automatically.
function sitemap() {
  const urls = Object.values(SEO.pages)
    .map(
      (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <image:image><image:loc>${absoluteUrl(page.image)}</image:loc></image:image>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemap(), {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
