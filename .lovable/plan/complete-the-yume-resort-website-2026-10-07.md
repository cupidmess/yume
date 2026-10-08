# Complete the Yume Resort website

## What I’ll build
- Replace the placeholder Stay, Weddings & Events, Dine, Pool, Turf, Gallery, and Contact pages with complete, distinct page designs.
- Keep the existing editorial Yume look: photography-led layouts, cream and ink surfaces, Fraunces headings, fine dividers, and restrained motion.
- Give every page tailored copy, practical details, clear calls to WhatsApp or phone, and unique search/social metadata.
- Add a full Contact enquiry form with client-side validation. Valid submissions will open WhatsApp with the visitor’s details safely encoded; email remains available as a fallback.
- Add reusable page sections for interior page headers, fact lists, enquiry bands, and image galleries so all pages stay visually consistent.

## Page content
- **Stay:** room and villa options, occupancy/bed details, amenities, policies, and availability enquiries.
- **Weddings & Events:** venue spaces, packages, services, testimonials, and date-check enquiry.
- **Dine:** cuisine, hours, seating, facilities, gallery, and table reservation.
- **Pool:** day-pass details, hours, facilities, rules, gallery, and pool-day enquiry.
- **Turf:** sports, slot hours, facilities, rules, gallery, and slot booking.
- **Gallery:** category filters and an accessible image lightbox.
- **Contact:** contact details, directions from nearby cities, map area, and validated enquiry form.

## Content and placeholders
- Extend the single Yume content file so page text, facts, prices, policies, and image references remain easy to update.
- Keep unknown operational details clearly marked as `[ADD]` rather than inventing prices, timings, capacities, an email, or a full street address.
- Reuse the existing Yume photography across the pages until real resort photos are supplied.

## Technical details
- Use the existing TanStack routes and valid typed links.
- Validate enquiry fields with Zod before constructing the WhatsApp message; no visitor data will be stored.
- Add page-specific title, description, Open Graph, Twitter metadata, and EventVenue structured data where relevant.
- Verify the full site on desktop and mobile, including navigation, gallery controls, form errors, and WhatsApp link generation.
