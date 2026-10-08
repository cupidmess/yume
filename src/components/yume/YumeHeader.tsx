import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, WA_MESSAGES, waLink } from "@/data/content";
import { Button } from "@/components/ui/button";

export function YumeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = scrolled
    ? "text-ink hover:opacity-70"
    : "text-cream hover:opacity-80";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-cream text-ink" : "bg-transparent text-cream"
        }`}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:px-10 lg:flex lg:justify-between">
          <div className="flex min-w-0 items-center">
            <Link
              to="/"
              className="font-yume-serif text-2xl tracking-tight"
              resetScroll={false}
            >
              yume<span className="text-peach">.</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) =>
              "children" in item ? (
                <div key={item.label} className="group relative">
                  <Button
                    type="button"
                    variant="ghost"
                    className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] transition-opacity ${linkClass}`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-44 rounded-md border border-ink/10 bg-cream p-2 text-ink">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2.5 text-sm tracking-wide hover:bg-ink/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-xs uppercase tracking-[0.2em] transition-opacity ${linkClass}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noreferrer"
              className={`hidden rounded-md px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors md:inline-flex ${
                scrolled
                  ? "bg-ink text-cream hover:bg-sage"
                  : "bg-cream text-ink hover:bg-peach"
              }`}
            >
              Enquire
            </a>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink text-cream transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-yume-serif text-2xl tracking-tight">
            yume<span className="text-peach">.</span>
          </span>
          <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream hover:bg-cream/10 hover:text-cream">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-5 px-6">
          {NAV.flatMap((item) =>
            "children" in item
              ? item.children
              : [{ label: item.label, to: item.to }],
          ).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="font-yume-serif text-4xl tracking-tight text-cream hover:text-peach"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-cream/15 px-6 py-6 text-sm text-cream/70">
          <p>Sonivali, Badlapur</p>
          <a href="tel:+917028043300" className="mt-1 block">
            +91 70280 43300
          </a>
        </div>
      </div>
    </>
  );
}
