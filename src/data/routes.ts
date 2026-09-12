import { VEHICLES } from './vehicles';

export interface CabRoute {
  slug: string;
  city: string;
  /** Short form used in copy, e.g. "Bengaluru" */
  shortCity: string;
  region: string;
  /** Approximate one-way road distance in km (sourced, not exact to the metre). */
  distanceKm: number;
  durationLabel: string;
  highway: string;
  /** Real, well-known landmarks/arrival points in the destination city. */
  landmarks: string[];
  /** Vehicle ids from vehicles.ts recommended for this trip length. */
  recommendedVehicleIds: string[];
  /** One genuine, route-specific detail — not filler. */
  note: string;
}

export const CAB_ROUTES: CabRoute[] = [
  {
    slug: 'hubli-to-gadag-taxi',
    city: 'Gadag',
    shortCity: 'Gadag',
    region: 'North Karnataka',
    distanceKm: 60,
    durationLabel: '~1.5 hrs',
    highway: 'NH-67',
    landmarks: ['Gadag Bus Stand', 'Trikuteshwara Temple', 'Betageri'],
    recommendedVehicleIds: ['swift-dzire', 'swift-dzire-new'],
    note: 'A short, frequent run for business visits and the Trikuteshwara & Someshwara temple circuit — most bookings are same-day return.',
  },
  {
    slug: 'hubli-to-haveri-taxi',
    city: 'Haveri',
    shortCity: 'Haveri',
    region: 'North Karnataka',
    distanceKm: 70,
    durationLabel: '~1.5 hrs',
    highway: 'NH-48',
    landmarks: ['Haveri Bus Stand', 'Haveri Railway Station', 'Siddheshwara Temple'],
    recommendedVehicleIds: ['swift-dzire', 'maruti-ertiga'],
    note: 'Straight NH-48 highway run, popular for district-office visits and onward connections toward Davangere and Chitradurga.',
  },
  {
    slug: 'hubli-to-belagavi-taxi',
    city: 'Belagavi (Belgaum)',
    shortCity: 'Belagavi',
    region: 'North Karnataka',
    distanceKm: 100,
    durationLabel: '~2 hrs',
    highway: 'NH-4 / NH-748',
    landmarks: ['Belagavi Bus Stand', 'Belagavi Fort', 'Belagavi Railway Station'],
    recommendedVehicleIds: ['swift-dzire', 'maruti-ertiga'],
    note: 'A common corporate and college-visit route; also used as a stopover toward Goa and Kolhapur.',
  },
  {
    slug: 'hubli-to-bagalkot-taxi',
    city: 'Bagalkot',
    shortCity: 'Bagalkot',
    region: 'North Karnataka',
    distanceKm: 125,
    durationLabel: '~2.5 hrs',
    highway: 'NH-367',
    landmarks: ['Bagalkot Bus Stand', 'Kudalasangama', 'Alamatti Dam'],
    recommendedVehicleIds: ['maruti-ertiga', 'innova-crysta'],
    note: 'Often booked alongside a Badami stop, since Bagalkot is the district headquarters just past the Badami heritage circuit.',
  },
  {
    slug: 'hubli-to-davangere-taxi',
    city: 'Davangere',
    shortCity: 'Davangere',
    region: 'Central Karnataka',
    distanceKm: 130,
    durationLabel: '~2.5 hrs',
    highway: 'NH-48',
    landmarks: ['Davangere Bus Stand', 'Davangere Railway Station'],
    recommendedVehicleIds: ['maruti-ertiga', 'swift-dzire-new'],
    note: 'A midway point on the Hubli–Bengaluru highway, frequently booked as a one-way business drop.',
  },
  {
    slug: 'hubli-to-hospet-taxi',
    city: 'Hospet',
    shortCity: 'Hospet',
    region: 'Central Karnataka',
    distanceKm: 150,
    durationLabel: '~3 hrs',
    highway: 'NH-367 / NH-50',
    landmarks: ['Hospet Railway Station', 'Hampi Bus Stand (7 km from Hospet)'],
    recommendedVehicleIds: ['maruti-ertiga', 'innova-crysta', 'tempo-traveller'],
    note: 'The gateway town for Hampi — most groups book this as a day trip to the Vijayanagara ruins with the driver waiting on-site.',
  },
  {
    slug: 'hubli-to-shivamogga-taxi',
    city: 'Shivamogga (Shimoga)',
    shortCity: 'Shivamogga',
    region: 'Malnad / Central Karnataka',
    distanceKm: 165,
    durationLabel: '~3.5 hrs',
    highway: 'NH-206',
    landmarks: ['Shivamogga Bus Stand', 'Jog Falls (via Sagar, ~100 km further)'],
    recommendedVehicleIds: ['maruti-ertiga', 'innova-crysta'],
    note: 'Gateway to the Malnad hill region and Jog Falls; the road runs through forested ghat stretches best driven in daylight.',
  },
  {
    slug: 'hubli-to-vijayapura-taxi',
    city: 'Vijayapura (Bijapur)',
    shortCity: 'Vijayapura',
    region: 'North Karnataka',
    distanceKm: 200,
    durationLabel: '~4 hrs',
    highway: 'NH-13 / NH-50',
    landmarks: ['Gol Gumbaz', 'Vijayapura Bus Stand', 'Ibrahim Rauza'],
    recommendedVehicleIds: ['innova-crysta', 'tempo-traveller'],
    note: 'Booked mainly for the Gol Gumbaz and Ibrahim Rauza monument circuit — a comfortable same-day round trip in an AC sedan or MUV.',
  },
  {
    slug: 'hubli-to-chikmagalur-taxi',
    city: 'Chikmagalur',
    shortCity: 'Chikmagalur',
    region: 'Malnad / Coffee Country',
    distanceKm: 245,
    durationLabel: '~5 hrs',
    highway: 'NH-766 / SH-57',
    landmarks: ['Mullayanagiri', 'Chikmagalur Bus Stand', 'Baba Budangiri'],
    recommendedVehicleIds: ['innova-crysta', 'tempo-traveller'],
    note: 'A coffee-estate and hill-station route through the Western Ghats — best suited to an MUV or Tempo Traveller for the climbing sections.',
  },
  {
    slug: 'hubli-to-mangaluru-taxi',
    city: 'Mangaluru (Mangalore)',
    shortCity: 'Mangaluru',
    region: 'Coastal Karnataka',
    distanceKm: 360,
    durationLabel: '~7 hrs',
    highway: 'NH-63 / NH-66',
    landmarks: ['Mangaluru Central Railway Station', 'Panambur Beach', 'Mangaluru Bus Stand (Bejai / Hampankatta)'],
    recommendedVehicleIds: ['innova-crysta', 'tempo-traveller'],
    note: 'Crosses the Western Ghats via Shivamogga — a long coastal run usually booked as an overnight or early-morning departure.',
  },
  {
    slug: 'hubli-to-bengaluru-taxi',
    city: 'Bengaluru (Bangalore)',
    shortCity: 'Bengaluru',
    region: 'South Karnataka',
    distanceKm: 415,
    durationLabel: '~8 hrs',
    highway: 'NH-48',
    landmarks: ['KSR Bengaluru City Railway Station', 'Kempegowda Bus Stand (Majestic)', 'Kempegowda International Airport'],
    recommendedVehicleIds: ['innova-crysta', 'tempo-traveller', 'tourist-coach'],
    note: 'Our most-booked long-distance route — the full NH-48 highway run, usually an overnight departure for a next-morning Bengaluru arrival.',
  },
  {
    slug: 'hubli-to-mysuru-taxi',
    city: 'Mysuru (Mysore)',
    shortCity: 'Mysuru',
    region: 'South Karnataka',
    distanceKm: 495,
    durationLabel: '~9.5 hrs',
    highway: 'NH-48 via Bengaluru / NH-766',
    landmarks: ['Mysore Palace', 'Mysuru Railway Station', 'Mysuru Bus Stand'],
    recommendedVehicleIds: ['innova-crysta', 'tempo-traveller'],
    note: 'The longest route we run — booked mainly for the Mysore Palace and Dasara season, almost always as an overnight multi-day trip.',
  },
];

export function getCabRoute(slug: string): CabRoute | undefined {
  return CAB_ROUTES.find((r) => r.slug === slug);
}

/** From-rate for a route: cheapest recommended vehicle's non-AC per-km rate × distance. */
export function estimateFare(route: CabRoute): { vehicleName: string; amount: number } | null {
  const candidates = route.recommendedVehicleIds
    .map((id) => VEHICLES.find((v) => v.id === id))
    .filter((v): v is (typeof VEHICLES)[number] => Boolean(v));
  if (candidates.length === 0) return null;

  let best: { vehicleName: string; amount: number } | null = null;
  for (const v of candidates) {
    const perKm = parseInt(v.rateNonAc.replace(/[^\d]/g, ''), 10);
    if (!Number.isFinite(perKm)) continue;
    const amount = perKm * route.distanceKm;
    if (!best || amount < best.amount) best = { vehicleName: v.name, amount };
  }
  return best;
}
