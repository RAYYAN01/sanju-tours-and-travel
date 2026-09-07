// Single source of truth for site-wide SEO / metadata.
// Update SITE_URL here (and in public/sitemap.xml + index.html JSON-LD)
// if the site moves to a custom domain.

export const SITE_URL = 'https://sanju-tours-and-travel.vercel.app';
export const SITE_NAME = 'Sanju Tours & Travels';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/hero_travel_fleet.jpg`;

export interface PageSeo {
  title: string;
  description: string;
}

// Per-route metadata. Keys are the router pathnames.
export const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    title: 'Sanju Tours & Travels | Cab, Taxi & Vehicle Rental in Hubballi, Karnataka',
    description:
      'Reliable car, cab, Tempo Traveller and luxury coach rental in Hubli-Dharwad. Transparent per-km pricing, verified drivers, 24/7 airport transfers and outstation tours.',
  },
  '/about': {
    title: 'About Sanju Tours & Travels | 10+ Years of Trusted Travel in Hubballi',
    description:
      'A decade of dependable journeys across North Karnataka. Verified commercial chauffeurs, a sanitized fleet, and written per-km quotations from a local Hubballi operator.',
  },
  '/fleet': {
    title: 'Our Fleet | Sedans, SUVs, Tempo Travellers & Coaches in Hubballi',
    description:
      'Browse the Sanju Tours & Travels fleet — Swift Dzire, Innova Crysta, Ertiga, Force Trax, 12–17 seater Tempo Travellers and tourist coaches with clear per-km rates.',
  },
  '/services': {
    title: 'Travel Services | Airport Transfers, Outstation & Corporate Cabs, Hubballi',
    description:
      'Hubballi Airport (HBX) transfers, outstation round-trips and one-way drops, local twin-city rentals, corporate travel, wedding shuttles and custom holiday tours.',
  },
  '/destinations': {
    title: 'Destinations & Road Trips from Hubballi | Goa, Dandeli, Hampi, Gokarna',
    description:
      'Popular getaways from Hubli by road — Dandeli rafting, Badami & Hampi heritage circuits, Gokarna and Goa beaches, Jog Falls. Distances, drive times and cab options.',
  },
  '/packages': {
    title: 'Tour Packages | Curated Multi-Day Trips from Hubballi, Karnataka',
    description:
      'Ready-made, customizable road-trip itineraries from Hubballi — Dandeli adventure, Chalukya heritage, Hampi imperial trail and the Gokarna–Murudeshwar coast.',
  },
  '/contact': {
    title: 'Contact Sanju Tours & Travels | Book a Cab in Hubballi — 24/7 Dispatch',
    description:
      'Call or WhatsApp our Hubballi dispatch desk on +91 73381 48518 for instant quotes, airport pickups and outstation bookings. Office at Unkal, P.B. Road, Hubli.',
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
];
