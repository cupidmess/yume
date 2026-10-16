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
import dine1 from "@/assets/yume/dineImage1.jpg"
import dine2 from "@/assets/yume/dineImage2.jpg"
import dine3 from "@/assets/yume/dineImage3.jpg"
import dine4 from "@/assets/yume/dineImage4.jpg"
import pool1 from "@/assets/yume/poolImage1.jpg"
import pool2 from "@/assets/yume/poolImage2.jpg"
import pool3 from "@/assets/yume/poolImage3.jpg"
import pool4 from "@/assets/yume/poolImage4.jpg"
import turf1 from "@/assets/yume/turfImage1.jpg"
import room11 from "@/assets/yume/room1-1.jpg"
import room14 from "@/assets/yume/room1-4.jpg"
import room21 from "@/assets/yume/room2-1.jpg"
import room23 from "@/assets/yume/room2-3.jpg"
import room31 from "@/assets/yume/room3-1.jpg"
import room32 from "@/assets/yume/room3-2.jpg"
import room33 from "@/assets/yume/room3-3.jpg"
import room34 from "@/assets/yume/room3-4.jpg"
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
import turf2 from "@/assets/yume/turfImage2.jpg";
import turf3 from "@/assets/yume/turfImage3.jpg";
import turf4 from "@/assets/yume/turfImage4.jpg";
// Pool gallery images
const poolImage1 = pool1;
const poolImage2 = pool2;
const poolImage3 = pool3;
const poolImage4 = pool4;

// Dine gallery images
const dineImage1 = dine1;
const dineImage2 = dine2;
const dineImage3 = dine3;
const dineImage4 = dine4;

// Turf gallery images
const turfImage1 = turf1;
const turfImage2 = turf2;
const turfImage3 = turf3;
const turfImage4 = turf4;
// Placeholder room photos - swap per room with real photography.
const roomPhotos = (main: string) => [
  { src: room21, label: "Room" },
  { src: main, label: "Bedroom" },
  { src: main, label: "Washroom" },
  { src: room14, label: "Writing table" },
  { src: room23, label: "Balcony view" },
  { src: roomDesk, label: "Terrace details" },
];
const deluxePics = (main: string) => [
  { src: room11, label: "Room" },
  { src: main, label: "Bedroom" },
  { src: main, label: "Washroom" },
  { src: room14, label: "Writing table" },
  { src: roomBalcony, label: "Balcony view" },
  { src: roomDesk, label: "Terrace details" },
];
const superior = (main: string) => [
  { src: room31, label: "Room" },
  { src: main, label: "Bedroom" },
  { src: main, label: "Washroom" },
  { src: room33, label: "Writing table" },
  { src: room34, label: "Balcony view" },
  { src: room32, label: "Terrace details" },
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
      "Escape the ordinary and find comfort in every little moment.",
  },

  intro:
    "Every stay is designed around easy comfort: green views, time by the pool and the freedom to do very little at all.",

 rooms: [
  {
    name: "Deluxe Room (Without Balcony)",
    description: "A relaxing retreat surrounded by nature, offering a comfortable stay for families, friends, and weekend travellers. Choose from flexible stay packages with or without meals, tailored to your getaway.",
    image: stayImg,
    gallery: deluxePics(stayImg),
    packages: [
      { name: "Couple · With food", weekdayGuests: "2 guests", weekendGuests: "2 guests", unit: "per couple", weekday: 4999, weekend: 6500 },
      { name: "Group · Without food", weekdayGuests: "Minimum 4 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 1000, weekend: 3000 },
      { name: "Group · With food", weekdayGuests: "Minimum 4 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 2300, weekend: 3000 },
    ],
    compare: {
      short: "Deluxe · No balcony",
      food: "Couples stay with food included; groups choose with or without food.",
      inclusions: ["Air-conditioned room", "Pool & garden access", "On-site dining", "Group packages from 4 guests"],
    },
  },
  {
    name: "Deluxe Room (With Balcony)",
    description: "A thoughtfully designed room with a private balcony, offering a peaceful space to unwind and enjoy the natural surroundings.",
    image: stayImg,
    gallery: roomPhotos(stayImg),
    packages: [
      { name: "Couple · With food", weekdayGuests: "2 guests", weekendGuests: "2 guests", unit: "per couple", weekday: 5499, weekend: 7000 },
      { name: "Group · Without food", weekdayGuests: "Minimum 4 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 1000, weekend: 3000 },
      { name: "Group · With food", weekdayGuests: "Minimum 4 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 2300, weekend: 3000 },
    ],
    compare: {
      short: "Deluxe · Balcony",
      food: "Couples stay with food included; groups choose with or without food.",
      inclusions: ["Room with private balcony", "Pool & garden access", "On-site dining", "Group packages from 4 guests"],
    },
  },
  {
    name: "Superior Room",
    description: "A spacious option for families and groups looking to spend a relaxing weekend together.",
    image: stayImg,
    gallery: superior(stayImg),
    packages: [
      { name: "Group of 4+ · Without food", weekdayGuests: "Minimum 4 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 2000, weekend: 3000 },
      { name: "Group of 8+ · Without food", weekdayGuests: "Minimum 8 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 1000, weekend: 3000 },
      { name: "Group of 4+ · With food", weekdayGuests: "Minimum 4 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 3000, weekend: 3000 },
      { name: "Group of 8+ · With food", weekdayGuests: "Minimum 8 guests", weekendGuests: "Minimum 5 guests", unit: "per person", weekday: 2300, weekend: 3000 },
    ],
    compare: {
      short: "Superior",
      food: "Groups choose with or without food; a couple package isn't offered.",
      inclusions: ["Air-conditioned room", "Pool & garden access", "On-site dining", "Groups of 8+ save on weekdays"],
    },
  },
],
tariff: {
  heading: "Room packages",
  view: "View packages",
  weekday: "Weekdays",
  weekend: "Weekend",
  enquiry: "Enquire about package",
  note: "Rates are subject to seasonal offers and availability. Terms & conditions apply.",
  deluxeNote: "Group rates are listed for Deluxe rooms; please confirm balcony availability when enquiring.",
  compare: {
    title: "Compare rooms & packages.",
    intro: "Rates, food options and inclusions for all three room categories, side by side.",
    link: "Compare all rooms",
  },
},

  amenities: [
    "Swimming pool",
    "On-site restaurant",
    "Air-conditioned rooms",
    "Parking",
    "Garden and river surroundings",
    "Cricket turf",
    "Wi-Fi availability to be confirmed",
    "In-room amenities available on request",
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
      value:
        "Please contact the resort to confirm pet accommodation and applicable conditions before booking.",
    },
    {
      label: "Cancellation",
      value:
        "At least 72 hours' prior notice is required for standard cancellations. Later cancellations are subject to one room night's charges. Advance-purchase and group bookings may have separate terms.",
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
    {
      label: "Reservations",
      value:
        "Bookings are subject to availability and confirmation. Non-guaranteed reservations may be released at 6:00 PM on the arrival date.",
    },
    {
      label: "Smoking",
      value:
        "Smoking is prohibited in public areas, including restaurants and the swimming pool. Smoking rooms may be requested in advance, subject to availability.",
    },
  ],
};

export const WEDDINGS = {
  hero: {
    eyebrow: "Weddings & Events",
    title: "Vows, by the river.",
    intro: "Celebrate your forever in a setting as beautiful as your love.",
  },

  intro:
    "From an intimate ceremony to a full wedding weekend, Yume brings venue, stay, dining and celebration into one relaxed destination.",

  // TODO: confirm capacities for the Small Lawn, Big Lawn and Small Hall
  // (carried over from the previous copy; the booklet doesn't state them).
  venues: [
    {
      name: "Big Lawn",
      description:
        "An open-air setting for weddings, receptions and sunset celebrations by the river.",
      capacity: "Up to 200 guests",
      image: wed,
    },
    {
      name: "Small Lawn",
      description:
        "An intimate open-air setting for ceremonies, haldi, mehendi and smaller gatherings.",
      capacity: "Up to 100 guests",
      image: wed2,
    },
    {
      name: "Small Hall",
      description:
        "A sheltered setting for pre-wedding celebrations such as sangeet, haldi and mehendi, and weather-ready plans.",
      capacity: "Up to 80 guests",
      image: wed3,
    },
  ],

  packages: [
    {
      name: "Express Vows",
      note: "1 day · No stay",
      inclusions: [
        "Small Lawn (Big Lawn with Diamond tier)",
        "1 catered meal service for 100 guests",
        "Silver, Gold and Diamond catering tiers",
        "Extra guests charged at the per-plate rate",
      ],
      price: "From ₹1,45,000",
    },
    {
      name: "Celebration Night",
      note: "1.5 days · 1 night stay",
      inclusions: [
        "Venue for 1 event with main dinner for 100 guests",
        "Full room buyout for 1 night (50, 70 or 90 guests)",
        "Lunch, hi-tea and breakfast for staying guests",
        "Complimentary half-day room use on day 2 until 4:00 PM",
      ],
      price: "From ₹3,50,000",
    },
    {
      name: "Dream Wedding Weekend",
      note: "42 hours · 2 night stay",
      inclusions: [
        "Day 1: Small Hall (complimentary) for haldi/mehendi, with family catering",
        "Day 2: Big Lawn for the main wedding, catering for 100 guests",
        "Full room buyout for 2 nights (50, 70 or 90 guests)",
        "Food for staying guests",
      ],
      price: "From ₹6,50,000",
    },
    {
      name: "Royal Wedding Celebration",
      note: "3 days · 2 night stay",
      inclusions: [
        "Day 1: Small Hall (complimentary) for sangeet/haldi/mehendi, 50 guests",
        "Day 2: Big Lawn for the wedding, 100 guests",
        "Day 3: Big Lawn for the reception, 100 guests (loyalty discount applied)",
        "Full room buyout for 2 nights, with in-room meals for 2.5 days",
      ],
      price: "From ₹8,99,000",
    },
  ],

  services: [
    {
      label: "Catering",
      value:
        "Vegetarian menus across Silver (₹650/plate), Gold (₹750) and Diamond (₹850) tiers. Non-vegetarian is available at ₹200 extra per plate. Guests beyond 100 are charged at the per-plate rate. Packages include food for one day only unless stated.",
    },
    {
      label: "Décor",
      value:
        "Create your celebration with your preferred decorator or explore recommendations from our local vendor network. Floral arrangements, mandaps and themed setups can be planned to suit your vision.",
    },
    {
      label: "Music & sound",
      value:
        "DJ setups, live music and event sound can be coordinated according to venue requirements, applicable noise regulations and event timings.",
    },
    {
      label: "Vendors",
      value:
        "Outside vendors can be discussed during booking. Décor, photography, entertainment and production requirements must be approved in advance. Any vendor fees, corkage charges or additional setup costs will be confirmed in your event quotation.",
    },
    {
      label: "Check-in & check-out",
      value:
        "Check-in is at 1:00 PM and check-out at 4:00 PM the next day for stay packages.",
    },
  ],

  contact: "70280 43300 / 70280 53300",
};
export const EXPERIENCES = {
  dine: {
    eyebrow: "Dine at Yume",
    title: "Savour every moment.",
    intro:
      "Discover beautiful flavours, shared moments, and dining worth remembering.",
    image: dineImg,
    story:
      "Come for lunch, stay through sunset. Our dining experience is made for families, friends and resort guests who prefer an easy pace.",

    facts: [
      {
        label: "Cuisine",
        value:
          "A relaxed dining experience for families and friends. Please contact us for current menu options and cuisine details.",
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
        value:
          "Please contact the resort for indoor and outdoor seating arrangements and group capacity.",
      },
      {
        label: "Reservations",
        value:
          "Advance reservations are recommended for weekends and larger groups.",
      },
      {
        label: "Dietary needs",
        value:
          "Please inform us of dietary requirements when making your reservation so our team can advise on available options.",
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
      "Soak in the sunshine and let time slow down.",
    image: poolImg,
    story:
      "Spend the afternoon by the water, soak up the sunshine and savour a little time away from the everyday.",

    facts: [
      {
        label: "Day pass",
        value:
          "Contact us for current adult and child day picnic rates and inclusions.",
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
        value:
          "Please contact the resort to confirm changing facilities, showers, poolside seating and towel availability.",
      },
      {
        label: "Children",
        value:
          "Children must be supervised by an accompanying adult at all times.",
      },
      {
        label: "Lifeguard",
        value:
          "Please confirm lifeguard availability with the resort before your visit.",
      },
      {
        label: "What to bring",
        value:
          "Bring appropriate swimwear and sun protection. Please enquire about towel availability before your visit.",
      },
    ],

    cta: "Plan a pool day",
    message:
      "Hi Yume! I'd like to enquire about a day picnic and swimming pool visit. Could you please share availability, rates and inclusions?",

    video: {
      mp4: "./pool.mp4",
      webm: undefined,
      title: "The pool, in motion.",
      caption:
        "A short look at the water before you plan your visit. Pool timings are 8:00 AM to 12:00 PM, and day picnics run from 9:00 AM to 6:00 PM. Visits are subject to availability.",
    },
  },

  turf: {
    eyebrow: "Play at Yume",
    title: "Floodlit games till late.",
    intro:
      "Bring your team together and make every moment count.",
    image: turfImg,
    story:
      "From friendly kickabouts to competitive matches, our turf is where good games, great company and unforgettable moments come together. ",

    facts: [
      {
        label: "Sports",
        value: "Cricket turf",
      },
      {
        label: "Cricket turf timings",
        value: "7:00 AM – 11:00 PM",
      },
      {
        label: "Slot length",
        value:
          "Please contact the resort for available booking durations.",
      },
      {
        label: "Rates",
        value:
          "Contact us for current turf booking rates.",
      },
      {
        label: "Floodlights",
        value:
          "Please confirm evening floodlight availability when booking.",
      },
      {
        label: "Equipment",
        value:
          "Contact the resort to confirm available sports equipment and rental charges.",
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
      title: "Booking confirmation and payment",
      description:
        "Reservations are subject to availability and confirmation by the hotel. Applicable rates, advance payment requirements and any outstanding balance will be communicated during the booking process.",
    },
    {
      title: "Airport transfers",
      description:
        "Airport transfers are available at an additional cost unless specifically included in the booking.",
    },
    {
      title: "Cancellations",
      description:
        "The hotel requires at least 72 hours' prior notice for cancellation. Cancellations received after this period are subject to one room night's charges. Group bookings and event bookings may be subject to the separate cancellation policy stated below or in the booking confirmation.",
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
    {
      title: "Child policy",
      description:
        "Children aged 0–7 years stay complimentary. Children aged 8–14 years are charged ₹1,200 per child. Guests aged 15 years and above are considered adults and charged accordingly. Please confirm applicable occupancy and extra-bed arrangements when booking.",
    },
    {
      title: "Swimming pool safety",
      description:
        "Guests must follow the resort's swimming pool rules and safety instructions. Children must be supervised by an accompanying adult at all times. Please confirm pool access and any applicable restrictions with the resort.",
    },
    {
      title: "Amenities and operating hours",
      description:
        "Cricket Turf: 7:00 AM – 11:00 PM. Swimming Pool: 8:00 AM – 12:00 PM. Restaurant: 8:00 AM – 12:00 AM. Operating hours may be subject to change; please confirm availability when planning your visit.",
    },
    {
      title: "Meals and dining",
      description:
        "Breakfast is served from 9:00 AM to 10:00 AM, lunch from 1:00 PM to 2:30 PM, hi-tea from 5:00 PM to 5:30 PM, and dinner from 9:00 PM to 10:30 PM.",
    },
    {
      title: "Day picnic",
      description:
        "Day picnic timings are 9:00 AM to 6:00 PM. Entry, inclusions, applicable charges and availability should be confirmed with the resort before arrival.",
    },
    {
      title: "Guest conduct and property",
      description:
        "Guests are expected to respect other visitors, resort staff and property. Any applicable charges for damage to hotel property will be communicated by the hotel.",
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
};;

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
  {
    src: poolImage1,
    alt: "Swimming pool",
    category: "pool1",
  },
  {
    src: poolImage2,
    alt: "Poolside seating",
    category: "pool2",
  },
  {
    src: poolImage3,
    alt: "Pool surrounded by greenery",
    category: "pool3",
  },
  {
    src: poolImage4,
    alt: "Pool at the resort",
    category: "pool4",
  },

  // Dine In page images
  {
    src: dineImage1,
    alt: "Dining area",
    category: "dine1",
  },
  {
    src: dineImage2,
    alt: "Restaurant interior",
    category: "dine2",
  },
  {
    src: dineImage3,
    alt: "Outdoor dining",
    category: "dine3",
  },
  {
    src: dineImage4,
    alt: "Dining ambience",
    category: "dine4",
  },

  // Turf page images
  {
    src: turfImage1,
    alt: "Turf playing area",
    category: "turf1",
  },
  {
    src: turfImage2,
    alt: "Football on the turf",
    category: "turf2",
  },
  {
    src: turfImage3,
    alt: "Turf surrounded by greenery",
    category: "turf3",
  },
  {
    src: turfImage4,
    alt: "Outdoor games",
    category: "turf4",
  },
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
        "Drive towards Badlapur via Thane and Kalyan.",
    },
    {
      from: "From Thane",
      detail:
        "Continue via Kalyan towards Badlapur, then follow the route to Sonivali - about an hour from Thane.",
    },
    {
      from: "From Kalyan",
      detail: "Head towards Badlapur and continue to Sonivali.",
    },
  ],
};

// Home page spotlight - the location story.
export const SPOTLIGHT = {
  eyebrow: "Spotlight",
  title: "3 KM FROM BADLAPUR STATION",
  copy: "Yume sits minutes from Barvi Dam, Badlapur - the quiet backwaters and green hills just beyond the city. Mist over the water in the morning, golden light on the dam road by evening. Come for the dam views, stay for the river.",
  linkLabel: "Find us near Barvi Dam",
  to: "/contact",
  image: insta6,
  imageAlt: "Evening light on the water near Barvi Dam",
};

// Home page story block - the two paragraphs under the hero.
export const STORY = {
  eyebrow: "The Story",
  lead: "Set where the hills soften into the river, Yume is a quiet escape from the city.",
  body: "Nestled one hour away from Thane, in Badlapur, Sonivali - just 3 kilometers from Badlapur (W) station. We host slow weekend stays, long lunches, floodlit games and weddings by the water. Come for a day, or stay the weekend.",
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
    blurb: "A Stay Beyond Ordinary.",
    to: "/stay",
    image: stayImg,
  },
  {
    label: "Dine",
    blurb: "Savour Every Moment.",
    to: "/dine",
    image: dineImg,
  },
  {
    label: "Pool",
    blurb: "Dive into leisure.",
    to: "/pool",
    image: poolImg,
  },
  {
    label: "Turf",
    blurb: "Game On, Always.",
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
  { value: "10+", label: "Amenities" },
  { value: "2500+", label: "OCCUPANCIES" },
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
