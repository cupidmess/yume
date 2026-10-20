// import { createFileRoute } from "@tanstack/react-router";
// import { ArrowRight } from "lucide-react";
// import {
//   ContactStrip,
//   EnquiryBand,
//   Facts,
//   InteriorHero,
//   PageShell,
//   SectionHeading,
// } from "@/components/yume/InteriorPage";
// import { RoomGallery } from "@/components/yume/RoomGallery";
// import { STAY, WA_MESSAGES, waLink } from "@/data/content";

// const description =
//   "Rooms, amenities and stay enquiries at Yume Resort, Sonivali, Badlapur.";
// export const Route = createFileRoute("/_yume/stay")({
//   head: () => ({
//     meta: [
//       { title: "Stay - Yume Resort" },
//       { name: "description", content: description },
//       { property: "og:title", content: "Stay - Yume Resort" },
//       { property: "og:description", content: description },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: StayPage,
// });

// function StayPage() {
//   return (
//     <PageShell>
//       <InteriorHero
//         {...STAY.hero}
//         image={STAY.rooms[0].image}
//         imageAlt="A restful stay at Yume Resort"
//       />
//       <section className="px-6 py-20 md:px-10 md:py-28">
//         <div className="mx-auto max-w-7xl">
//           <SectionHeading
//             eyebrow="Rooms"
//             title="A comfortable place to pause."
//             body={STAY.intro}
//           />
//           <div className="mt-14 space-y-20">
//             {STAY.rooms.map((room, index) => (
//               <article key={room.name} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
//                 <div className={index % 2 ? "md:order-2" : ""}>
//                   <RoomGallery name={room.name} photos={room.gallery} />
//                 </div>
//                 <div>
//                   <p className="text-[11px] uppercase tracking-[0.25em] text-ink/45">
//                     Stay {String(index + 1).padStart(2, "0")}
//                   </p>
//                   <h3 className="mt-3 font-yume-serif text-3xl tracking-tight md:text-4xl">
//                     {room.name}
//                   </h3>
//                   <p className="mt-5 max-w-md leading-relaxed text-ink/65">{room.description}</p>
//                   <dl className="mt-7 grid grid-cols-2 gap-5 border-y border-ink/10 py-5 text-sm">
//                     <div>
//                       <dt className="text-ink/45">Occupancy</dt>
//                       <dd className="mt-1">{room.occupancy}</dd>
//                     </div>
//                     <div>
//                       <dt className="text-ink/45">Bed</dt>
//                       <dd className="mt-1">{room.bed}</dd>
//                     </div>
//                   </dl>
//                   <p className="mt-6 font-yume-serif text-2xl">{room.price}</p>
//                   <a
//                     href={waLink(
//                       `Hi Yume! I'd like to check availability for the ${room.name}. Could you share rates and available dates?`,
//                     )}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] underline decoration-ink/20 underline-offset-8 hover:decoration-ink"
//                   >
//                     Check availability
//                     <ArrowRight className="h-4 w-4" />
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="bg-ink px-6 py-20 text-cream md:px-10 md:py-24">
//         <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
//           <div>
//             <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">
//               Included in your stay
//             </p>
//             <h2 className="mt-4 font-yume-serif text-3xl tracking-tight md:text-5xl">
//               The essentials, thoughtfully covered.
//             </h2>
//           </div>
//           <ul className="grid grid-cols-2 gap-x-8">
//             {STAY.amenities.map((item) => (
//               <li key={item} className="border-b border-cream/15 py-4 text-sm text-cream/75">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//       <section className="px-6 py-20 md:px-10 md:py-28">
//         <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
//           <SectionHeading
//             eyebrow="Good to know"
//             title="Stay policies."
//             body="We’ll confirm the latest details with your booking."
//           />
//           <Facts items={STAY.policies} />
//         </div>
//       </section>
//       <ContactStrip />
//       <EnquiryBand
//         title="Make Yume your next escape."
//         body="Tell us your preferred dates, room choice and number of guests. We’ll reply with availability and the latest rates."
//         message={WA_MESSAGES.enquireStay}
//         label="Check availability"
//       />
//     </PageShell>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mainstay from "@/assets/yume/mainstay.jpg"
import {
  ContactStrip,
  EnquiryBand,
  Facts,
  InteriorHero,
  PageShell,
  SectionHeading,
} from "@/components/yume/InteriorPage";
import { RoomGallery } from "@/components/yume/RoomGallery";
import { RoomPackages } from "@/components/yume/RoomPackages";
import { RoomCompare } from "@/components/yume/RoomCompare";
import { STAY, WA_MESSAGES, waLink } from "@/data/content";

const description =
  "Rooms, amenities and stay enquiries at Yume Resort, Sonivali, Badlapur.";
export const Route = createFileRoute("/_yume/stay")({
  head: () => ({
    meta: [
      { title: "Stay - Yume Resort" },
      { name: "description", content: description },
      { property: "og:title", content: "Stay - Yume Resort" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StayPage,
});

function StayPage() {
  return (
    <PageShell>
      <InteriorHero
        {...STAY.hero}
        image={mainstay}
        imageAlt="A restful stay at Yume Resort"
      />
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Rooms"
            title="A comfortable place to pause."
            body={STAY.intro}
          />
          <a
            href="#compare"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] underline decoration-ink/20 underline-offset-8 hover:decoration-ink"
          >
            {STAY.tariff.compare.link}
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-14 space-y-20">
            {STAY.rooms.map((room, index) => (
              <article key={room.name} className="grid items-start gap-8 md:grid-cols-2 md:gap-14">
                <div className={index % 2 ? "md:order-2" : ""}>
                  <RoomGallery name={room.name} photos={room.gallery} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-ink/45">
                    Stay {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-yume-serif text-3xl tracking-tight md:text-4xl">
                    {room.name}
                  </h3>
                  <p className="mt-5 max-w-md leading-relaxed text-ink/65">{room.description}</p>
                  {room.note && (
                    <p className="mt-4 max-w-md border-l-2 border-peach pl-3 text-sm leading-relaxed text-ink/70">
                      {room.note}
                    </p>
                  )}
                  <RoomPackages room={room} />
                  <a
                    href={waLink(
                      `Hi Yume! I'd like to check availability for the ${room.name}. Could you share rates and available dates?`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] underline decoration-ink/20 underline-offset-8 hover:decoration-ink"
                  >
                    Check availability
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <RoomCompare />
      {/* ...rest of the file stays exactly as in your original:
          amenities section, policies section, ContactStrip, EnquiryBand */}
    </PageShell>
  );
}