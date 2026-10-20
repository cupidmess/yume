import { HOTEL_POLICIES, SEO, STAY, WEDDINGS, site, type SeoPageKey } from "@/data/content";

type JsonLd = Record<string, unknown>;
export type Faq = { question: string; answer: string };

export const RESORT_ID = `${SEO.siteUrl}/#resort`;

export function absoluteUrl(path: string) {
  return new URL(path, `${SEO.siteUrl}/`).toString();
}

// Escape "<" so page copy can never close the surrounding <script> tag.
function jsonLdScript(data: JsonLd) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

/**
 * Head tags for a Yume page: title, description, canonical, Open Graph,
 * Twitter card and JSON-LD (breadcrumbs are added for interior pages).
 */
export function seoHead(key: SeoPageKey, jsonLd: JsonLd[] = []) {
  const page = SEO.pages[key];
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image);
  const schemas = key === "home" ? jsonLd : [breadcrumbSchema(key), ...jsonLd];

  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: SEO.locale },
      { property: "og:url", content: url },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: schemas.map(jsonLdScript),
  };
}

export function breadcrumbSchema(key: SeoPageKey): JsonLd {
  const page = SEO.pages[key];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SEO.pages.home.label, item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: page.label, item: absoluteUrl(page.path) },
    ],
  };
}

export function faqSchema(faqs: ReadonlyArray<Faq>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Gives Google the site name shown above results ("Yume Resort", not the domain). */
export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: ["Yume Resort Badlapur", "The Yume Resort"],
    url: absoluteUrl("/"),
    publisher: { "@id": RESORT_ID },
  };
}

const postalAddress ={ "@type": "PostalAddress", ...SEO.address };

/** The resort entity. Other page schemas point back to it by @id. */
export function resortSchema(): JsonLd {
  const toTime = (value: string) => {
    const match = /(\d{1,2}):(\d{2})\s*(AM|PM)/i.exec(value);
    if (!match) return undefined;
    const hours = (Number(match[1]) % 12) + (match[3].toUpperCase() === "PM" ? 12 : 0);
    return `${String(hours).padStart(2, "0")}:${match[2]}`;
  };
  const policy = (label: string) => STAY.policies.find((item) => item.label === label)?.value ?? "";

  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    "@id": RESORT_ID,
    name: site.name,
    slogan: site.tagline,
    description: SEO.pages.home.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon-512.png"),
    image: [absoluteUrl(SEO.pages.home.image), absoluteUrl(SEO.pages.stay.image)],
    telephone: site.phones.map((phone) => phone.href),
    email: site.email,
    address: postalAddress,
    hasMap: SEO.mapsUrl,
    sameAs: [site.instagram.url],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    checkinTime: toTime(policy("Check-in")),
    checkoutTime: toTime(policy("Check-out")),
    amenityFeature: [
      ...HOTEL_POLICIES.amenitiesAndTimings.map((item) => item.amenity),
      ...WEDDINGS.venues.map((venue) => venue.name),
      "Parking",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  };
}

export function venueSchema(input: {
  type: string;
  name: string;
  path: string;
  description: string;
  image: string;
  extra?: JsonLd;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": input.type,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: absoluteUrl(input.image),
    telephone: site.phones[0].href,
    address: postalAddress,
    containedInPlace: { "@id": RESORT_ID },
    ...input.extra,
  };
}
