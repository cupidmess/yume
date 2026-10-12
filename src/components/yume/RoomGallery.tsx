import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Photo = { src: string; label: string };

export function RoomGallery({ name, photos }: { name: string; photos: Photo[] }) {
  const [active, setActive] = useState(0);
  const go = (dir: number) => setActive((i) => (i + dir + photos.length) % photos.length);
  const btn =
    "absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[4px] bg-cream/90 text-ink opacity-100 transition-opacity duration-300 hover:bg-cream md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100";

  return (
    <div>
      <div className="group relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
        {photos.map((p, i) => (
          <img
            key={p.src + i}
            src={p.src}
            alt={`${name} — ${p.label}`}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className={`${btn} left-3`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className={`${btn} right-3`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <p className="absolute bottom-3 left-3 bg-ink/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-cream">
          {photos[active].label} · {active + 1}/{photos.length}
        </p>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-2">
        {photos.map((p, i) => (
          <button
            key={p.src + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${p.label}`}
            aria-current={i === active}
            className={`aspect-square overflow-hidden transition-opacity ${i === active ? "opacity-100 ring-1 ring-ink ring-offset-2 ring-offset-cream" : "opacity-55 hover:opacity-100"}`}
          >
            <img src={p.src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
