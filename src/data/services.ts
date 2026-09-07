export interface Service {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  imageUrl: string;
  iconName: string;
}

export const SERVICES: Service[] = [
  {
    id: 'outstation-travel',
    number: '01',
    title: 'Outstation Travel',
    categoryTag: 'Intercity & Highway',
    shortDesc: 'Dependable one-way drops and round-trip cabs for journeys beyond Hubballi with transparent per-km billing.',
    fullDesc: 'Whether you are travelling across Karnataka, heading into Goa, or driving to Maharashtra, our outstation travel service ensures a comfortable ride with experienced highway drivers and no hidden costs.',
    highlights: [
      'One-way drops & multi-day round-trip bookings',
      'Experienced drivers familiar with ghats and highway routes',
      'Clear itemized quotations with per-km rates upfront',
      'Timely door-to-door pickups across Hubli-Dharwad'
    ],
    imageUrl: '/assets/service_outstation.jpeg',
    iconName: 'Compass'
  },
  {
    id: 'airport-transfer',
    number: '02',
    title: 'Hubballi Airport Transfers (HBX)',
    categoryTag: 'Punctual Transfers',
    shortDesc: 'Flight-synchronized airport taxi pickups and drops to Hubballi Airport (HBX) with zero waiting stress.',
    fullDesc: 'We monitor your flight status in real time to ensure your designated driver is already waiting at Gokul Road terminal when you land or ready at your door well ahead of departure time.',
    highlights: [
      '24/7 coverage for all commercial flight arrivals & departures',
      'Flight arrival tracking to accommodate schedule delays',
      'Assistance with luggage loading and unloading',
      'Fixed transparent airport transfer fares'
    ],
    imageUrl: '/assets/service_airport.jpeg',
    iconName: 'Plane'
  },
  {
    id: 'local-intercity',
    number: '03',
    title: 'Local & Intercity Travel',
    categoryTag: 'Twin-City Commute',
    shortDesc: 'Hourly rentals and convenient twin-city packages for errands, meetings, and local sightseeing in Hubli-Dharwad.',
    fullDesc: 'Explore Hubli and Dharwad with complete flexibility. Visit Unkal Lake, Nrupatunga Betta, Chandramouleshwara Temple, Karnataka University campus, or manage corporate meetings without parking hassles.',
    highlights: [
      'Flexible hourly and full-day rental packages',
      'Direct transit along the Hubli-Dharwad twin-city corridor',
      'Courteous city-wise drivers who know local landmarks',
      'AC cars and Tempo Travellers ready on short notice'
    ],
    imageUrl: '/assets/service_local.jpeg',
    iconName: 'Navigation'
  },
  {
    id: 'corporate-travel',
    number: '04',
    title: 'Corporate Travel & Staff Transit',
    categoryTag: 'Business Logistics',
    shortDesc: 'Professional executive sedans, client transportation, and employee group shuttles for companies in North Karnataka.',
    fullDesc: 'Sanju Tours & Travels serves leading manufacturing hubs, IT firms, and corporate delegations visiting Tarihal, Belur Industrial Area, Navanagar, and regional offices across Karnataka.',
    highlights: [
      'Executive sedans (Dzire, Innova Crysta) for VIP guests',
      'Monthly corporate contracts and itemized GST billing',
      'Disciplined, well-attired drivers with punctual track records',
      'Factory inspection tours and multi-site client visits'
    ],
    imageUrl: '/assets/service_corporate.jpeg',
    iconName: 'Briefcase'
  },
  {
    id: 'wedding-transportation',
    number: '05',
    title: 'Wedding & Event Transportation',
    categoryTag: 'Celebrations & Convoys',
    shortDesc: 'Punctual guest shuttles, decorated bridal cars, and high-capacity buses orchestrated around your wedding calendar.',
    fullDesc: 'We manage end-to-end transportation for marriage parties: railway station pickups for incoming guests, venue transfers, and decorated bridal vehicles so your special days proceed smoothly.',
    highlights: [
      'Fleet coordination matching guest arrival schedules',
      'Decorated groom and bridal car options',
      'Tempo Travellers and luxury coaches for large family barats',
      'Dedicated transport coordinator on call 24/7'
    ],
    imageUrl: '/assets/service_wedding.jpeg',
    iconName: 'HeartHandshake'
  },
  {
    id: 'customized-tours',
    number: '06',
    title: 'Customized Holiday Tours',
    categoryTag: 'Tailored Journeys',
    shortDesc: 'Bespoke multi-day travel itineraries designed around your preferred pace, stops, and vehicle preferences.',
    fullDesc: 'Whether you wish to combine the wildlife of Dandeli with the beaches of Gokarna, or explore the ruins of Hampi and Badami cave temples, we craft a custom travel plan suited precisely to your timetable.',
    highlights: [
      'Handcrafted itineraries tailored to your family or group',
      'Choice of premium sedans, Tempo Travellers, or private coaches',
      'Local sightseeing recommendations and driver guidance',
      'All-inclusive pricing structure with transparent terms'
    ],
    imageUrl: '/assets/service_custom_tours.jpeg',
    iconName: 'Map'
  }
];
