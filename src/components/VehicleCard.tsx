import React from 'react';
import { Users, Briefcase, Check, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { Vehicle } from '../data/vehicles';
import { useBookingModal } from '../context/BookingModalContext';
import { openWhatsAppEnquiry, PHONE_TEL_HREF } from '../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const { openModal } = useBookingModal();

  const handleWhatsApp = () => {
    openWhatsAppEnquiry({
      vehicle: vehicle.name,
      requirements: `Enquiring about ${vehicle.name} (${vehicle.seating}) for our travel plan.`
    });
  };

  return (
    <article className="card-editorial h-full flex flex-col justify-between overflow-hidden group hover:shadow-card hover:border-[rgba(32,15,7,0.28)] transition-[box-shadow,border-color] duration-300">
      <div>
        {/* Uncropped Image Container with Aspect Ratio */}
        <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-[#200f07]/5 overflow-hidden">
          <img
            src={vehicle.imageUrl}
            alt={`${vehicle.name} rental in Hubli`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="bg-[#200f07]/90 backdrop-blur-sm text-white text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
              {vehicle.categoryLabel}
            </span>
            {vehicle.badge && (
              <span className="bg-[#200f07] text-white text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                {vehicle.badge}
              </span>
            )}
          </div>

          {/* Pricing Tag Overlay */}
          <div className="absolute bottom-3 left-3 bg-[#fff9eb]/95 backdrop-blur-sm text-[#200f07] border border-[#200f07]/15 px-2.5 py-1 rounded-md text-xs font-display font-extrabold shadow-sm">
            {vehicle.rateStarting}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#200f07] group-hover:text-[#200f07] transition-colors">
                {vehicle.name}
              </h3>
              <p className="text-[11px] text-[#200f07]/70 mt-0.5 font-medium">
                {vehicle.pricingDetails}
              </p>
            </div>
          </div>

          {/* Capacity & Luggage Specs */}
          <div className="flex items-center gap-4 py-2 border-y border-[#200f07]/8 text-xs font-medium text-[#200f07]">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#200f07]" />
              <span>{vehicle.seating}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#200f07]/70">
              <Briefcase className="w-4 h-4 text-[#200f07]" />
              <span>{vehicle.luggage}</span>
            </div>
          </div>

          {/* Rate Card Table — Non-AC / AC / Batta / Average */}
          <div className="grid grid-cols-4 rounded-lg overflow-hidden border border-[#200f07]/12">
            {[
              { label: 'Non-AC', value: vehicle.rateNonAc },
              { label: 'AC', value: vehicle.rateAc },
              { label: 'Batta', value: vehicle.batta },
              { label: 'Average', value: vehicle.avgKm }
            ].map((cell, i) => (
              <div
                key={cell.label}
                className={`px-1.5 py-1.5 text-center ${i !== 0 ? 'border-l border-[#200f07]/12' : ''}`}
              >
                <span className="block text-[9px] font-display font-bold uppercase tracking-wider text-[#200f07]/60">
                  {cell.label}
                </span>
                <span className="block text-xs font-display font-extrabold text-[#200f07] mt-0.5">
                  {cell.value}
                </span>
              </div>
            ))}
          </div>

          {/* Short Description */}
          <p className="text-xs text-[#200f07]/70 leading-relaxed line-clamp-2">
            {vehicle.description}
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {vehicle.features.slice(0, 3).map((feat, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#fff9eb] text-[10px] font-semibold text-[#200f07]"
              >
                <Check className="w-2.5 h-2.5 text-[#200f07]" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 sm:p-6 pt-3 border-t border-[#200f07]/8 flex items-center gap-2">
        <button
          type="button"
          onClick={() => openModal(`Vehicle Booking: ${vehicle.name}`, vehicle.name)}
          className="btn-shine flex-1 btn-accent text-xs py-2.5 rounded-lg tracking-wider"
        >
          <span>Book Ride</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-10 h-10 rounded-lg bg-[#200f07] border border-[#c5e384]/40 text-[#c5e384] hover:bg-[#c5e384] hover:text-[#200f07] flex items-center justify-center shrink-0 transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384] focus-visible:ring-offset-1"
          title={`Enquire on WhatsApp about ${vehicle.name}`}
          aria-label={`Enquire on WhatsApp about ${vehicle.name}`}
        >
          <MessageSquare className="w-4 h-4" />
        </button>

        <a
          href={PHONE_TEL_HREF}
          className="w-10 h-10 rounded-lg bg-[#200f07] border border-[#c5e384]/40 text-[#c5e384] hover:bg-[#c5e384] hover:text-[#200f07] flex items-center justify-center shrink-0 transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384] focus-visible:ring-offset-1"
          title="Call to book"
          aria-label={`Call to book ${vehicle.name}`}
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};
