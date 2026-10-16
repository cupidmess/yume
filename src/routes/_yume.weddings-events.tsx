import { createFileRoute } from "@tanstack/react-router";
import {
  EnquiryBand,
  Facts,
  InteriorHero,
  PageShell,
  SectionHeading,
} from "@/components/yume/InteriorPage";
import { WA_MESSAGES, WEDDINGS, waLink } from "@/data/content";
import wedmain from "@/assets/yume/wedmain.jpg"
const description =
  "Riverside wedding venues, event packages and date enquiries at Yume Resort, Sonivali, Badlapur.";
export const Route = createFileRoute("/_yume/weddings-events")({
  head: () => ({
    meta: [
      { title: "Weddings & Events — Yume Resort" },
      { name: "description", content: description },
      { property: "og:title", content: "Weddings & Events — Yume Resort" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventVenue",
          name: "Yume Resort",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Badlapur",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          telephone: "+917028043300",
        }),
      },
    ],
  }),
  component: WeddingsPage,
});

function WeddingsPage() {
  return (
    <PageShell>
      <InteriorHero
        {...WEDDINGS.hero}
        // image={WEDDINGS.venues[0].image}
        image = {wedmain}
        imageAlt="Riverside wedding at Yume Resort"
      />
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Celebrate here"
            title="One destination, every part of the occasion."
            body={WEDDINGS.intro}
          />
          <div className="mt-14 grid gap-14">
            {WEDDINGS.venues.map((venue, index) => (
              <article key={venue.name} className="grid items-end gap-8 md:grid-cols-12">
                <img
                  src={venue.image}
                  alt={venue.name}
                  loading="lazy"
                  className={`aspect-[16/9] w-full object-cover md:col-span-8 ${index % 2 ? "md:order-2 md:col-start-5" : ""}`}
                />
                <div className={`pb-3 md:col-span-4 ${index % 2 ? "md:row-start-1" : ""}`}>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-ink/45">
                    Venue {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-yume-serif text-3xl tracking-tight">{venue.name}</h3>
                  <p className="mt-4 leading-relaxed text-ink/65">{venue.description}</p>
                  <p className="mt-5 text-sm">{venue.capacity}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink px-6 py-20 text-cream md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Packages</p>
          <h2 className="mt-4 font-yume-serif text-3xl tracking-tight md:text-5xl">
            Choose a starting point.
          </h2>
          <div className="mt-12 grid border-t border-cream/20 md:grid-cols-2 lg:grid-cols-4">
            {WEDDINGS.packages.map((pack) => (
              <article
                key={pack.name}
                className="flex flex-col border-b border-cream/20 py-8 md:px-8 md:first:pl-0 lg:border-l lg:border-cream/20 lg:first:border-l-0"
              >
               <p className="font-yume-serif text-lg lg:text-xl font-semibold whitespace-nowrap">{pack.name}</p>
                <p className="mt-2 text-sm text-cream/55">{pack.note}</p>
                <ul className="mt-7 space-y-3 text-sm text-cream/75">
                  {pack.inclusions.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
                <p className="mt-auto pt-8 font-yume-serif text-2xl">{pack.price}</p>
                <a
                  href={waLink(
                    `Hi Yume! I'd like to know more about the ${pack.name} wedding package.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-xs uppercase tracking-[0.2em] text-peach"
                >
                  Request this package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <SectionHeading
            eyebrow="Planning details"
            title="Support around your celebration."
            body="Bring your vision; we’ll help you understand what is possible at the resort."
          />
          <Facts items={WEDDINGS.services} />
        </div>
      </section>
      <EnquiryBand
        title="Have a date in mind?"
        body="Share the date, event type and estimated guest count. Our team will help with venue availability and package details."
        message={WA_MESSAGES.checkDate}
        label="Check my date"
      />
    </PageShell>
  );
}