export interface Vehicle {
  id: string;
  name: string;
  category: 'car' | 'tempo' | 'minibus' | 'bus';
  categoryLabel: string;
  seating: string;
  passengerCapacity: number;
  luggage: string;
  rateStarting: string;
  pricingDetails: string;
  rateNonAc: string;
  rateAc: string;
  batta: string;
  avgKm: string;
  badge?: string;
  description: string;
  idealFor: string[];
  features: string[];
  imageUrl: string;
}

export const VEHICLES: Vehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'car',
    categoryLabel: 'Compact Sedan',
    seating: '4 + 1 Seats',
    passengerCapacity: 4,
    luggage: '2 Medium Bags',
    rateStarting: '₹11/km (Non-AC) · ₹12/km (AC)',
    pricingDetails: 'Min 300 km/day · Driver Bata ₹300/day',
    rateNonAc: '₹11/km',
    rateAc: '₹12/km',
    batta: '₹300',
    avgKm: '300 km',
    badge: 'Economy Pick',
    description: 'A quiet, fuel-efficient sedan ideal for Hubli Airport (HBX) runs, Dharwad business meetings, and short outstation trips.',
    idealFor: ['Airport Transfers', 'City & Intercity Hops', 'Couples & Business Travellers'],
    features: ['Air Conditioning', 'Clean Fabric Seats', 'Music & Bluetooth', 'Fastag Enabled'],
    imageUrl: '/swift.jpeg'
  },
  {
    id: 'force-trax-cruiser',
    name: 'Force Trax Cruiser',
    category: 'car',
    categoryLabel: 'Utility SUV',
    seating: '4 + 1 Seats',
    passengerCapacity: 4,
    luggage: '2 Medium Bags',
    rateStarting: '₹11/km (Non-AC) · ₹12/km (AC)',
    pricingDetails: 'Min 300 km/day · Driver Bata ₹300/day',
    rateNonAc: '₹11/km',
    rateAc: '₹12/km',
    batta: '₹300',
    avgKm: '300 km',
    badge: 'Economy Pick',
    description: 'A dependable, spacious sedan with a large boot — well-suited for outstation trips, airport runs, and daily business travel.',
    idealFor: ['Airport Transfers', 'City & Intercity Hops', 'Business Travellers'],
    features: ['Air Conditioning', 'Spacious Boot', 'Music & Bluetooth', 'Fastag Enabled'],
    imageUrl: '/etios.jpeg'
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    category: 'car',
    categoryLabel: '7-Seater MPV',
    seating: '6 + 1 Seats',
    passengerCapacity: 6,
    luggage: '3 Bags + Flexible Boot',
    rateStarting: '₹15/km (Non-AC) · ₹16/km (AC)',
    pricingDetails: 'Min 300 km/day · Driver Bata ₹300/day',
    rateNonAc: '₹15/km',
    rateAc: '₹16/km',
    batta: '₹300',
    avgKm: '300 km',
    badge: 'Popular Family',
    description: 'A spacious, reliable multi-utility vehicle designed for comfortable family getaways to Dandeli, Goa, and coastal Karnataka.',
    idealFor: ['Family Vacations', 'Weekend Getaways', 'Airport Pickups with Luggage'],
    features: ['Dual AC Vents', 'Foldable 3rd Row', 'Extra Legroom', 'Comfort Suspension'],
    imageUrl: '/innov.jpeg'
  },
  {
    id: 'swift-dzire-new',
    name: 'Swift Dzire (New Model)',
    category: 'car',
    categoryLabel: 'Compact Sedan',
    seating: '7 + 1 Seats',
    passengerCapacity: 7,
    luggage: '4 Large Bags + Boot',
    rateStarting: '₹17/km (Non-AC) · ₹18/km (AC)',
    pricingDetails: 'Min 300 km/day · Driver Bata ₹300/day',
    rateNonAc: '₹17/km',
    rateAc: '₹18/km',
    batta: '₹300',
    avgKm: '300 km',
    badge: 'Executive Standard',
    description: 'The benchmark in Indian highway travel. Plush captain seating, whisper-quiet cabin insulation, and supreme long-distance comfort.',
    idealFor: ['Corporate Offsites', 'VIP Airport Transfers', 'Long Distance Tours'],
    features: ['Plush Captain Seats', 'Individual Climate Zones', 'USB Charging Ports', 'Top Safety Rating'],
    imageUrl: '/crysta.jpeg'
  },
  {
    id: 'tempo-traveller',
    name: 'T T (Tempo Traveller)',
    category: 'tempo',
    categoryLabel: 'Tempo Traveller',
    seating: '12 + 1 Seats',
    passengerCapacity: 12,
    luggage: '12 Bags + Roof Carrier',
    rateStarting: '₹20/km (Non-AC) · ₹24/km (AC)',
    pricingDetails: 'Min 300 km/day · Driver Bata ₹400/day',
    rateNonAc: '₹20/km',
    rateAc: '₹24/km',
    batta: '₹400',
    avgKm: '300 km',
    badge: 'Most Booked Group Ride',
    description: 'North Karnataka’s favorite vehicle for extended family holidays, heritage circuits to Badami-Hampi, and coastal tours to Gokarna.',
    idealFor: ['Extended Family Holidays', 'Pilgrimage Groups', 'Friend Roadtrips'],
    features: ['High-Back Push-back Seats', 'Chilled AC Ducts', 'LED Entertainment Screen', 'Overhead Luggage Racks'],
    imageUrl: '/tt.jpeg'
  },
  {
    id: 'tourist-coach',
    name: 'Tourist Coach',
    category: 'minibus',
    categoryLabel: 'Luxury Coach',
    seating: '30 + 1 Seats',
    passengerCapacity: 30,
    luggage: '20+ Bags Luggage Bay',
    rateStarting: '₹30/km (Non-AC) · ₹35/km (AC)',
    pricingDetails: 'Min 300 km/day · Driver Bata ₹500/day',
    rateNonAc: '₹30/km',
    rateAc: '₹35/km',
    batta: '₹500',
    avgKm: '300 km',
    badge: 'Mid-Sized Group',
    description: 'Tailored for larger travel groups needing a unified ride with full aisle clearance and comfortable push-back passenger seating.',
    idealFor: ['Corporate Outings', 'Pilgrimage Groups', 'Educational Tours'],
    features: ['Wide Centre Aisle', 'Rear Storage Bay', 'Digital Audio System', 'Dual Entry Step'],
    imageUrl: '/bus.jpeg'
  }
];

export const VEHICLE_CATEGORIES = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'car', label: 'Cars & Sedans' },
  { id: 'tempo', label: 'Tempo Travellers' },
  { id: 'minibus', label: 'Mini Buses' },
] as const;
