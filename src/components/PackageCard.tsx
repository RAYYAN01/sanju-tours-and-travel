import React from 'react';
import { Clock, MapPin, ArrowRight, Crown } from 'lucide-react';
import { Package } from '../data/packages';
import { useBookingModal } from '../context/BookingModalContext';

interface PackageCardProps {
  pkg: Package;
}

// Editorial travel-magazine package card: photography on top (rounded top
// corners only, floating pill badges), a clean Vanilla Custard info panel
// below carrying name / location / description, then a quiet metadata +
// CTA footer — matching the reference "Card Style – Packages" layout
// rather than text-over-photo.
export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const { openModal } = useBookingModal();

  return (
    <article className="group h-full flex flex-col rounded-card overflow-hidden border border-[#200f07]/12 bg-[#fff9eb] shadow-subtle hover:shadow-card transition-shadow duration-300">
      {/* Photography */}
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />

        {/* Floating badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span
            className={`text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
              pkg.featured
                ? 'bg-[#c5e384] text-[#200f07]'
                : 'bg-[#200f07]/85 backdrop-blur-sm text-white'
            }`}
          >
            {pkg.featured ? (
              <span className="inline-flex items-center gap-1"><Crown className="w-3 h-3" />Popular</span>
            ) : (
              pkg.category
            )}
          </span>
          <span className="bg-[#fff9eb]/95 backdrop-blur-sm text-[#200f07] border border-[#200f07]/10 text-[10px] font-display font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm shrink-0">
            <Clock className="w-3 h-3" />
            {pkg.duration}
          </span>
        </div>
      </div>

      {/* Info panel — grows to fill remaining card height, footer pinned
          to the bottom via justify-between so rows align across a grid
          regardless of how many lines the title/description wrap to. */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#200f07] leading-snug">
              {pkg.title}
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#200f07]/70 mt-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{pkg.location}</span>
            </div>
          </div>

          <p className="text-xs sm:text-[13px] text-[#200f07]/70 leading-relaxed line-clamp-2">
            {pkg.shortDesc}
          </p>
        </div>

        {/* Footer metadata + CTA */}
        <div className="flex items-center justify-between gap-3 pt-3 mt-2.5 border-t border-[#200f07]/10">
          <span className="text-[11px] font-medium text-[#200f07]/70">
            {pkg.pricingLabel}
          </span>
          <button
            type="button"
            onClick={() => openModal(`Package Quote: ${pkg.title}`)}
            className="btn-accent text-[11px] py-2 px-3.5 tracking-wider shrink-0"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};
