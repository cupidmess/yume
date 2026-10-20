import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/yume/ExperiencePage";
import { EXPERIENCES, SEO, site } from "@/data/content";
import { faqSchema, seoHead, venueSchema } from "@/lib/seo";

export const Route = createFileRoute("/_yume/turf")({
  head: () =>
    seoHead("turf", [
      venueSchema({
        type: "SportsActivityLocation",
        name: `${site.name} Cricket Turf`,
        path: SEO.pages.turf.path,
        description: SEO.pages.turf.description,
        image: SEO.pages.turf.image,
        extra: { openingHours: "Mo-Su 07:00-23:00", sport: "Cricket" },
      }),
      faqSchema(EXPERIENCES.turf.faqs),
    ]),
  component: () => <ExperiencePage content={EXPERIENCES.turf} experience="turf" />,
});