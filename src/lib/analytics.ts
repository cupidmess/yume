// Google Analytics 4. Nothing loads until VITE_GA_MEASUREMENT_ID is set
// (e.g. G-XXXXXXXXXX). GA4's enhanced measurement records page views on
// client-side navigation, so routes need no extra wiring.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GSC_TOKEN = import.meta.env.VITE_GSC_VERIFICATION as string | undefined;

export const analyticsMeta = GSC_TOKEN
  ? [{ name: "google-site-verification", content: GSC_TOKEN }]
  : [];

export const analyticsScripts = GA_ID
  ? [
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
      },
    ]
  : [];

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", name, params);
}

/**
 * Enquiries happen off-site (WhatsApp, phone, email), so record those link
 * clicks as GA4 events. Mark them as key events in GA4 to count conversions.
 */
export function trackContactClicks() {
  const onClick = (event: MouseEvent) => {
    const link = (event.target as Element | null)?.closest?.("a[href]");
    if (!(link instanceof HTMLAnchorElement)) return;
    const href = link.href;
    const name = href.startsWith("https://wa.me/")
      ? "whatsapp_click"
      : href.startsWith("tel:")
        ? "phone_click"
        : href.startsWith("mailto:")
          ? "email_click"
          : undefined;
    if (!name) return;
    trackEvent(name, {
      link_text: link.textContent?.trim().slice(0, 100),
      page_path: window.location.pathname,
    });
  };
  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
