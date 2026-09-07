export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  distance: string;
  travelTime: string;
  description: string;
  attractions: string[];
  imageUrl: string;
  popularVehicle: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'dandeli',
    name: 'Dandeli & Anshi Tiger Reserve',
    subtitle: 'River Rafting & Jungle Safari',
    tag: 'River & Wildlife',
    distance: '75 km from Hubli',
    travelTime: '~2 Hours',
    description: 'A verdant adventure sanctuary nestled in the Western Ghats along the Kali River, famous for whitewater rafting, dense teak forests, and hornbill sanctuaries.',
    attractions: ['Kali River Whitewater Rafting', 'Dandeli Wildlife Safari', 'Syntheri Rocks Monolith', 'Supa Dam Backwaters'],
    imageUrl: '/assets/destination_dandeli.jpeg',
    popularVehicle: 'Innova Crysta / 12-Seater Tempo'
  },
  {
    id: 'badami',
    name: 'Badami, Aihole & Pattadakal',
    subtitle: 'Cradle of Chalukyan Architecture',
    tag: 'UNESCO Heritage',
    distance: '105 km from Hubli',
    travelTime: '~2.5 Hours',
    description: 'A mesmerizing historical circuit of 6th-century red sandstone rock-cut cave temples, Agastya Lake waters, and UNESCO World Heritage temple complexes.',
    attractions: ['Badami Rock Cave Temples', 'Agastya Theertha Lake & Bhutanatha Temple', 'Pattadakal UNESCO Monuments', 'Aihole Durga Temple Complex'],
    imageUrl: '/assets/destination_badami.jpeg',
    popularVehicle: 'Sedan / Innova Crysta / Tempo Traveller'
  },
  {
    id: 'hampi',
    name: 'Hampi Vijayanagara Ruins',
    subtitle: 'Boulders & Imperial Splendour',
    tag: 'World Heritage',
    distance: '160 km from Hubli',
    travelTime: '~3.5 Hours',
    description: 'The monumental capital of the 14th-century Vijayanagara Empire, set against an ancient surreal landscape of giant granite boulders and sacred riverbanks.',
    attractions: ['Virupaksha Temple', 'Vijaya Vittala Stone Chariot', 'Lotus Mahal & Elephant Stables', 'Tungabhadra River Sunset Coracle Ride'],
    imageUrl: '/assets/destination_hampi.jpeg',
    popularVehicle: 'Innova Crysta / Force Urbania'
  },
  {
    id: 'gokarna',
    name: 'Gokarna & Karwar',
    subtitle: 'Golden Coast & Ancient Temples',
    tag: 'Beach & Temple',
    distance: '150 km from Hubli',
    travelTime: '~3.5 Hours',
    description: 'Where the Western Ghats meet the Arabian Sea. Unspoilt crescent beaches, sacred coastal shrines, and serene coastal sunsets.',
    attractions: ['Om Beach & Kudle Beach', 'Mahabaleshwar Coastal Temple', 'Mirjan Fort Heritage', 'Karwar Rabindranath Tagore Beach'],
    imageUrl: '/assets/destination_gokarna.jpeg',
    popularVehicle: 'Ertiga / Innova / Tempo Traveller'
  },
  {
    id: 'goa',
    name: 'Goa Coastal Getaway',
    subtitle: 'Beaches, Heritage & Nightlife',
    tag: 'Coastal Holiday',
    distance: '140 km from Hubli',
    travelTime: '~3.5 Hours',
    description: 'A smooth highway drive over the ghats into sun-kissed beaches, colonial Portuguese architecture, and premier beachside dining.',
    attractions: ['South Goa Quiet Beaches', 'North Goa Heritage & Cafes', 'Old Goa Basilica of Bom Jesus', 'Dudhsagar Waterfalls Trek'],
    imageUrl: '/assets/destination_goa.jpeg',
    popularVehicle: 'Innova Crysta / 17-Seater Tempo'
  },
  {
    id: 'jog-falls',
    name: 'Jog Falls & Western Ghats',
    subtitle: 'India’s Legendary Plunge Waterfall',
    tag: 'Waterfalls & Hills',
    distance: '160 km from Hubli',
    travelTime: '~3.5 Hours',
    description: 'Watch the Sharavathi River drop precipitously 253 meters in four distinct cascades: Raja, Roarer, Rocket, and Rani.',
    attractions: ['Jog Falls Viewing Deck', 'Sharavathi Valley Viewpoint', 'Honavar Mangrove Boardwalk', 'Lush Forest Ghat Roads'],
    imageUrl: '/assets/destination_jogfalls.jpeg',
    popularVehicle: 'Sedan / SUV / Tempo Traveller'
  }
];
