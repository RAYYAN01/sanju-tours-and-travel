import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { VEHICLES, VEHICLE_CATEGORIES } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';

interface FleetSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ limit, showViewAll = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredVehicles = VEHICLES.filter(v => {
    if (activeCategory === 'all') return true;
    return v.category === activeCategory;
  });

  const displayedVehicles = limit ? filteredVehicles.slice(0, limit) : filteredVehicles;

  return (
    <section id="fleet" className="py-8 sm:py-11 bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07] block mb-1.5">
              Well-Maintained Fleet
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#200f07] tracking-tight">
              A Vehicle for <span className="font-accent italic font-bold text-[#8fae52]">Every Group Size</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#200f07]/70 max-w-xl">
              From compact sedans for twin-city business trips to 55-seater tourist coaches for grand wedding convoys — maintained, sanitized, and ready for your departure.
            </p>
          </div>

          {showViewAll && (
            <Link
              to="/fleet"
              className="group btn-accent text-xs py-2.5 px-5 tracking-wider shrink-0 self-start md:self-auto shadow-md"
            >
              <span>View Full Fleet ({VEHICLES.length})</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {VEHICLE_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-semibold uppercase tracking-wider transition-[background-color,color,border-color,transform] duration-200 whitespace-nowrap hover:-translate-y-0.5 active:scale-95 ${
                  isActive
                    ? 'bg-[#200f07] text-[#fff9eb] shadow-sm'
                    : 'bg-[#fff9eb] text-[#200f07] border border-[#200f07]/12 hover:border-[#200f07]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" stagger={0.08}>
          {displayedVehicles.map(vehicle => (
            <StaggerItem key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </StaggerItem>
          ))}
        </StaggerGroup>

      </div>
    </section>
  );
};
