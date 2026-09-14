export interface LocalArea {
  slug: string;
  name: string;
  city: 'Hubballi' | 'Dharwad';
  tagline: string;
  /** Genuine, area-specific detail — not a name-swapped template. */
  description: string;
  landmarks: string[];
  /** A real, sourced distance/position fact — omit rather than invent one. */
  distanceNote: string;
  idealFor: string[];
}

export const LOCAL_AREAS: LocalArea[] = [
  {
    slug: 'unkal-hubli-cab-service',
    name: 'Unkal',
    city: 'Hubballi',
    tagline: 'Our home base',
    description:
      'Unkal is where Sanju Tours & Travels is based — our office sits on P.B. Road opposite Siddhappilla Temple, right by Unkal Lake. Because dispatch starts here, Unkal pickups are usually the fastest we offer.',
    landmarks: ['Unkal Lake', 'Chandramouleshwara Temple', 'Siddhappilla Temple', 'P.B. Road'],
    distanceNote: 'Our office counter is on P.B. Road, Unkal — walk-in bookings welcome.',
    idealFor: ['Fastest pickup response', 'Walk-in bookings at our counter', 'Local sightseeing around Unkal Lake'],
  },
  {
    slug: 'navanagar-hubli-cab-service',
    name: 'Navanagar',
    city: 'Hubballi',
    tagline: 'Hubli-Dharwad corridor',
    description:
      'Navanagar was developed in 1979 as one of the twin cities’ major planned residential and commercial layouts, sitting on the corridor that connects Hubli and Dharwad. We run frequent pickups here for both local errands and outstation departures.',
    landmarks: ['Navanagar Bus Stand', 'Hubli-Dharwad corridor'],
    distanceNote: 'On the Hubli–Dharwad corridor — roughly midway between the two city centres.',
    idealFor: ['Corporate & office pickups', 'Twin-city commute', 'Outstation departures'],
  },
  {
    slug: 'vidyanagar-hubli-cab-service',
    name: 'Vidyanagar',
    city: 'Hubballi',
    tagline: 'Closest residential area to HBX',
    description:
      'Vidyanagar is one of the two localities (with Gokul Road) closest to Hubballi Airport, making it a common pickup point for early-morning flight departures. It’s also a primarily residential and educational neighbourhood.',
    landmarks: ['Hubballi Airport (HBX) approach road'],
    distanceNote: 'Among the nearest residential areas to Hubballi Airport (HBX).',
    idealFor: ['Early-morning airport drops', 'Late-night airport pickups', 'Student & family travel'],
  },
  {
    slug: 'gokul-road-hubli-cab-service',
    name: 'Gokul Road',
    city: 'Hubballi',
    tagline: 'Hubballi Airport (HBX) locality',
    description:
      'Gokul Road is the locality that Hubballi Airport (HBX) itself sits in — about 8 km from central Hubballi. If you’re flying in or out of HBX, this is the fastest pickup/drop zone we serve.',
    landmarks: ['Hubballi Airport (HBX)', 'Gandhi Nagar'],
    distanceNote: 'Hubballi Airport (HBX) is on Gokul Road, ~8 km from central Hubballi and ~20 km from Dharwad.',
    idealFor: ['Airport transfers', 'Flight-timed pickups', 'Corporate airport runs'],
  },
  {
    slug: 'keshwapur-hubli-cab-service',
    name: 'Keshwapur',
    city: 'Hubballi',
    tagline: 'Central Hubballi',
    description:
      'Keshwapur is a busy residential and commercial locality in central Hubballi. We handle both quick local hops and outstation departures for households and businesses here.',
    landmarks: ['Keshwapur Circle'],
    distanceNote: 'Central Hubballi locality.',
    idealFor: ['Local errands & shopping trips', 'Family outstation travel', 'Small-business logistics'],
  },
  {
    slug: 'old-hubli-cab-service',
    name: 'Old Hubli (Durgadbail)',
    city: 'Hubballi',
    tagline: 'Near the railway station & bus stand',
    description:
      'Old Hubli, around Durgadbail, is the older commercial core of the city, close to Hubballi Railway Station and the central bus stand — a common starting point for travellers arriving by train or bus and continuing on to a hotel, home, or straight onward on an outstation trip.',
    landmarks: ['Hubballi Railway Station', 'Central Bus Stand', 'Durgadbail'],
    distanceNote: 'Close to Hubballi Railway Station and the central bus stand.',
    idealFor: ['Railway station pickups', 'Bus stand transfers', 'Onward outstation connections'],
  },
  {
    slug: 'deshpande-nagar-hubli-cab-service',
    name: 'Deshpande Nagar',
    city: 'Hubballi',
    tagline: 'Commercial Hubballi',
    description:
      'Deshpande Nagar is one of Hubballi’s established commercial neighbourhoods. We serve it regularly for business meetings, retail logistics and family travel bookings.',
    landmarks: ['Deshpande Nagar Market'],
    distanceNote: 'Established commercial locality in Hubballi.',
    idealFor: ['Business meeting transfers', 'Retail & market logistics', 'Family travel bookings'],
  },
  {
    slug: 'dharwad-cab-service',
    name: 'Dharwad',
    city: 'Dharwad',
    tagline: 'Our twin city',
    description:
      'Dharwad, the administrative and university twin of Hubballi, sits about 20 km away — home to Karnataka University, Dharwad Railway Station and the district administration. We run daily twin-city transfers as well as outstation departures directly from Dharwad.',
    landmarks: ['Karnataka University', 'Dharwad Railway Station', 'Dharwad District Court'],
    distanceNote: 'Approximately 20 km from Hubballi, and about 20 km from Hubballi Airport (HBX).',
    idealFor: ['University & staff transfers', 'Twin-city commute', 'Outstation trips starting from Dharwad'],
  },
];

export function getLocalArea(slug: string): LocalArea | undefined {
  return LOCAL_AREAS.find((a) => a.slug === slug);
}
