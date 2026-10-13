import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/yume/ExperiencePage";
import { EXPERIENCES } from "@/data/content";

const description = "Floodlit football and box cricket turf bookings at Yume Resort, Sonivali, Badlapur.";
export const Route = createFileRoute("/_yume/turf")({
  head: () => ({ meta: [{ title: "Turf - Yume Resort" }, { name: "description", content: description }, { property: "og:title", content: "Turf - Yume Resort" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <ExperiencePage content={EXPERIENCES.turf} experience="turf" />,
});