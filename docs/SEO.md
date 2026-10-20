# Yume Resort: SEO plan

What is built into the site, which keywords each page targets, and what to do next in Google Search Console, Google Analytics and Google Business Profile.

> **Canonical domain:** `https://www.theyumeresort.com` (`SEO.siteUrl` in `src/data/content.ts`). Canonicals, the sitemap, Open Graph URLs, structured data and `robots.txt` all read from it. Any other host gets `Disallow: /` in `robots.txt`.

---

## 1. What is in the code

| Piece | Where | Notes |
| --- | --- | --- |
| Titles, descriptions, share images | `SEO.pages` in `src/data/content.ts` | One entry per page. Edit copy here only. |
| Head tags | `seoHead()` in `src/lib/seo.ts` | Title, description, canonical, Open Graph, Twitter card, JSON-LD. |
| Structured data | `src/lib/seo.ts` | `Resort` (home), `BreadcrumbList` (all interior pages), `EventVenue` (weddings), `Restaurant` (dine), `SportsActivityLocation` (turf), `FAQPage` (stay, weddings, dine, pool, turf, contact). |
| FAQ sections | `FaqSection` in `src/components/yume/InteriorPage.tsx` | FAQ copy lives under `faqs` in `STAY`, `WEDDINGS`, `EXPERIENCES.*` and `CONTACT`. The visible FAQ and the schema come from the same data, so they always match. |
| Sitemap | `/sitemap.xml` (`src/routes/sitemap[.]xml.ts`) | Generated from `SEO.pages`, with one image per page. |
| Robots | `/robots.txt` (`src/routes/robots[.]txt.ts`) | Allows crawling only on the `SEO.siteUrl` host. Preview and lovable.app copies get `Disallow: /`. |
| GA4 + Search Console tag | `src/lib/analytics.ts` | Off until the env vars below are set. |
| Conversion events | `src/lib/analytics.ts`, `ContactForm.tsx` | `whatsapp_click`, `phone_click`, `email_click`, `generate_lead` (enquiry form). |

**To add a new page:** add an entry to `SEO.pages`, then use `head: () => seoHead("yourKey", [...])` in the route. It is added to the sitemap automatically.

---

## 2. Keyword map

Search volumes below are estimates based on how people search for resorts around Mumbai. Check them in Google Keyword Planner (free with a Google Ads account), then replace the estimates with real numbers from Search Console after 4 to 8 weeks.

Each page has one **primary** keyword (used in the title and description), plus **secondary** keywords to work into headings, intro copy and FAQs.

### Home `/`
- **Primary:** resort in Badlapur
- **Secondary:** Yume Resort, Yume Resort Badlapur, riverside resort near Mumbai, resort near Thane, weekend getaway near Mumbai, resort near Barvi Dam, resort near Badlapur station, resort in Sonivali
- **Intent:** finding a place to go, comparing options

### Stay `/stay`
- **Primary:** resort rooms in Badlapur / resort stay near Mumbai
- **Secondary:** couple friendly resort near Mumbai, resort with swimming pool near Thane, family resort near Mumbai, group stay resort Badlapur, budget resort near Mumbai, overnight stay near Kalyan, resort packages with meals near Mumbai
- **Intent:** ready to book. Prices in the title (from ₹4,999) help people choose Yume in the search results.

### Weddings & Events `/weddings-events`
- **Primary:** wedding venue in Badlapur
- **Secondary:** destination wedding near Mumbai, riverside wedding venue Maharashtra, lawn for wedding in Badlapur, wedding resort near Thane, haldi mehendi venue near Kalyan, wedding packages near Mumbai, small wedding venue near Mumbai (100 guests), reception lawn Badlapur, birthday party venue Badlapur, corporate event venue near Mumbai
- **Intent:** high value, long research period. Mentioning price ("from ₹1.45 lakh") in results filters out people outside the budget.

### Pool `/pool`
- **Primary:** day picnic resort near Badlapur
- **Secondary:** one day picnic near Mumbai, swimming pool in Badlapur, day outing resort near Thane, picnic spot near Badlapur, water day out near Kalyan, school/office picnic near Mumbai
- **Intent:** planning a day out, mostly searched on phones on Thursday to Saturday. **Publishing day picnic rates would improve this page a lot**; "contact us for rates" loses clicks to competitors who show prices.

### Turf `/turf`
- **Primary:** cricket turf in Badlapur
- **Secondary:** box cricket in Badlapur, turf booking Badlapur, cricket turf near Ambernath, turf near Kalyan, night cricket turf (if floodlit; confirm first), corporate cricket match venue
- **Intent:** local, ready to book, very mobile.

### Dine `/dine`
- **Primary:** restaurant in Badlapur
- **Secondary:** family restaurant Badlapur, restaurant near Barvi Dam, riverside restaurant near Mumbai, resort lunch near Thane, Sunday lunch outing near Badlapur
- **Intent:** local. Ranking for this depends mostly on Google Business Profile and Google Maps, not the website.

### Contact `/contact`
- **Primary:** Yume Resort contact number
- **Secondary:** Yume Resort address, how to reach Yume Resort Badlapur, Yume Resort location
- **Intent:** people already looking for Yume by name. This page should rank first for these.

### Gallery `/gallery`
- **Primary:** Yume Resort photos
- **Secondary:** Yume Resort images, Yume Resort Badlapur pictures

### Keywords to avoid
- Generic "resort in Lonavala / Karjat" terms. They get a lot of searches but the people searching want those places. Write a comparison page instead (see section 4).
- Do not repeat keywords in image alt text or hidden text. Alt text should describe the image.
- Ignore the meta keywords tag. Google does not use it, so it has been left out on purpose.

---

## 3. On-page fixes still to do (need a content decision)

1. **H1s don't contain keywords.** Every H1 is a brand line ("Wake slowly, close to the river."). Without changing the look, either:
   - put the location in the eyebrow text, e.g. "Rooms in Badlapur" instead of "Stay at Yume", or
   - change the hero subtitle to carry the keyword, e.g. "Riverside rooms in Sonivali, Badlapur, 3 km from the station."
2. **The Stay page is missing its amenities and policies sections.** A placeholder comment replaced them in `src/routes/_yume.stay.tsx` (the old code is still there, commented out, at the top of the file). That text is useful to search engines and to guests. The FAQ section now covers check-in times, children and cancellation, but the full sections should come back.
3. **Placeholders that hurt trust:** "Wi-Fi availability to be confirmed", plus several "please confirm …" facts on Pool and Turf. Confirm the real details with the resort and replace these. Real details rank better and turn more visitors into enquiries.
4. **Wedding venue capacities** are marked TODO in `content.ts`. Confirm them, then add `maximumAttendeeCapacity` to the `EventVenue` schema.
5. **Exact resort coordinates.** The coordinates on the Contact page point at Barvi Dam, so they are not in the schema. Get the resort's own pin from its Google Business Profile and add `geo` to `resortSchema()`.
6. **Image file names and sizes.** Many images are 1–3 MB PNG files with names like `21_20261017_011101_0001.png`. Convert them to WebP or AVIF and rename them (e.g. `deluxe-room-balcony-badlapur.webp`). This helps page speed (Core Web Vitals) and Google Images.

---

## 4. Content roadmap (new pages, in priority order)

| # | Page | Target keywords | Why |
| --- | --- | --- | --- |
| 1 | `/corporate-outings` | corporate outing near Mumbai, team offsite resort near Thane, office picnic Badlapur | Reviews already praise Yume for office outings. Companies spend a lot, and there is less competition for these terms. |
| 2 | `/day-picnic` (or expand `/pool`) | one day picnic package near Mumbai with lunch | Large search volume. Needs published rates. |
| 3 | `/weddings-events/haldi-mehendi` | haldi venue near Kalyan, mehendi lawn Badlapur | Smaller events booked more often, and a way into full wedding bookings. |
| 4 | `/birthday-party-venue` | birthday party lawn Badlapur, private pool party near Thane | Local demand that comes back every year. |
| 5 | `/guides/things-to-do-near-barvi-dam` | Barvi Dam, places to visit near Badlapur, monsoon getaway near Mumbai | Brings in people early in their search and earns links. Update it every monsoon season. |
| 6 | `/guides/resorts-near-mumbai-under-2-hours` | weekend getaway near Mumbai, resort near Mumbai within 100 km | An honest comparison that places Yume among Karjat/Lonavala options for people who want a shorter drive. |

Each new page should have its own `SEO.pages` entry, a keyword-bearing H1, 3–5 FAQs, real photos and a WhatsApp CTA.

---

## 5. Google Search Console: next steps

1. **Finish the domain first.** Set `SEO.siteUrl`, deploy, and make sure one version is the main one. All other versions (`http`, `www`/non-www, the lovable.app URL) should 301-redirect to it. Set this up in your hosting / Lovable custom-domain settings.
2. **Add a Domain property** at <https://search.google.com/search-console>, then choose "Domain" and enter `theyumeresort.com`.
   - Verify with the **DNS TXT record** Google gives you, added at the domain registrar. This is the recommended method because it covers every subdomain and protocol.
   - Alternative: a URL-prefix property with the HTML tag method. Copy only the `content="..."` value into the `VITE_GSC_VERIFICATION` env var and redeploy. The site then outputs `<meta name="google-site-verification">`.
3. **Submit the sitemap:** Sitemaps → enter `sitemap.xml` → Submit. Check that the status changes to "Success" and that 8 URLs are discovered.
4. **Request indexing** for the home, `/stay` and `/weddings-events` pages using URL Inspection → "Request indexing". Do this for the most important pages only; the sitemap takes care of the rest.
5. **Check structured data:** after about a week, open Enhancements → Breadcrumbs and check for errors. Test any page at <https://search.google.com/test/rich-results> and <https://validator.schema.org>.
   - Note: since 2023 Google shows FAQ rich results only for government and health sites. The FAQ markup is still worth having for AI Overviews, Bing and voice search, and the visible FAQ text helps rankings anyway.
6. **Check Page experience / Core Web Vitals** once there is enough traffic (about 28 days). The large PNG images (section 3, item 6) are the most likely reason for a slow LCP.
7. **Monthly routine:** in Performance → Search results, filter by page, then:
   - look for queries with many impressions but a click rate under 2%, and rewrite that page's title and description in `SEO.pages`
   - look for queries ranking in positions 8–20, and add a section or FAQ that answers them on the matching page
   - keep a list of new query themes; they suggest the next pages to create (section 4)
8. **Link Search Console to GA4** (Admin → Product links → Search Console links) so search queries show up next to conversions.

---

## 6. Google Analytics 4: next steps

1. **Create the property:** <https://analytics.google.com> → Admin → Create property ("Yume Resort", time zone India, currency INR) → Web data stream for the live domain.
2. **Turn it on in the site:** copy the Measurement ID (`G-XXXXXXXXXX`) into the `VITE_GA_MEASUREMENT_ID` env var (Lovable: Project settings → Environment, or a `.env` file locally) and redeploy. Check in GA → Reports → Realtime while you browse the site.
3. **Keep Enhanced measurement on** (it is on by default). It records page views when visitors move between pages, plus scrolls and outbound clicks.
4. **Mark conversions:** Admin → Events. Once each event has fired at least once, turn on **Mark as key event** for:
   - `whatsapp_click`, which fires on every WhatsApp button (the main way people enquire)
   - `phone_click`
   - `generate_lead`, which fires when the enquiry form is submitted (it has an `enquiry_type` parameter: Stay, Wedding, Pool day, …)
   - `email_click` (optional)
5. **Register custom dimensions:** Admin → Custom definitions → create event-scoped dimensions for `enquiry_type`, `link_text` and `page_path`. This lets reports show *which* page and *which* button produced each enquiry.
6. **Data retention:** Admin → Data retention → set it to 14 months (the default is 2).
7. **Exclude internal traffic:** Admin → Data streams → Configure tag settings → Define internal traffic. Add the resort's and agency's office IPs.
8. **Consent:** if you run ads aimed at the EU, or want to follow India's DPDP Act closely, add a consent banner with Google Consent Mode v2 before turning on ads features.
9. **Reports to save:** Landing page × Session source/medium × Key events. This shows which pages and channels (Google organic, Instagram, Maps) bring in WhatsApp enquiries.

---

## 7. Off-site work (has the most effect on local rankings)

For "resort in Badlapur" and "near me" searches, **Google Business Profile matters more than the website.**

1. **Claim and verify the Google Business Profile.** Primary category: *Resort hotel*. Secondary categories: *Wedding venue*, *Banquet hall*, *Restaurant*, *Cricket ground*, *Swimming pool*.
2. Use the website URL with UTM tags so GA4 can tell Maps traffic apart from other traffic: `https://www.theyumeresort.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
3. Add 30+ real photos, the hours for each part of the resort, the room prices and the amenity attributes. Post weekly updates (offers, monsoon, wedding season).
4. **Reviews:** after every stay or event, send a WhatsApp message with the direct review link. Reply to every review, mentioning the service naturally ("Thank you for choosing us for your haldi by the river…").
5. **Keep the name, address and phone (NAP) identical everywhere:** website footer, Google Business Profile, Instagram bio, JustDial, Sulekha, WedMeGood, WeddingWire India, ShaadiSaga, MakeMyTrip/Goibibo, Booking.com, TripAdvisor. Use exactly *"Yume Resort, Sonavali Gaon, near Trishul Golden Ville, Barvi Dam Road, Badlapur West, Maharashtra 421503"* and *+91 70280 43300* (also update `sameAs` in `resortSchema()` as profiles go live).
6. **Links from other sites:** local news and Thane/Kalyan lifestyle blogs, wedding photographers' portfolio pages (ask them to credit and link the venue), and Mumbai weekend-getaway roundups.

---

## 8. 90-day checklist

- [ ] Week 1: set the domain + `SEO.siteUrl`, set up redirects, verify Search Console, submit the sitemap, set the GA4 ID, mark key events
- [ ] Week 1: claim and optimise the Google Business Profile
- [ ] Week 2: restore the Stay amenities/policies, replace "please confirm" placeholders, publish day picnic rates
- [ ] Week 3: keyword-bearing eyebrows/subtitles, rename and compress images
- [ ] Weeks 4–6: build `/corporate-outings` and `/day-picnic`
- [ ] Weeks 6–8: list the business on directories (consistent name, address, phone); start the review-request routine
- [ ] Week 8: first Search Console review (section 5, step 7); rewrite titles that get few clicks
- [ ] Weeks 8–12: Barvi Dam guide + haldi/mehendi page; reach out for links
