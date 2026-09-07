import React, { useEffect } from 'react';
import { ArrowDown, Car, Truck, Bus, Users } from 'lucide-react';
import { FleetSection } from '../components/FleetSection';
import { CTASection } from '../components/CTASection';
import { Reveal } from '../components/motion/Reveal';

export const Fleet: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Fleet Hero — the illustration is untouched (full image, native aspect ratio).
          Editorial copy sits in the top-left quiet sky band — the area of strongest
          natural contrast — well clear of the central map-pin graphic and the temple
          landscape beneath it. No cards, no solid text box; just type and negative space. */}
      <section className="relative bg-[#fff9eb] border-b border-[#200f07]/10 overflow-hidden">
        <div className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[760px]" style={{ aspectRatio: '1599 / 893' }}>
          <img
            src="/assets/fleet_hero_new.jpg"
            alt="Sunset view of the Badami rock temples by the lake, with a route pin and a bus, tempo traveller, and sedan travelling past a city skyline"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          {/* Subtle espresso-tinted wash behind the copy only — the photograph stays fully visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#200f07]/75 via-[#200f07]/35 to-transparent" />

          <div className="absolute inset-0 pt-14 sm:pt-20 lg:pt-24 pl-4 sm:pl-10 lg:pl-16 pr-4 flex items-start">
            <div className="max-w-[520px] lg:max-w-[700px] xl:max-w-[760px] text-left space-y-4 sm:space-y-5">
              <Reveal y={8} delay={0}>
                <span className="block text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white/75">
                  Our Fleet
                </span>
              </Reveal>

              <Reveal y={10} delay={0.1}>
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Every Journey<br />Deserves the Right Ride.
                </h1>
              </Reveal>

              <Reveal y={10} delay={0.2}>
                <p className="font-accent italic text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#c5e384] leading-snug">
                  Comfort that travels with you.
                </p>
              </Reveal>

              <Reveal y={8} delay={0.3}>
                <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed max-w-[420px] lg:max-w-[560px]">
                  From city rides to long-distance journeys, experience comfort, reliability and effortless travel.
                </p>
              </Reveal>

              <Reveal y={8} delay={0.36} className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {[
                  { icon: Car, label: 'Sedans' },
                  { icon: Truck, label: 'SUVs' },
                  { icon: Users, label: 'Travellers' },
                  { icon: Bus, label: 'Coaches' },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold text-white/90 shadow-subtle"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#c5e384]" />
                    {label}
                  </span>
                ))}
              </Reveal>

              <Reveal y={8} delay={0.42} className="pt-1 sm:pt-2">
                <a
                  href="#fleet"
                  className="group btn-accent text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 tracking-wider shadow-md"
                >
                  <span>Explore Our Fleet</span>
                  <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Full Fleet Grid with Filter Chips */}
      <FleetSection showViewAll={false} />

      {/* Booking Consultation CTA */}
      <CTASection />
    </main>
  );
};
