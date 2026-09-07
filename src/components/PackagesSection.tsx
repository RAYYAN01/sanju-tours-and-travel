import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { PACKAGES } from '../data/packages';
import { POPULAR_ROUTES } from '../data/routes';
import { PackageCard } from './PackageCard';
import { useBookingModal } from '../context/BookingModalContext';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';

export const PackagesSection: React.FC = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="packages" className="section-tight bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-px bg-[#200f07]/40" />
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07]">
                Curated Itineraries
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#200f07] tracking-tight">
              Handpicked <span className="font-accent italic font-bold text-[#8fae52]">Getaways</span> From Hubballi
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#200f07]/70 max-w-xl">
              Curated multi-day road trips you can customize according to your schedule — select an itinerary or let our team craft a bespoke journey.
            </p>
          </div>

          <Link
            to="/packages"
            className="group btn-accent text-xs py-2.5 px-5 tracking-wider shrink-0 self-start md:self-auto shadow-md"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        {/* Packages Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6" stagger={0.08}>
          {PACKAGES.slice(0, 3).map(pkg => (
            <StaggerItem key={pkg.id}>
              <PackageCard pkg={pkg} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Popular Outstation Cab Routes Strip */}
        <Reveal className="rounded-card bg-[#fff9eb] border border-[#200f07]/12 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-[10px] font-display uppercase tracking-widest text-[#200f07] font-bold block">
                Direct Highway Routes
              </span>
              <h3 className="font-display font-bold text-lg text-[#200f07]">
                Popular Cab Routes From Hubballi
              </h3>
            </div>
            <p className="text-xs text-[#200f07]/70">
              Standard outstation fares with itemized daily km tracking
            </p>
          </div>

          <StaggerGroup className="flex flex-wrap gap-2" stagger={0.04}>
            {POPULAR_ROUTES.map((route, i) => (
              <StaggerItem key={i} y={10}>
                <button
                  type="button"
                  onClick={() => openModal(`Cab Booking: ${route.destination}`)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#fff9eb] border border-[#200f07]/12 text-xs font-semibold text-[#200f07] hover:border-[#200f07] hover:text-[#200f07] transition-colors duration-150 shadow-subtle text-left"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#200f07] shrink-0" />
                  <span>{route.destination}</span>
                  <span className="text-[10px] font-bold text-[#200f07] bg-[#fff9eb] px-1.5 py-0.5 rounded">
                    {route.distance}
                  </span>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

      </div>
    </section>
  );
};
