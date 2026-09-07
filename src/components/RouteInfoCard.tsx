import React from 'react';
import { Milestone, Navigation, MessageSquare } from 'lucide-react';
import { Destination } from '../data/destinations';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface RouteInfoCardProps {
  destination: Destination;
}

export const RouteInfoCard: React.FC<RouteInfoCardProps> = ({ destination }) => {
  const cleanDistance = destination.distance.replace(' from Hubli', '');
  const destinationName = destination.name.split(',')[0].split('&')[0].trim();

  const viewRouteUrl = `https://www.google.com/maps/dir/?api=1&origin=Hubballi,+Karnataka&destination=${encodeURIComponent(
    destination.name
  )}`;

  const handleEnquire = () => {
    openWhatsAppEnquiry({
      pickup: 'Hubballi',
      destination: destination.name,
      requirements: `Route enquiry: Hubli → ${destination.name} (${cleanDistance}, ${destination.travelTime}). Please share vehicle options and a per-km quote.`
    });
  };

  return (
    <div className="card-editorial p-5 sm:p-6 space-y-5">
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-[#200f07]/10 text-[#200f07] border border-[#200f07]/20 flex items-center justify-center shrink-0">
          <Milestone className="w-5 h-5" />
        </div>
        <div>
          <p className="font-display font-extrabold text-lg sm:text-xl text-[#200f07]">
            Hubli &rarr; {destinationName}
          </p>
          <p className="text-xs sm:text-sm text-[#200f07]/70 font-medium">
            {cleanDistance} &middot; {destination.travelTime} approx.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href={viewRouteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-dark w-full text-xs py-3 px-5 tracking-wider"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>View Route</span>
        </a>
        <button
          type="button"
          onClick={handleEnquire}
          className="btn-accent w-full text-xs py-3 px-5 tracking-wider"
        >
          <span>Enquire Now</span>
          <MessageSquare className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
