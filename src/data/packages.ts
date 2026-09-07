export interface Package {
  id: string;
  title: string;
  duration: string;
  category: string;
  location: string;
  shortDesc: string;
  highlights: string[];
  vehicleRecommendation: string;
  pricingLabel: string;
  imageUrl: string;
  /** Marks the single flagship itinerary — shows a small distinguishing
   *  badge on its card. Set on at most one package at a time. */
  featured?: boolean;
}

export const PACKAGES: Package[] = [
  {
    id: 'dandeli-adventure',
    title: 'Dandeli River & Safari Adventure',
    duration: '2 Days / 1 Night',
    category: 'Adventure',
    location: 'Dandeli & Anshi Tiger Reserve, Karnataka',
    shortDesc: 'Designed for couples, friend groups, and families seeking Kali river rafting, wildlife spotting, and jungle tranquility.',
    highlights: [
      'Grade 2 & 3 whitewater rafting on Kali River',
      'Morning open-jeep jungle safari in Dandeli reserve',
      'Visit to ancient volcanic Syntheri Rocks',
      'Campfire, bird watching, and natural jacuzzi baths'
    ],
    vehicleRecommendation: 'Innova Crysta (6-7 pax) or 12 Seater Tempo Traveller',
    pricingLabel: 'Custom quote based on group size',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'chalukya-heritage',
    title: 'Chalukya Heritage Circuit',
    duration: '2 Days / 1 Night',
    category: 'UNESCO Heritage',
    location: 'Badami, Aihole & Pattadakal, Karnataka',
    shortDesc: 'A captivating journey into early southern Indian rock architecture, 6th-century caves, and lakeside sanctums.',
    highlights: [
      'Badami 4 Rock-Cut Cave Temples & Agastya Lake',
      'Pattadakal UNESCO World Heritage temple enclave',
      'Aihole experimental temple architecture complex',
      'Local authentic North Karnataka Jolada Roti meals'
    ],
    vehicleRecommendation: 'Dzire / Ertiga / 12-17 Seater Tempo Traveller',
    pricingLabel: 'Custom quote based on group size',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'hampi-empire',
    title: 'Hampi Vijayanagara Imperial Trail',
    duration: '2 Days / 1 Night',
    category: 'World Heritage',
    location: 'Hampi & Tungabhadra River, Karnataka',
    shortDesc: 'Step into the legendary empire ruins, boulder-strewn sunsets, and ancient temple corridors of Vijayanagara.',
    highlights: [
      'Virupaksha Temple & Vijaya Vittala Stone Chariot',
      'Acoustic musical pillars and King’s Balance',
      'Sunset hike up Matanga Hill / Hemakuta Hill',
      'Tungabhadra River traditional coracle boat cruise'
    ],
    vehicleRecommendation: 'Toyota Innova Crysta or Force Urbania 17 Seater',
    pricingLabel: 'Custom quote based on group size',
    imageUrl: '/assets/packages_hero.jpeg',
    featured: true
  },
  {
    id: 'gokarna-murudeshwar',
    title: 'Gokarna Beach & Murudeshwar Pilgrimage',
    duration: '3 Days / 2 Nights',
    category: 'Beach & Coastal Pilgrimage',
    location: 'Gokarna, Murudeshwar & Honavar, Karnataka',
    shortDesc: 'Blend sacred coastal shrines with serene pristine beaches and tranquil mangrove backwater boardwalks.',
    highlights: [
      'Mahabaleshwar Temple Atmalinga Darshan & Om Beach',
      'Murudeshwar Shiva Statue & Raja Gopura beach views',
      'Honavar Sharavathi River boating boardwalk',
      'Mirjan Fort historical walk'
    ],
    vehicleRecommendation: 'Innova Crysta / 17-Seater Tempo Traveller',
    pricingLabel: 'Custom quote based on group size',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
  }
];
