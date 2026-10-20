import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { WA_MESSAGES, site, waLink } from "@/data/content";

type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  /** Optional portrait-friendly crop used below the md breakpoint. */
  mobileImage?: string;
  imageAlt: string;
};

export function InteriorHero({ eyebrow, title, intro, image, mobileImage, imageAlt }: InteriorHeroProps) {
  return (
    <section className="relative min-h-[72svh] overflow-hidden">
      <picture>
        {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileImage} /> : null}
        <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/15" />
      <div className="relative mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        {/* The eyebrow carries the page's search keyword, so it leads the H1. */}
        <h1>
          <span className="block text-[11px] uppercase tracking-[0.3em] text-cream/75">
            {eyebrow}
          </span>
          <span className="mt-4 block max-w-4xl font-yume-serif text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl lg:text-7xl">
            {title}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50">{eyebrow}</p>
      <h2 className="mt-4 font-yume-serif text-3xl leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 max-w-2xl leading-relaxed text-ink/65">{body}</p> : null}
    </div>
  );
}

export function Facts({ items }: { items: ReadonlyArray<{ label: string; value: string }> }) {
  return (
    <dl className="border-t border-ink/15">
      {items.map((item) => (
        <div
          key={item.label}
          className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 border-b border-ink/15 py-4"
        >
          <dt className="text-[11px] uppercase tracking-[0.2em] text-ink/50">{item.label}</dt>
          <dd className="text-sm leading-relaxed text-ink/80">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

// Answers stay in the server-rendered HTML (native <details>), so they match
// the FAQPage structured data emitted in each route's head.
export function FaqSection({
  items,
  title = "Questions, answered.",
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
  title?: string;
}) {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <SectionHeading eyebrow="Good to know" title={title} />
        <div className="border-t border-ink/15">
          {items.map((item) => (
            <details key={item.question} className="group border-b border-ink/15 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-yume-serif text-xl tracking-tight [&::-webkit-details-marker]:hidden">
                <h3>{item.question}</h3>
                <Plus
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-ink/50 transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnquiryBand({
  title,
  body,
  message = WA_MESSAGES.general,
  label = "Enquire on WhatsApp",
}: {
  title: string;
  body: string;
  message?: string;
  label?: string;
}) {
  return (
    <section className="bg-sage px-6 py-20 text-cream md:px-10 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/65">Plan your visit</p>
          <h2 className="mt-4 font-yume-serif text-3xl leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-cream/75">{body}</p>
        </div>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-3 rounded-md bg-ink px-6 py-3 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-peach hover:text-ink"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <div className="border-y border-ink/10 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-ink/60">Questions before you plan? Speak directly with the Yume team.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {site.phones.map((phone) => (
            <a key={phone.href} href={`tel:${phone.href}`} className="hover:text-sage">
              {phone.display}
            </a>
          ))}
          <Link
            to="/contact"
            className="underline decoration-ink/20 underline-offset-4 hover:decoration-ink"
          >
            Contact & directions
          </Link>
        </div>
      </div>
    </div>
  );
}


export function ImageMosaic({
  images,
}: {
  images: ReadonlyArray<{ src: string; alt: string }>;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {images.map((image, index) => (
        <img
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      ))}
    </div>
  );
}


export function PageShell({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}

export function VideoBand({
  video,
  poster,
  alt,
  eyebrow = "In motion",
  title,
  caption,
}: {
  video: { mp4: string; webm?: string };
  poster: string;
  alt: string;
  eyebrow?: string;
  title: string;
  caption: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;
    // Only fetch and play while near the viewport, and never for reduced motion.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const apply = () => {
      if (reduced.matches || !visible) element.pause();
      else void element.play().catch(() => {});
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        apply();
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(element);
    reduced.addEventListener("change", apply);
    return () => {
      io.disconnect();
      reduced.removeEventListener("change", apply);
    };
  }, []);

  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-yume-serif text-3xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        <div className="mt-10 overflow-hidden border border-ink/10">
          <video
            ref={videoRef}
            poster={poster}
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="none"
            aria-label={alt}
            className="aspect-[4/3] w-full object-cover md:aspect-[16/9]"
          >
            {video.webm ? <source src={video.webm} type="video/webm" /> : null}
            <source src={video.mp4} type="video/mp4" />
          </video>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/60">{caption}</p>
      </div>
    </section>
  );
}
