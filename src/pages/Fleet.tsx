import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Car, Truck, Bus, Users } from 'lucide-react';
import { FleetSection } from '../components/FleetSection';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
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
                  Our Fleet in<br />Hubballi, Karnataka.
                </h1>
              </Reveal>

              <Reveal y={10} delay={0.2}>
                <p className="font-accent italic text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#c5e384] leading-snug">
                  Every journey deserves the right ride.
                </p>
              </Reveal>

              <Reveal y={8} delay={0.3}>
                <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed max-w-[420px] lg:max-w-[560px]">
                  AC sedans, SUVs, 12-seater Tempo Travellers and tourist coaches — all with
                  transparent per-km rates, verified drivers and 24/7 dispatch across
                  Hubballi-Dharwad and outstation Karnataka.
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

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Fleet' }]} />

      {/* Full Fleet Grid with Filter Chips */}
      <FleetSection showViewAll={false} />

      {/* Topical body content for on-page depth */}
      <section className="py-12 sm:py-16 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#200f07]">
            Renting a Cab or Tempo Traveller in Hubballi
          </h2>
          <p className="text-sm text-[#200f07]/70 leading-relaxed">
            Sanju Tours &amp; Travels maintains a mixed fleet based in Hubballi so you can pick a
            vehicle sized to your trip — a Swift Dzire or Maruti Ertiga for a quick Hubli
            Airport (HBX) run or a Dharwad business meeting, an Innova Crysta or Force Trax
            Cruiser for family outstation travel, and a 12-seater Tempo Traveller or 33-seater
            tourist coach for weddings, pilgrimages and group tours. Every vehicle is offered
            with a published per-km rate for both Non-AC and AC, a fixed driver bata, and a
            standard 300 km/day minimum on outstation trips — the same numbers you see on each
            card above, confirmed in writing before you travel.
          </p>
          <p className="text-sm text-[#200f07]/70 leading-relaxed">
            Need a vehicle for a specific route? See our{' '}
            <Link to="/routes" className="font-semibold text-[#200f07] underline decoration-[#200f07]/30 hover:decoration-[#200f07]">
              outstation cab routes across Karnataka
            </Link>{' '}
            for real distances, drive times and starting fares to Bengaluru, Mysuru, Mangaluru,
            Belagavi and more.
          </p>
        </div>
      </section>

      {/* Booking Consultation CTA */}
      <CTASection />
    </main>
  );
};
