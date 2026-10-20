import { createFileRoute } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/yume/ExperiencePage";
import { EXPERIENCES, SEO, site } from "@/data/content";
import { faqSchema, seoHead, venueSchema } from "@/lib/seo";

export const Route = createFileRoute("/_yume/dine")({
  head: () =>
    seoHead("dine", [
      venueSchema({
        type: "Restaurant",
        name: `${site.name} Restaurant`,
        path: SEO.pages.dine.path,
        description: SEO.pages.dine.description,
        image: SEO.pages.dine.image,
        extra: { openingHours: "Mo-Su 08:00-24:00", acceptsReservations: true },
      }),
      faqSchema(EXPERIENCES.dine.faqs),
    ]),
  component: () => <ExperiencePage content={EXPERIENCES.dine} experience="dine" />,
});
