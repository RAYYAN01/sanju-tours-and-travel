export interface Testimonial {
  id: string;
  name: string;
  trip: string;
  rating: number;
  comment: string;
  initials: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Kulkarni',
    trip: 'Family Trip to Dandeli (17 Seater Tempo)',
    rating: 5,
    comment: 'Booking was straightforward and the driver arrived 15 minutes early at Hubli Railway Station. The Tempo Traveller was spotless and handled the ghat curves to Dandeli smoothly. Fair per-km pricing with no surprises.',
    initials: 'RK',
    location: 'Hubli'
  },
  {
    id: '2',
    name: 'Ananya Patil',
    trip: 'Hubballi Airport (HBX) Transfer',
    rating: 5,
    comment: 'The cab arrived well ahead of our morning flight at Hubli Airport. The driver helped with our heavy luggage and drove very calmly. Transparent per-km rates and zero hidden charges. Highly recommend for airport drops.',
    initials: 'AP',
    location: 'Dharwad'
  },
  {
    id: '3',
    name: 'Deepak Rao',
    trip: 'Corporate Offsite to Goa (25 Seater Bus)',
    rating: 5,
    comment: 'Booked a 25 seater mini bus for our software company team outing to South Goa from Hubli. The bus was very clean with strong AC and comfortable reclining seats. Driver had exceptional highway etiquette.',
    initials: 'DR',
    location: 'Navanagar, Hubli'
  },
  {
    id: '4',
    name: 'Sunil Bennur',
    trip: 'Badami & Hampi Heritage Circuit (Innova Crysta)',
    rating: 5,
    comment: 'Took our elderly parents on a 3-day UNESCO heritage trip to Badami and Hampi. The Innova Crysta was in showroom condition and the driver was immensely patient and knowledgeable about parking spots near the monuments.',
    initials: 'SB',
    location: 'Hubballi'
  }
];
