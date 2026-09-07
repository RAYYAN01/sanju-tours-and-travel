export interface OutstationRoute {
  destination: string;
  distance: string;
  estimatedTime: string;
  recommendedVehicle: string;
  startingRate: string;
}

export const POPULAR_ROUTES: OutstationRoute[] = [
  {
    destination: 'Hubli to Dandeli Cab',
    distance: '75 km',
    estimatedTime: '2 hrs',
    recommendedVehicle: 'Sedan / Innova / 12-Seater Tempo',
    startingRate: '₹13/km'
  },
  {
    destination: 'Hubli to Goa (North & South) Cab',
    distance: '140 km',
    estimatedTime: '3.5 hrs',
    recommendedVehicle: 'Innova Crysta / 17-Seater Tempo',
    startingRate: '₹13/km'
  },
  {
    destination: 'Hubli to Badami Heritage Cab',
    distance: '105 km',
    estimatedTime: '2.5 hrs',
    recommendedVehicle: 'Swift Dzire / Ertiga / Tempo',
    startingRate: '₹13/km'
  },
  {
    destination: 'Hubli to Hampi Imperial Cab',
    distance: '160 km',
    estimatedTime: '3.5 hrs',
    recommendedVehicle: 'Innova Crysta / Force Urbania',
    startingRate: '₹13/km'
  },
  {
    destination: 'Hubli to Gokarna Beach Cab',
    distance: '150 km',
    estimatedTime: '3.5 hrs',
    recommendedVehicle: 'Ertiga / Innova / Tempo Traveller',
    startingRate: '₹13/km'
  },
  {
    destination: 'Hubli to Bengaluru Highway Cab',
    distance: '410 km',
    estimatedTime: '6.5 hrs',
    recommendedVehicle: 'Sedan / Innova Crysta',
    startingRate: '₹13/km'
  },
  {
    destination: 'Hubli to Belgaum (Belagavi) Cab',
    distance: '100 km',
    estimatedTime: '2 hrs',
    recommendedVehicle: 'Sedan / MUV',
    startingRate: '₹13/km'
  },
  {
    destination: 'Hubli to Murudeshwar Cab',
    distance: '205 km',
    estimatedTime: '4.5 hrs',
    recommendedVehicle: 'Innova Crysta / Tempo Traveller',
    startingRate: '₹13/km'
  }
];
