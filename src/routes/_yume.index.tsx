import { useEffect, useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Star, Waves } from "lucide-react";
import {
  IMAGES,
  SPOTLIGHT,
  INSTAGRAM_TILES,
  STATS,
  STORY,
  WEDDING_BAND,

  WA_MESSAGES,
  WAYS,
  site,
  waLink,
} from "@/data/content";
import { ReviewSlider } from "@/components/yume/ReviewSlider";

export const Route = createFileRoute("/_yume/")({
  head: () => ({
    meta: [
      { title: "Yume Resort — A hidden retreat for unforgettable moments" },
      {
        name: "description",
        content:
          "Yume Resort, Sonivali, Badlapur — stays, dining, pool, turf and riverside weddings. A hidden retreat just outside Mumbai. Enquire on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Yume Resort — A hidden retreat for unforgettable moments",
      },
      {
        property: "og:description",
        content:
          "Stay, dine, swim, play and celebrate by the river at Yume Resort, Sonivali, Badlapur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:url",
        content: "https://propertybase-web-spark.lovable.app/yume",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://propertybase-web-spark.lovable.app/yume",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: "Yume Resort",
          slogan: site.tagline,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Badlapur",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          telephone: "+917028043300",
          url: "https://propertybase-web-spark.lovable.app/yume",
          sameAs: site.instagram.url,
        }),
      },
    ],
  }),
  component: YumeHome,
});

function useReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function YumeHome() {
  useReveal();
  const storyVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = storyVideoRef.current;
    if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[92svh] min-h-[560px] overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Yume Resort at golden hour, beside the river"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/10" />
        <div className="relative flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/80">
            Sonivali · Badlapur
          </p>
          <h1 className="mt-4 max-w-4xl font-yume-serif text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl lg:text-7xl">
            A hidden retreat for unforgettable moments.
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/stay"
              className="rounded-md border border-cream/70 px-7 py-3 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              Book a Stay
            </Link>
            <a
              href={waLink(WA_MESSAGES.planWedding)}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-peach px-7 py-3 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
            >
              Plan a Wedding
            </a>
          </div>
        </div>
      </section>

      {/* Spotlight — Barvi Dam bar */}
      <section aria-label="Yume is 10 minutes from Badlapur Station">
        <Link
          to={SPOTLIGHT.to}
          className="group block overflow-hidden bg-ink py-5 md:py-7"
        >
          <div className="yume-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                <span className="px-6 text-[11px] uppercase tracking-[0.3em] text-cream md:px-10">
                  {SPOTLIGHT.title}
                </span>
                <Waves className="h-5 w-5 shrink-0 text-peach md:h-6 md:w-6" />
                <span className="px-6 text-[11px] uppercase tracking-[0.3em] text-cream/60 md:px-10">
                  {site.location}
                </span>
                <Waves className="h-5 w-5 shrink-0 text-peach md:h-6 md:w-6" />
              </div>
            ))}
          </div>
        </Link>
      </section>

      {/* Story */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-7" data-reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50">
              The Story
            </p>
            <p className="mt-6 font-yume-serif text-3xl leading-[1.15] tracking-tight md:text-[2.6rem]">
              {STORY.lead}
            </p>
            <p className="mt-8 max-w-xl text-ink/70">{STORY.body}</p>
          </div>
          <div className="md:col-span-5 md:mt-16" data-reveal>
            <video
              ref={storyVideoRef}
              poster={IMAGES.story}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="A quiet veranda at Yume Resort in morning light"
              className="aspect-[4/5] w-full object-cover"
            >
              <source src={IMAGES.storyVideoWebm} type="video/webm" />
              <source src={IMAGES.storyVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>


      {/* Five ways to spend a day */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50">
            A Day at Yume
          </p>
          <h2 className="mt-4 font-yume-serif text-3xl tracking-tight md:text-5xl">
            Five ways to spend a day at Yume.
          </h2>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 md:h-[70vh] md:flex-row">
          {WAYS.map((way) => (
            <Link
              key={way.to}
              to={way.to}
              className="group relative h-56 overflow-hidden md:h-auto md:w-1/5"
            >
              <img
                src={way.image}
                alt={way.label}
                loading="lazy"
                width={1600}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream/80">
                  {way.blurb}
                </p>
                <p className="mt-1 font-yume-serif text-2xl text-cream opacity-80 transition-opacity duration-500 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 md:text-3xl">
                  {way.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Wedding feature band */}
      <section className="relative">
        <img
          src={IMAGES.weddingBand}
          alt="Riverside wedding tables at dusk"
          loading="lazy"
          width={1920}
          height={1008}
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-14 md:px-12 md:pb-20">
          <div className="mx-auto max-w-7xl" data-reveal>
            <h2 className="max-w-3xl text-[34px] leading-[1.12] text-cream md:text-[54px] lg:text-[62px]">
              <span
                className="block font-yume-serif font-medium italic"
                style={{ fontVariationSettings: "'opsz' 72, 'wght' 500" }}
              >
                Your dream wedding,
              </span>
              <span className="block font-yume-script text-[1.15em] font-normal italic leading-[1.1] text-cream">
                by the river
              </span>
            </h2>
            <div className="mt-8 inline-flex flex-col items-stretch">
              <a
                href={waLink(WA_MESSAGES.checkDate)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-[10px] bg-peach px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-cream"
              >
                Check my Date
              </a>
              <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.3em] text-cream/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] md:text-xs">
                {WEDDING_BAND.from}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-ink/10 px-6 py-16 md:px-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 text-center" data-reveal>
              <p className="font-yume-serif text-3xl tracking-tight text-ink/80 md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-ink/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Google reviews */}
      <ReviewSlider />

      {/* Instagram strip */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl" data-reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-yume-serif text-3xl tracking-tight md:text-5xl">
              Life at Yume.
            </h2>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-ink/70 underline-offset-4 hover:underline"
            >
              Follow {site.instagram.handle}
            </a>
          </div>
          {/* TODO: connect the live Instagram feed for @yume.resort */}
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {INSTAGRAM_TILES.map((tile) => (
              <a
                key={tile.image}
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden"
              >
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  width={816}
                  height={816}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
