import React from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { Destination } from '../data/destinations';
import { useBookingModal } from '../context/BookingModalContext';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { openModal } = useBookingModal();

  const openEnquiry = () => openModal(`Destination Trip: ${destination.name}`);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openEnquiry}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openEnquiry();
        }
      }}
      aria-label={`Enquire about a cab to ${destination.name}`}
      className="group relative rounded-card overflow-hidden border border-[#200f07]/15 shadow-card cursor-pointer min-h-[420px] sm:min-h-[460px] lg:min-h-[480px] bg-[#200f07] flex flex-col justify-end p-6 sm:p-7 transition-[box-shadow,border-color] duration-200 hover:shadow-lifted hover:border-[#200f07]/30 outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384] focus-visible:ring-offset-2"
    >
      {/* Background Image */}
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out opacity-85"
        loading="lazy"
      />

      {/* Dark Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#200f07]/95 via-[#200f07]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-[#200f07] text-white text-[10px] font-display font-bold uppercase tracking-wider">
            {destination.tag}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-[#fff9eb]">
            <MapPin className="w-3.5 h-3.5 text-[#c5e384]" />
            <span>{destination.distance}</span>
          </span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[#fff9eb] transition-colors leading-tight">
          {destination.name}
        </h3>

        <p className="text-xs sm:text-sm text-[#fff9eb]/90 line-clamp-3 leading-relaxed">
          {destination.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs font-display font-bold text-white uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-xs text-[#fff9eb]/75 lowercase font-sans">
            <Clock className="w-3.5 h-3.5 text-[#c5e384]" />
            <span>{destination.travelTime}</span>
          </span>

          <span className="text-[#c5e384] group-hover:text-white flex items-center gap-1.5 transition-colors">
            <span>Enquire Cab</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
};
