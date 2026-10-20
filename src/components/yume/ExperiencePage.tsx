import { ArrowRight } from "lucide-react";
import {
  EnquiryBand,
  Facts,
  ImageMosaic,
  InteriorHero,
  PageShell,
  SectionHeading,
  VideoBand,
} from "@/components/yume/InteriorPage";
import { GALLERY, site, type EXPERIENCE_KEY, type ExperienceContent } from "@/data/content";
import dineMain from "@/assets/yume/dinemain.jpg";
// Cropped from poolImage4.jpg: 16:9 for the desktop hero, square for mobile.
import poolMain from "@/assets/yume/pool-hero-desktop.jpg"
import poolMainMobile from "@/assets/yume/pool-hero-mobile.jpg"
import turfMain from "@/assets/yume/turfmain.jpg"
export function ExperiencePage({
  content,
  experience,
}: {
  content: ExperienceContent;
  experience: EXPERIENCE_KEY;
}) {
  const imageCategories: Record<EXPERIENCE_KEY, string[]> = {
    pool: ["pool1", "pool2", "pool3", "pool4"],
    dine: ["dine1", "dine2", "dine3", "dine4"],
    turf: ["turf1", "turf2", "turf3", "turf4"],
  };
  
  const images = GALLERY.filter((item) =>
    imageCategories[experience].includes(item.category.toLowerCase())
  );
  const EXPERIENCE_HERO_IMAGES: Record<EXPERIENCE_KEY, string> = {
    dine: dineMain,
    pool: poolMain,
    turf: turfMain,
  };
  const EXPERIENCE_HERO_MOBILE_IMAGES: Partial<Record<EXPERIENCE_KEY, string>> = {
    pool: poolMainMobile,
  };
  return (
    <PageShell>
 <InteriorHero
  eyebrow={content.eyebrow}
  title={content.title}
  intro={content.intro}
  image={EXPERIENCE_HERO_IMAGES[experience]}
  mobileImage={EXPERIENCE_HERO_MOBILE_IMAGES[experience]}
  imageAlt={`${content.eyebrow} at Yume Resort`}
/>
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-24">
          <div>
            <SectionHeading eyebrow="The experience" title={content.story} />
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phones[0].href}`}
                className="rounded-md border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:border-ink"
              >
                Call to enquire
              </a>
              <a
                href={`https://wa.me/917028043300?text=${encodeURIComponent(content.message)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-sage"
              >
                {content.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <Facts items={content.facts} />
        </div>
      </section>
      {content.video ? (
        <VideoBand
          video={content.video}
          poster={content.video.poster ?? content.image}
          alt={content.video.alt ?? `${content.eyebrow} film at Yume Resort`}
          title={content.video.title}
          caption={content.video.caption}
        />
      ) : null}
      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-7xl">
<SectionHeading
  eyebrow="Around Yume"
  title={
    experience === "dine"
      ? "A taste of togetherness."
      : experience === "pool"
        ? "A moment to unwind."
        : experience === "turf"
          ? "Where the game comes alive."
          : "A glimpse of your day."
  }
/>
          <div className="mt-10">
            <ImageMosaic images={images} />
          </div>
        </div>
      </section>
      <EnquiryBand
        title="Ready to make a plan?"
        body="Share your preferred date, group size and any questions. Our team will confirm availability and the latest rates."
        message={content.message}
        label={content.cta}
      />
    </PageShell>
  );
}
