import React from 'react';
import { Compass, ChevronDown } from 'lucide-react';
import { Destination } from '../data/destinations';

interface RouteSelectorProps {
  destinations: Destination[];
  selectedId: string;
  onChange: (id: string) => void;
}

export const RouteSelector: React.FC<RouteSelectorProps> = ({ destinations, selectedId, onChange }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4">
      {/* Fixed Origin Pill */}
      <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#fff9eb] border border-[#200f07]/15 shadow-subtle font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#200f07]">
        <span className="w-2 h-2 rounded-full bg-[#200f07] shrink-0" aria-hidden="true" />
        Hubli
      </span>

      {/* Route Connector */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0" aria-hidden="true">
        <span className="w-4 sm:w-8 h-px border-t border-dashed border-[#200f07]/30" />
        <span className="w-7 h-7 rounded-full bg-[#200f07] text-[#c5e384] flex items-center justify-center shrink-0">
          <Compass className="w-3.5 h-3.5" />
        </span>
        <span className="w-4 sm:w-8 h-px border-t border-dashed border-[#200f07]/30" />
      </div>

      {/* Destination Selector Pill (native select for full accessibility) */}
      <div className="relative">
        <label htmlFor="route-destination-select" className="sr-only">
          Choose your destination
        </label>
        <select
          id="route-destination-select"
          value={selectedId}
          onChange={e => onChange(e.target.value)}
          className="appearance-none pl-4 sm:pl-5 pr-9 py-2.5 rounded-full bg-[#200f07] border border-[#200f07] shadow-subtle font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#200f07]/50"
        >
          {destinations.map(d => (
            <option key={d.id} value={d.id} className="bg-[#fff9eb] text-[#200f07] normal-case">
              {d.name.split(',')[0].split('&')[0].trim()}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3.5 h-3.5 text-[#c5e384] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
};
