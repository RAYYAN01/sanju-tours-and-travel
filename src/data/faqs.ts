export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  {
    question: 'How do I book a vehicle with Sanju Tours & Travels?',
    answer: 'You can submit an enquiry using the booking bar on this website, or reach us directly via call or WhatsApp at +91 73381 48518. We immediately confirm vehicle availability, share an itemized transparent quotation with all per-km rates, driver allowances, and payment terms before you confirm.',
    category: 'Booking'
  },
  {
    question: 'Why choose Sanju Tours & Travels over app-based or local street cabs?',
    answer: 'Sanju Tours & Travels is a top-rated travel service in Hubli-Dharwad with a 4.9-star rating and over 5,000 successful journeys. Unlike unpredictable aggregators, every ride comes with dedicated commercial-licensed drivers, well-maintained sanitized vehicles, clear per-km billing, and reliable 24/7 dispatch support.',
    category: 'Trust & Quality'
  },
  {
    question: 'How is outstation pricing calculated? Are there hidden charges?',
    answer: 'Our pricing is completely transparent. For outstation trips, charges are calculated on a clear per-kilometer rate (e.g., from ₹13/km for sedans, ₹16/km for Ertiga, ₹19/km for Innova Crysta, and ₹30/km for Tempo Travellers) with a standard daily minimum of 300 km plus a clear driver Bata per calendar day. Tolls, state taxes, and parking are payable directly at actuals with zero hidden surcharges.',
    category: 'Pricing'
  },
  {
    question: 'Do you provide airport transfers to Hubballi Airport (HBX)?',
    answer: 'Yes, we provide round-the-clock airport taxi services to Hubballi Airport on Gokul Road. Our team tracks your flight arrival and departure times to guarantee punctual pickups from anywhere in Hubli, Dharwad, Navanagar, or outstation locations with zero flight-stress.',
    category: 'Services'
  },
  {
    question: 'Do you offer one-way drop services to Goa, Bangalore, or Belgaum?',
    answer: 'Yes! We provide convenient one-way drops as well as multi-day round trips from Hubli to major destinations including Goa, Belgaum, Dandeli, Gokarna, Badami, Hampi, and Bengaluru. Clear one-way quotations are provided before travel.',
    category: 'Outstation'
  },
  {
    question: 'Can I book a Tempo Traveller or bus for wedding guest shuttles and large events?',
    answer: 'Yes, we specialize in event and wedding transportation. Our fleet features 9, 12, and 17 seater Tempo Travellers (including the luxury Force Urbania) and 22, 25, 40, and 55 seater luxury coaches. We coordinate schedules matching railway arrivals at Hubli Junction, airport drops, and hotel-to-mandap convoys.',
    category: 'Weddings & Groups'
  }
];
