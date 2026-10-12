import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { NAV, site, WA_MESSAGES, waLink } from "@/data/content";

export function YumeFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div>
          <p className="font-yume-serif text-3xl tracking-tight">
            yume<span className="text-peach">.</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">{site.tagline}</p>
          <ul className="mt-6 flex items-center gap-3">
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Yume Resort on Instagram"
                className="grid h-9 w-9 place-items-center rounded-[5px] border border-cream/20 text-cream/70 transition-colors hover:border-peach hover:text-peach"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phones[0].href}`}
                aria-label={`Call Yume Resort on ${site.phones[0].display}`}
                className="grid h-9 w-9 place-items-center rounded-[5px] border border-cream/20 text-cream/70 transition-colors hover:border-peach hover:text-peach"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email Yume Resort"
                className="grid h-9 w-9 place-items-center rounded-[5px] border border-cream/20 text-cream/70 transition-colors hover:border-peach hover:text-peach"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Visit</p>
          <p className="mt-4 text-sm leading-relaxed">{site.address}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Call & Write</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={`tel:${phone.href}`} className="hover:text-peach">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-peach">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.flatMap((item) =>
              "children" in item ? item.children : [{ label: item.label, to: item.to }],
            ).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-peach">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:text-peach"
            >
              {site.instagram.handle}
            </a>
            {site.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-cream shadow-lg md:hidden"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
