import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/yume/ExperiencePage";
import { EXPERIENCES } from "@/data/content";

const description = "Pool day passes, facilities and enquiries at Yume Resort, Sonivali, Badlapur.";
export const Route = createFileRoute("/_yume/pool")({
  head: () => ({ meta: [{ title: "Pool — Yume Resort" }, { name: "description", content: description }, { property: "og:title", content: "Pool — Yume Resort" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <ExperiencePage content={EXPERIENCES.pool} experience="pool" />,
});