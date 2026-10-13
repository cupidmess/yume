// ============================================================
// Yume Resort - central content file.
// Edit all copy, contact details and image references here;
// components read from this file so content can be updated
// without touching layout code.
//
// TODO (later): swap the [ADD] placeholders for real values,
// and replace placeholder reviews / Instagram tiles with live
// data. The enquiry CTAs are single swap-points: when a booking
// engine + payments are added, repoint waLink(...) calls only.
// ============================================================

import heroImg from "@/assets/yume/hero.jpg";
import storyImg from "@/assets/yume/story.jpg";
import stayImg from "@/assets/yume/stay.jpg";
// import del3 from "@/assets/yume/del3.jpg"
// import delbed from "@/assets/yume/delbed.jpg"
// import deluxbalc from "@/assets/yume/deluxbalc.jpg"
// import sup from "@/assets/yume/sup.jpg"
// import superior from "@/assets/yume/superior.jpg"
// import del2 from "@/assets/yume/del2.jpg"
import dineImg from "@/assets/yume/dine.jpg";
import poolImg from "@/assets/yume/pool.jpg";
import turfImg from "@/assets/yume/turf.jpg";
import weddingsImg from "@/assets/yume/weddings.jpg";
import weddingBandImg from "@/assets/yume/wedding-band.jpg";
import wed from "@/assets/yume/wed.jpg";
import wed2 from "@/assets/yume/wed2.jpg";
import wed3 from "@/assets/yume/wed3.jpg";
import insta1 from "@/assets/yume/insta-1.jpg";
import insta2 from "@/assets/yume/insta-2.jpg";
import insta3 from "@/assets/yume/insta-3.jpg";
import insta4 from "@/assets/yume/insta-4.jpg";
import insta5 from "@/assets/yume/insta-5.jpg";
import insta6 from "@/assets/yume/insta-6.jpg";
import insta7 from "@/assets/yume/insta-7.jpg";
import insta8 from "@/assets/yume/insta-8.jpg";
import insta9 from "@/assets/yume/insta-9.jpg";
import insta10 from "@/assets/yume/insta-10.jpg";
import insta11 from "@/assets/yume/insta-11.jpg";
import insta12 from "@/assets/yume/insta-12.jpg";
import roomBed from "@/assets/yume/room-bed.jpg";
import roomBath from "@/assets/yume/room-bath.jpg";
import roomDesk from "@/assets/yume/room-desk.jpg";
import roomBalcony from "@/assets/yume/room-balcony.jpg";
import turf2 from "@/assets/yume/turf-2.jpg";
import turf3 from "@/assets/yume/turf-3.jpg";

// Placeholder room photos - swap per room with real photography.
const roomPhotos = (main: string) => [
  { src: main, label: "Room" },
  { src: main, label: "Bedroom" },
  { src: roomBath, label: "Washroom" },
  { src: main, label: "Writing table" },
  { src: main, label: "Balcony view" },
  { src: roomDesk, label: "Terrace details" },
];
const deluxePics = (main: string) => [
  { src: main, label: "Room" },
  { src: main, label: "Bedroom" },
  { src: main, label: "Washroom" },
  { src: main, label: "Writing table" },
  { src: roomBalcony, label: "Balcony view" },
  { src: roomDesk, label: "Terrace details" },
];
const superior = (main: string) => [
  { src: main, label: "Room" },
  { src: superior, label: "Bedroom" },
  { src: main, label: "Washroom" },
  { src: main, label: "Writing table" },
  { src: roomBalcony, label: "Balcony view" },
  { src: roomDesk, label: "Terrace details" },
];
export const IMAGES = {
  hero: heroImg,
  story: storyImg,    
  storyVideo: "/yume-story.mp4",
  storyVideoWebm: undefined,
  weddingBand: weddingBandImg,
  stay: stayImg,
  dine: dineImg,
  pool: poolImg,
  turf: turfImg,
  weddings: weddingsImg,
};


export const site = {
  name: "Yume Resort",
  tagline: "A hidden retreat for unforgettable moments.",
  location: "Sonivali, Badlapur",
  address: "Sonavali Gaon (near Trishul Golden Ville and Barvi Dam Road), Badlapur West, Maharashtra 421503.",
  email: "theyumeresort@gmail.com",
  phones: [
    { display: "+91 70280 43300", href: "+917028043300" },
    { display: "+91 70280 53300", href: "+917028053300" },
  ],
  instagram: { handle: "@yume.resort", url: "https://instagram.com/yume.resort" },
  credit: "Website by cupidmess.dev",
};

// WhatsApp deep links (primary number). To use the secondary
// number, change the id below.
const WHATSAPP_ID = "917028043300";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_ID}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Hi Yume! I'd like to know more.",
  enquireStay: "Hi Yume! I'd like to enquire about a stay. Could you share availability?",
  planWedding: "Hi Yume! I'd like to plan a wedding or event. Could you share details?",
  checkDate: "Hi Yume! I'd like to check my date for a wedding / event at the resort.",
  bookTable: "Hi Yume! I'd like to reserve a table.",
  bookSlot: "Hi Yume! I'd like to book a turf slot.",
};

export const STAY = {
  hero: {
    eyebrow: "Stay at Yume",
    title: "Wake slowly, close to the river.",
    intro:
      "Quiet rooms and private villas for unhurried weekends, family time and a night away from the city.",
  },

  intro:
    "Every stay is designed around easy comfort: green views, time by the pool and the freedom to do very little at all.",

  rooms: [
    {
      name: "Deluxe Room (With Balcony)",
      description:
        "A comfortable stay with a private balcony, perfect for couples seeking a relaxing resort escape.",
      occupancy: "2 guests",
      bed: "[ADD bed type]",
      price: "From ₹5,499 / night",
      image: stayImg,
      gallery: roomPhotos(stayImg),
    },
    {
      name: "Deluxe Room (Without Balcony)",
      description:
        "A welcoming and comfortable room for couples looking for a peaceful getaway surrounded by nature.",
      occupancy: "2 guests",
      bed: "[ADD bed type]",
      price: "From ₹4,999 / night",
      image: stayImg,
      gallery: deluxePics(stayImg),
    },
    {
      name: "Superior Room",
      description:
        "A spacious option for families and groups looking to spend a relaxing weekend together.",
      occupancy: "4+ guests",
      bed: "[ADD bed configuration]",
      price: "From ₹2,000 / person",
      image: stayImg,
      gallery: superior(stayImg),
    },
  ],

  amenities: [
    "Swimming pool",
    "On-site restaurant",
    "Air-conditioned rooms",
    "Parking",
    "Garden and river surroundings",
    "Cricket turf",
    "[ADD Wi-Fi details]",
    "[ADD in-room amenities]",
  ],

  policies: [
    {
      label: "Check-in",
      value: "1:00 PM (13:00 hrs)",
    },
    {
      label: "Check-out",
      value: "10:30 AM",
    },
    {
      label: "Children aged 0–7",
      value: "Complimentary stay.",
    },
    {
      label: "Children aged 8–14",
      value: "₹1,200 per child.",
    },
    {
      label: "Guests aged 15 and above",
      value: "Counted as adults and charged accordingly.",
    },
    {
      label: "Pets",
      value: "[ADD pet policy]",
    },
    {
      label: "Cancellation",
      value:
        "Cancellation charges depend on the notice period. Please refer to the cancellation policy.",
    },
    {
      label: "Early check-in and late check-out",
      value:
        "Subject to availability and additional charges as per hotel policy.",
    },
    {
      label: "Early departure",
      value: "One room night's charges apply.",
    },
  ],
};

export const WEDDINGS = {
  hero: {
    eyebrow: "Weddings & Events",
    title: "Say yes to the river.",
    intro:
      "Gather the people you love for a celebration framed by open lawns, water and evening light.",
  },

  intro:
    "From an intimate ceremony to a full wedding weekend, Yume brings venue, stay, dining and celebration into one relaxed destination.",

  venues: [
    {
      name: "Riverside Lawn",
      description:
        "An open-air setting for ceremonies, receptions and sunset celebrations.",
      capacity: "Up to [ADD] guests",
      image: wed,
    },
    {
      name: "Celebration Turf",
      description:
        "A generous flexible space for larger gatherings, stages and dining layouts.",
      capacity: "Up to [ADD] guests",
      image: wed2,
    },
    {
      name: "Indoor Gathering Space",
      description:
        "A sheltered setting for smaller functions and weather-ready plans.",
      capacity: "Up to [ADD] guests",
      image: wed3,
    },
  ],

  packages: [
    {
      name: "The Intimate",
      note: "For close-knit celebrations",
      inclusions: [
        "Venue access",
        "Guest dining setup",
        "Basic lighting",
        "[ADD inclusions]",
      ],
      price: "From ₹[ADD]",
    },
    {
      name: "The Celebration",
      note: "For a complete wedding day",
      inclusions: [
        "Venue access",
        "Catering coordination",
        "Décor planning",
        "Stay allocation",
        "[ADD inclusions]",
      ],
      price: "From ₹[ADD]",
    },
    {
      name: "The Weekend",
      note: "For a destination-style gathering",
      inclusions: [
        "Multi-day venue access",
        "Guest accommodation",
        "Welcome gathering",
        "Wedding day coordination",
        "[ADD inclusions]",
      ],
      price: "From ₹[ADD]",
    },
  ],

  services: [
    {
      label: "Catering",
      value:
        "Menus shaped around your guest list, service style and celebration. [ADD cuisine options]",
    },
    {
      label: "Décor",
      value:
        "Work with your chosen decorator or ask us about trusted local partners.",
    },
    {
      label: "Music & sound",
      value:
        "DJ, live music and sound plans are coordinated around venue guidelines. [ADD limits]",
    },
    {
      label: "Vendors",
      value:
        "[ADD outside-vendor, corkage and production policy]",
    },
  ],
};

export const EXPERIENCES = {
  dine: {
    eyebrow: "Dine at Yume",
    title: "Tables under open sky.",
    intro:
      "Relaxed meals, familiar flavours and long conversations in the green quiet of the resort.",
    image: dineImg,
    story:
      "Come for lunch, stay through sunset. Our dining experience is made for families, friends and resort guests who prefer an easy pace.",

    facts: [
      {
        label: "Cuisine",
        value: "[ADD cuisine and menu highlights]",
      },
      {
        label: "Restaurant timings",
        value: "8:00 AM – 12:00 AM",
      },
      {
        label: "Breakfast",
        value: "9:00 AM – 10:00 AM",
      },
      {
        label: "Lunch",
        value: "1:00 PM – 2:30 PM",
      },
      {
        label: "Hi-Tea",
        value: "5:00 PM – 5:30 PM",
      },
      {
        label: "Dinner",
        value: "9:00 PM – 10:30 PM",
      },
      {
        label: "Seating",
        value: "[ADD indoor / outdoor capacity]",
      },
      {
        label: "Reservations",
        value: "Recommended for weekends and groups.",
      },
      {
        label: "Dietary needs",
        value: "Please tell us when reserving. [ADD options]",
      },
    ],

    cta: "Reserve a table",
    message: WA_MESSAGES.bookTable,
    video: undefined,
  },

  pool: {
    eyebrow: "Pool Days",
    title: "Long afternoons by the water.",
    intro:
      "A refreshing day out for families and friends, with dining and green spaces close by.",
    image: poolImg,
    story:
      "Settle into a lounger, break for lunch and make a full day of it. Day visits are subject to availability, especially on weekends.",

    facts: [
      {
        label: "Day pass",
        value: "Adults ₹[ADD] · Children ₹[ADD]",
      },
      {
        label: "Swimming pool timings",
        value: "8:00 AM – 12:00 PM",
      },
      {
        label: "Day picnic timings",
        value: "9:00 AM – 6:00 PM",
      },
      {
        label: "Facilities",
        value: "[ADD changing rooms, showers and loungers]",
      },
      {
        label: "Children",
        value: "Children must be supervised by an adult.",
      },
      {
        label: "Lifeguard",
        value: "[ADD lifeguard availability]",
      },
      {
        label: "What to bring",
        value: "Swimwear, towels and sun protection. [ADD towel policy]",
      },
    ],

    cta: "Plan a pool day",
    message:
      "Hi Yume! I'd like to enquire about a pool day pass. Could you share availability and rates?",

    video: {
      mp4: "./pool.mp4",
      webm: undefined,
      title: "The pool, in motion.",
      caption:
        "A short look at the water before you plan your visit. Day passes are subject to availability, especially on weekends.",
    },
  },

  turf: {
    eyebrow: "Play at Yume",
    title: "Floodlit games till late.",
    intro:
      "Bring your team for football, box cricket and an evening of friendly competition.",
    image: turfImg,
    story:
      "Our all-weather turf is available in bookable slots for casual games, regular groups and small tournaments.",

    facts: [
      {
        label: "Sports",
        value: "Football · Box cricket · [ADD other sports]",
      },
      {
        label: "Cricket turf timings",
        value: "7:00 AM – 11:00 PM",
      },
      {
        label: "Slot length",
        value: "[ADD duration options]",
      },
      {
        label: "Rates",
        value: "From ₹[ADD] per slot",
      },
      {
        label: "Floodlights",
        value: "Available for evening bookings.",
      },
      {
        label: "Equipment",
        value: "[ADD included / rental equipment]",
      },
    ],

    cta: "Book a turf slot",
    message: WA_MESSAGES.bookSlot,
    video: undefined,
  },
};

export const HOTEL_POLICIES = {
  termsAndConditions: [
    {
      title: "Right of admission",
      description:
        "The hotel reserves the right of admission.",
    },
    {
      title: "Check-in and check-out",
      description:
        "Check-in time is 1:00 PM (13:00 hrs) and check-out time is 10:30 AM. Early check-in and late check-out are subject to availability and additional charges as per hotel policy. Early departure is subject to one room night's charges.",
    },
    {
      title: "Guaranteed reservations",
      description:
        "Reservations are held on a confirmed basis subject to a written guarantee from the company or valid credit card details.",
    },
    {
      title: "Non-guaranteed reservations",
      description:
        "Non-guaranteed reservations will be released at 6:00 PM on the date of arrival.",
    },
    {
      title: "Airport transfers",
      description:
        "Airport transfers are available at an additional cost unless specifically included in the booking.",
    },
    {
      title: "Cancellations",
      description:
        "The hotel requires at least 72 hours' prior notice for cancellation. Cancellations received after this period are subject to one room night's charges. The applicable cancellation terms for advance bookings and group bookings may differ.",
    },
    {
      title: "Advance-purchase bookings",
      description:
        "Deposits for advance-purchase bookings are non-refundable, even if the booking is cancelled or modified.",
    },
    {
      title: "Smoking policy",
      description:
        "Smoking is prohibited in public areas, including the lobby, restaurants, bars and lounges, swimming pool, and health club. Smoking rooms may be requested when making a reservation and are subject to availability.",
    },
  ],

  cancellationPolicy: [
    {
      notice: "Two months in advance",
      retention: "20% of the minimum guaranteed amount",
    },
    {
      notice: "One month in advance",
      retention: "35% of the minimum guaranteed amount",
    },
    {
      notice: "15 days in advance",
      retention: "50% of the minimum guaranteed amount",
    },
    {
      notice: "One week in advance",
      retention: "75% of the minimum guaranteed amount",
    },
    {
      notice: "Three days in advance",
      retention: "100% of the minimum guaranteed amount",
    },
  ],

  childPolicy: [
    {
      age: "0–7 years",
      charge: "Complimentary stay",
    },
    {
      age: "8–14 years",
      charge: "₹1,200 per child",
    },
    {
      age: "15 years and above",
      charge: "Counted as an adult and charged accordingly",
    },
  ],

  amenitiesAndTimings: [
    {
      amenity: "Cricket Turf",
      timings: "7:00 AM – 11:00 PM",
    },
    {
      amenity: "Swimming Pool",
      timings: "8:00 AM – 12:00 PM",
    },
    {
      amenity: "Restaurant",
      timings: "8:00 AM – 12:00 AM",
    },
  ],

  mealTimings: [
    {
      meal: "Breakfast",
      timings: "9:00 AM – 10:00 AM",
    },
    {
      meal: "Lunch",
      timings: "1:00 PM – 2:30 PM",
    },
    {
      meal: "Hi-Tea",
      timings: "5:00 PM – 5:30 PM",
    },
    {
      meal: "Dinner",
      timings: "9:00 PM – 10:30 PM",
    },
  ],

  dayPicnic: {
    timings: "9:00 AM – 6:00 PM",
  },
};

export type EXPERIENCE_KEY = keyof typeof EXPERIENCES;
export type ExperienceContent = (typeof EXPERIENCES)[EXPERIENCE_KEY];

export const GALLERY = [
  { src: heroImg, alt: "Yume Resort beside the river", category: "Stay" },
  { src: stayImg, alt: "Guest accommodation at Yume", category: "Stay" },
  { src: storyImg, alt: "Quiet resort veranda", category: "Stay" },
  { src: poolImg, alt: "Pool at Yume Resort", category: "Pool" },
  { src: turfImg, alt: "Floodlit turf at Yume Resort", category: "Turf" },
  { src: dineImg, alt: "Outdoor dining at Yume", category: "Dine" },
  { src: weddingsImg, alt: "Wedding celebration at Yume", category: "Weddings" },
  { src: weddingBandImg, alt: "Riverside wedding tables", category: "Weddings" },
  { src: insta1, alt: "Palm reflections in the pool", category: "Pool" },
  { src: insta2, alt: "Monstera leaf in sunlight", category: "Stay" },
  { src: insta3, alt: "A drink on the terrace", category: "Dine" },
  { src: insta4, alt: "Dinner table setting at dusk", category: "Dine" },
  { src: insta5, alt: "Sun umbrella by the pool", category: "Pool" },
  { src: insta6, alt: "The river at dusk", category: "Weddings" },
  { src: insta8, alt: "Breakfast tray on a balcony overlooking misty hills", category: "Dine" },
  { src: insta9, alt: "Two glasses clinking over the pool at sunset", category: "Pool" },
  { src: insta10, alt: "The turf lit at dusk, a lantern at the edge", category: "Turf" },
  { src: turf2, alt: "The turf at dusk with floodlights on", category: "Turf" },
  { src: turf3, alt: "Cricket bat and ball resting on the turf", category: "Turf" },
];

export const CONTACT = {
  hero: {
    eyebrow: "Contact",
    title: "Let’s plan your time at Yume.",
    intro:
      "Tell us what brings you here and our team will help with availability, rates and the details that matter.",
  },
  enquiryTypes: [
    "Stay",
    "Wedding or event",
    "Dining",
    "Pool day",
    "Turf booking",
    "General enquiry",
  ],
  location: {
    landmark: "Barvi Dam, Badlapur",
    coordinates: "19.1927° N, 73.3397° E",
    decimal: "19.1927152, 73.3396625",
    mapsUrl: "https://www.google.com/maps?q=19.1927152,73.3396625",
  },
  directions: [
    {
      from: "From Mumbai",
      detail:
        "Drive towards Badlapur via Thane and Kalyan. [ADD preferred route and approximate travel time]",
    },
    {
      from: "From Thane",
      detail:
        "Continue via Kalyan towards Badlapur, then follow the route to Sonivali - about an hour from Thane.",
    },
    {
      from: "From Kalyan",
      detail: "Head towards Badlapur and continue to Sonivali. [ADD landmark and travel time]",
    },
  ],
};

// Home page spotlight - the location story.
export const SPOTLIGHT = {
  eyebrow: "Spotlight",
  title: "10 KM FROM BADLAPUR STATION",
  copy: "Yume sits minutes from Barvi Dam, Badlapur - the quiet backwaters and green hills just beyond the city. Mist over the water in the morning, golden light on the dam road by evening. Come for the dam views, stay for the river.",
  linkLabel: "Find us near Barvi Dam",
  to: "/contact",
  image: insta6,
  imageAlt: "Evening light on the water near Barvi Dam",
};

// Home page story block - the two paragraphs under the hero.
export const STORY = {
  eyebrow: "The Story",
  lead: "Set where the hills soften into the river, Yume is a quiet escape from the city - mornings in mist, afternoons by the pool, evenings under string lights.",
  body: "Nestled one hour away from Thane, in Badlapur, Sonivali - just 10 kilometers from Badlapur (W) station. We host slow weekend stays, long lunches, floodlit games and weddings by the water. Come for a day, or stay the weekend.",
};

// Home page wedding band - the small price line under the headline.
export const WEDDING_BAND = {
  from: "Starting from ₹1.5 L",
};

export type NavChild = { label: string; to: string };
export type NavItem = { label: string; to: string } | { label: string; children: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Stay", to: "/stay" },
  { label: "Weddings & Events", to: "/weddings-events" },
  {
    label: "Dine · Pool · Turf",
    children: [
      { label: "Dine", to: "/dine" },
      { label: "Pool", to: "/pool" },
      { label: "Turf", to: "/turf" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

// "Five ways to spend a day at Yume"
export const WAYS = [
  {
    label: "Stay",
    blurb: "Slow mornings in linen and light.",
    to: "/stay",
    image: stayImg,
  },
  {
    label: "Dine",
    blurb: "Tables under open sky.",
    to: "/dine",
    image: dineImg,
  },
  {
    label: "Pool",
    blurb: "Long afternoons by the water.",
    to: "/pool",
    image: poolImg,
  },
  {
    label: "Turf",
    blurb: "Floodlit games till late.",
    to: "/turf",
    image: turfImg,
  },
  {
    label: "Weddings",
    blurb: "Vows by the river.",
    to: "/weddings-events",
    image: weddingsImg,
  },
];

// [ADD] placeholders - replace values when known.
export const STATS = [
  { value: "50+", label: "Rooms" },
  { value: "2500", label: "Guests hosted" },
  { value: "150+", label: "Weddings & events" },
];

// TODO: swap placeholder reviews for live Google data.
export const GOOGLE_RATING = { score: "4.6", source: "Google Reviews" };


const GOOGLE_REVIEWS_URL =
  "https://www.google.com/travel/hotels/entity/CgoIh4XIqNubjJVGEAE/reviews?q=yume%20badlapur";

export const REVIEWS = [
  {
    name: "Swati Shrivastava",
    rating: 5,
    text: "I went there office outing. 1 night well spent there. Arrangements, decoration, pool, food, room, cleanliness all are excellent. Behavior of staff also very polite and supporting. Very beautiful property. Best choice for office outing.",
    source: "Google",
    sourceUrl:
      "https://www.google.com/maps/contrib/100016086773076366385?hl=en-GB",
  },
  {
    name: "Farhat Chaudhary",
    rating: 5,
    text: "We had a wonderful and pleasant stay. The property is great, with up-to-mark facilities and amenities, tasty food, and courteous staff.",
    source: "Google",
    sourceUrl:
      "https://www.google.com/maps/contrib/102229897441006322619?hl=en-GB",
  },
  {
    name: "Pari Chandwani",
    rating: 5,
    text: "The place was as beautiful as it looked in the images. The food was so delicious, the staff was cooperative, and the environment was very positive. I will recommend everyone to visit this place.",
    source: "Google",
    sourceUrl:
      "https://www.google.com/maps/contrib/109879166062428812453?hl=en-GB",
  },
  {
    name: "Ashish S",
    rating: 5,
    text: "We were looking for a sportacation-type place or resort, and this is a perfect place to serve the purpose. A resort beside the river with huge lawns and a great cricket turf.",
    source: "Google",
    sourceUrl:
      "https://www.google.com/maps/contrib/115715239017790155733?hl=en-GB",
  },
  {
    name: "Manish Sewlani",
    rating: 5,
    text: "Yume Resort is a wonderful place to enjoy your time with family and friends. I visited with my family and enjoyed great food and hospitality.",
    source: "Google",
    sourceUrl:
      "https://www.google.com/maps/contrib/108067342256081235202?hl=en-GB",
  },
  {
    name: "Paresh Vadiya",
    rating: 5,
    text: "The resort is very good, with a big swimming pool, games and activities, a well-maintained garden, and delicious food cooked in a traditional way. The staff was very supportive and behaved well.",
    source: "Google",
    sourceUrl:
      "https://www.google.com/maps/contrib/117959876744954681008?hl=en-GB",
  },
];

export const REVIEWS_CTA = {
  label: "Read All Google Reviews",
  url: GOOGLE_REVIEWS_URL,
};


// TODO: connect the live @yume.resort Instagram feed here.
export const INSTAGRAM_TILES = [
  { image: insta1, alt: "Palm reflections in the pool" },
  { image: insta2, alt: "Monstera leaf in sunlight" },
  { image: insta3, alt: "A drink on the terrace" },
  { image: insta4, alt: "Dinner table setting at dusk" },
  { image: insta5, alt: "Sun umbrella by the pool" },
  { image: insta6, alt: "The river at dusk" },
  {
    image: insta7,
    alt: "Wedding tables under string lights on the lawn at dusk",
  },
  {
    image: insta8,
    alt: "Breakfast tray on a balcony overlooking misty hills",
  },
  { image: insta9, alt: "Two glasses clinking over the pool at sunset" },
  { image: insta10, alt: "The turf lit at dusk, a lantern at the edge" },
  { image: insta11, alt: "Misty riverbank at sunrise" },
  {
    image: insta12,
    alt: "Linen bed and sheer curtains in a sunlit room",
  },
];
