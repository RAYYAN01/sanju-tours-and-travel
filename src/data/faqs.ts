export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  {
    question: 'How do I book a vehicle with Sanju Tours & Travels?',
    answer:
      'Call or WhatsApp us on +91 73381 48518, or submit the booking form on this website. We confirm vehicle availability the same day and send an itemised quotation with the per-km rate, driver bata and daily kilometre minimum before you pay anything.',
    category: 'Booking',
  },
  {
    question: 'Why choose Sanju Tours & Travels over app-based or local street cabs?',
    answer:
      'We are a Hubli-Dharwad travel operator rated 4.9/5 across 210+ reviews, with 5,000+ completed trips. Every booking comes with a dedicated commercial-licensed driver, a clean well-maintained vehicle, a written per-km quote with no hidden surge, and 24/7 dispatch support.',
    category: 'Trust & Quality',
  },
  {
    question: 'How is outstation pricing calculated? Are there hidden charges?',
    answer:
      'Outstation trips are billed on a fixed per-kilometre rate — from ₹11/km for a Swift Dzire sedan, ₹15/km for a Maruti Ertiga, ₹17/km for an Innova Crysta, ₹20/km for a 12-seater Tempo Traveller and ₹45/km for a 33-seater tourist coach — with a 300 km/day minimum plus a fixed driver bata per calendar day. Tolls, state permits and parking are paid at actuals. There are no other charges.',
    category: 'Pricing',
  },
  {
    question: 'Do you provide airport transfers to Hubballi Airport (HBX)?',
    answer:
      'Yes. We run 24/7 airport taxi pickups and drops for Hubballi Airport (HBX) on Gokul Road. We track your flight so the driver is ready on arrival, and we cover Hubli, Dharwad, Navanagar, Vidyanagar and nearby towns.',
    category: 'Services',
  },
  {
    question: 'Do you offer one-way drops to Goa, Bengaluru or Belgaum?',
    answer:
      'Yes. We do one-way drops and multi-day round trips from Hubli to Goa, Belgaum, Bengaluru, Dandeli, Gokarna, Badami and Hampi. You get a clear one-way fare quote before the trip.',
    category: 'Outstation',
  },
  {
    question: 'Can I book a Tempo Traveller or coach for wedding shuttles and group events?',
    answer:
      'Yes — group and wedding transport is one of our main services. We run a 12-seater Force Tempo Traveller and a 33-seater tourist coach, and coordinate timing with railway arrivals at Hubballi Junction, airport drops and hotel-to-venue convoys.',
    category: 'Weddings & Groups',
  },
];
