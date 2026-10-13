import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/yume/ExperiencePage";
import { EXPERIENCES } from "@/data/content";

const description = "Outdoor dining and relaxed meals at Yume Resort, Sonivali, Badlapur.";
export const Route = createFileRoute("/_yume/dine")({
  head: () => ({
    meta: [
      { title: "Dine - Yume Resort" },
      { name: "description", content: description },
      { property: "og:title", content: "Dine - Yume Resort" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ExperiencePage content={EXPERIENCES.dine} experience="dine" />,
});
