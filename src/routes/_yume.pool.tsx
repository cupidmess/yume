import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/yume/ExperiencePage";
import { EXPERIENCES } from "@/data/content";
import { faqSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/_yume/pool")({
  head: () => seoHead("pool", [faqSchema(EXPERIENCES.pool.faqs)]),
  component: () => <ExperiencePage content={EXPERIENCES.pool} experience="pool" />,
});
