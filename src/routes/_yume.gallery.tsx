import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GALLERY } from "@/data/content";
import { seoHead } from "@/lib/seo";

const filters = ["All", "Stay", "Pool", "Turf", "Dine", "Weddings"] as const;

export const Route = createFileRoute("/_yume/gallery")({
  head: () => seoHead("gallery"),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((image) => image.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % images.length);
      if (event.key === "ArrowLeft")
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, images.length]);

  return (
    <main>
      <section className="bg-ink px-6 pb-16 pt-36 text-cream md:px-10 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/55">Gallery</p>
          <h1 className="mt-4 max-w-3xl font-yume-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Moments from around Yume.
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-cream/65">
            A glimpse of slow stays, sunny afternoons, shared meals, games and celebrations by the
            river.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2" aria-label="Gallery filters">
            {filters.map((item) => (
              <Button
                key={item}
                type="button"
                variant="ghost"
                onClick={() => {
                  setFilter(item);
                  setActiveIndex(null);
                }}
                aria-pressed={filter === item}
                className={`h-9 border px-4 text-xs uppercase tracking-[0.16em] shadow-none ${filter === item ? "border-ink bg-ink text-cream hover:bg-ink hover:text-cream" : "border-ink/15 bg-transparent text-ink hover:bg-ink/5"}`}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-10 columns-2 gap-2 md:columns-3 lg:columns-4">
            {images.map((image, index) => (
              <Button
                key={`${image.src}-${index}`}
                type="button"
                variant="ghost"
                onClick={() => setActiveIndex(index)}
                className="group mb-2 block h-auto w-full cursor-zoom-in overflow-hidden rounded-none p-0 shadow-none"
                aria-label={`Open image: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${index % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                />
              </Button>
            ))}
          </div>
        </div>
      </section>
      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/95 p-4 text-cream"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setActiveIndex(null)}
            aria-label="Close photo"
            className="absolute right-5 top-5 text-cream hover:bg-cream/10 hover:text-cream"
          >
            <X />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-cream hover:bg-cream/10 hover:text-cream md:left-8"
          >
            <ChevronLeft />
          </Button>
          <figure className="max-w-5xl">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="max-h-[78svh] max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/60">
              {images[activeIndex].alt}
            </figcaption>
          </figure>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-cream hover:bg-cream/10 hover:text-cream md:right-8"
          >
            <ChevronRight />
          </Button>
        </div>
      ) : null}
    </main>
  );
}
