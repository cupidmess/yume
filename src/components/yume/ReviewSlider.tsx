import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GOOGLE_RATING, REVIEWS } from "@/data/content";

const DESKTOP_PER_PAGE = 3;

/** Reviews per page: three side by side on md and up, one at a time below. */
function usePerPage() {
  const [perPage, setPerPage] = useState(DESKTOP_PER_PAGE);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerPage(mq.matches ? DESKTOP_PER_PAGE : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return perPage;
}

export function ReviewSlider() {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const groups: { name: string; text: string }[][] = [];
    for (let i = 0; i < REVIEWS.length; i += perPage) {
      groups.push(REVIEWS.slice(i, i + perPage));
    }
    return groups;
  }, [perPage]);

  // Keep the index valid when the layout switches between one and three a page.
  useEffect(() => {
    if (page > pages.length - 1) setPage(0);
  }, [page, pages.length]);

  const go = (dir: number) => setPage((p) => (p + dir + pages.length) % pages.length);

  return (
    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl" data-reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-ink/50">Guest Stories</p>
        <h2 className="mt-4 font-yume-serif text-3xl tracking-tight md:text-5xl">
          What guests say.
        </h2>
        <div className="mt-6 flex items-center gap-2 text-sm text-ink/70">
          <span className="flex text-peach">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
          <span>
            {GOOGLE_RATING.score} on {GOOGLE_RATING.source}
          </span>
        </div>

        {/* Slider: one page of reviews visible at a time, sliding sideways. */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((group, i) => (
              <div
                key={`${perPage}-${i}`}
                aria-hidden={i !== page}
                className="grid w-full shrink-0 gap-6 md:grid-cols-3"
              >
                {group.map((review) => (
                
<a
  key={review.name}
  href={review.sourceUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-full flex-col border border-ink/10 p-8 text-inherit no-underline transition-colors hover:border-ink/30 cursor-pointer"
>

                    <span className="flex text-peach">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </span>
                    <blockquote className="mt-5 flex-1 font-yume-serif text-lg leading-relaxed">
                      “{review.text}”
                    </blockquote>
                    <figcaption className="mt-6 text-[11px] uppercase tracking-[0.25em] text-ink/50">
                      {review.name} · Google review
                    </figcaption>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls: arrow, dots, arrow. */}
        <div className="mt-10 flex items-center justify-center gap-6 border-t border-ink/10 pt-8 md:gap-10">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous reviews"
            className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink/70 transition-colors hover:border-ink/50 hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-3">
            {pages.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Show reviews ${i + 1} of ${pages.length}`}
                aria-current={i === page}
                className={`h-2 transition-all duration-300 motion-reduce:transition-none ${
                  i === page ? "w-7 bg-sage" : "w-2 bg-ink/30 hover:bg-ink/55"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next reviews"
            className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink/70 transition-colors hover:border-ink/50 hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
