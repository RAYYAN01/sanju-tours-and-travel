import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { RouteSelector } from './RouteSelector';
import { RouteTravelMap } from './RouteTravelMap';
import { RouteInfoCard } from './RouteInfoCard';
import { Reveal } from './motion/Reveal';

const DEFAULT_DESTINATION_ID = 'goa';

export const RouteTravelSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState(DEFAULT_DESTINATION_ID);

  const selectedDestination =
    DESTINATIONS.find(d => d.id === selectedId) ?? DESTINATIONS[0];

  return (
    <div aria-label="Interactive route planner" className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* LEFT: Route text & controls */}
      <Reveal className="lg:col-span-4 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-display font-bold uppercase tracking-widest text-[#c5e384] block">
            Plan Your Route
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Pick a Destination, <span className="font-accent italic font-bold text-[#c5e384]">See the Drive</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#fff9eb]/75 leading-relaxed">
            Choose where you're headed and we'll plot the road from Hubli — distance, drive time, and a direct line to book.
          </p>
        </div>

        <RouteSelector
          destinations={DESTINATIONS}
          selectedId={selectedId}
          onChange={setSelectedId}
        />

        <RouteInfoCard destination={selectedDestination} />
      </Reveal>

      {/* RIGHT: Interactive Map */}
      <Reveal className="lg:col-span-8 lg:pl-6" delay={0.15} y={24}>
        <RouteTravelMap
          originLabel="Hubli"
          destinationLabel={selectedDestination.name.split(',')[0].split('&')[0].trim()}
        />
      </Reveal>
    </div>
  );
};
