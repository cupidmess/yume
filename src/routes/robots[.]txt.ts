import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/data/content";
import { absoluteUrl } from "@/lib/seo";

// Only the canonical host (SEO.siteUrl) is crawlable. Preview, staging and
// lovable.app copies answer "Disallow: /" so they never compete in search.
export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const canonical = new URL(request.url).host === new URL(SEO.siteUrl).host;
        const body = canonical
          ? `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`
          : "User-agent: *\nDisallow: /\n";
        return new Response(body, {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
