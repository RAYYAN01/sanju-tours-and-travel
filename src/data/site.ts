// Single source of truth for site-wide SEO / metadata.
// Update SITE_URL here (and in public/sitemap.xml + index.html JSON-LD)
// if the site moves to a custom domain.

export const SITE_URL = 'https://sanju-tours-and-travel.vercel.app';
export const SITE_NAME = 'Sanju Tours & Travels';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/hero_travel_fleet.jpg`;

// Business home base — the default geo target for every page except a
// route-detail page, which points geo meta at its destination city instead.
export const BUSINESS_GEO = {
  placename: 'Hubballi, Karnataka',
  region: 'IN-KA',
  lat: 15.3647,
  lng: 75.1240,
};

export interface PageSeo {
  title: string;
  description: string;
}

// Per-route metadata. Keys are the router pathnames.
// Titles kept to <=60 chars and descriptions to <=155 chars so Google
// doesn't truncate them in search results.
export const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    title: 'Sanju Tours & Travels | Cabs in Hubballi, Karnataka',
    description:
      'Reliable cab, Tempo Traveller and coach rental in Hubli-Dharwad. Transparent per-km pricing, verified drivers, 24/7 airport transfers.',
  },
  '/about': {
    title: 'About Sanju Tours & Travels | Hubballi Cab Operator',
    description:
      'A decade of dependable journeys across North Karnataka — verified chauffeurs, a sanitized fleet, written per-km quotes.',
  },
  '/fleet': {
    title: 'Our Fleet | Cars, Tempo Travellers & Coaches, Hubballi',
    description:
      'Browse our Hubballi fleet — sedans, Ertiga, Innova Crysta, Tempo Travellers and coaches, all with clear per-km rates.',
  },
  '/services': {
    title: 'Travel Services | Hubballi Airport, Outstation & Corporate',
    description:
      'Hubballi Airport transfers, outstation drops, local rentals, corporate travel, wedding shuttles and custom tours.',
  },
  '/destinations': {
    title: 'Destinations from Hubballi | Goa, Dandeli, Hampi, Gokarna',
    description:
      'Popular road trips from Hubli — Dandeli rafting, Badami-Hampi heritage, Gokarna and Goa beaches, with distances and drive times.',
  },
  '/packages': {
    title: 'Tour Packages from Hubballi, Karnataka',
    description:
      'Ready-made road-trip itineraries from Hubballi — Dandeli, Badami-Hampi heritage and the Gokarna-Murudeshwar coast.',
  },
  '/contact': {
    title: 'Contact Sanju Tours & Travels | Hubballi, 24/7 Dispatch',
    description:
      'Call or WhatsApp +91 73381 48518 for instant quotes, airport pickups and outstation bookings. Office at Unkal, Hubli.',
  },
  '/privacy': {
    title: 'Privacy Policy | Sanju Tours & Travels',
    description:
      'How Sanju Tours & Travels collects, uses and protects your data under India’s Digital Personal Data Protection Act, 2023.',
  },
  '/routes': {
    title: 'Outstation Cab Routes Across Karnataka | Sanju Tours & Travels',
    description:
      'Book a cab from Hubli to Bengaluru, Mysuru, Mangaluru, Belagavi, Hampi and more — real distances, drive times and per-km rates.',
  },
};

// Human-readable crumb label per route, for BreadcrumbList schema.
export const PAGE_CRUMB: Record<string, string> = {
  '/about': 'About',
  '/fleet': 'Fleet',
  '/services': 'Services',
  '/destinations': 'Destinations',
  '/packages': 'Tour Packages',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/routes': 'Popular Routes',
};

// Routes whose hero sits full-bleed behind the navbar — these get the
// transparent-until-scrolled navbar and no top padding on the content.
export const TRANSPARENT_HERO_ROUTES = [
  '/',
  '/about',
  '/fleet',
  '/services',
  '/destinations',
  '/packages',
  '/contact',
  '/routes',
];
