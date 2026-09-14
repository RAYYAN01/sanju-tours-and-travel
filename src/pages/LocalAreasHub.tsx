import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ArrowDown } from 'lucide-react';
import { LOCAL_AREAS } from '../data/localities';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const LocalAreasHub: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#200f07]/10 overflow-hidden bg-[#200f07]">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <Reveal y={8} delay={0}>
            <span className="block text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white/75">
              Local Service Areas
            </span>
          </Reveal>
          <Reveal y={10} delay={0.1}>
            <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Cab Service Across Hubballi-Dharwad.
            </h1>
          </Reveal>
          <Reveal y={10} delay={0.2}>
            <p className="font-accent italic text-lg sm:text-xl lg:text-2xl text-[#c5e384] leading-snug">
              A driver near every neighbourhood.
            </p>
          </Reveal>
          <Reveal y={8} delay={0.3}>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              From our Unkal office we dispatch to every major locality in Hubballi and
              Dharwad — airport runs from Gokul Road and Vidyanagar, railway pickups from
              Old Hubli, and twin-city transfers to Dharwad.
            </p>
          </Reveal>
          <Reveal y={8} delay={0.36} className="pt-1 flex justify-center">
            <a
              href="#areas-grid"
              className="group btn-accent text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 tracking-wider shadow-md"
            >
              <span>See All Areas</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Local Areas' }]} />

      <section id="areas-grid" className="py-16 sm:py-24 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" stagger={0.06}>
            {LOCAL_AREAS.map((area) => (
              <StaggerItem key={area.slug}>
                <Link
                  to={`/local/${area.slug}`}
                  className="group card-editorial h-full flex flex-col justify-between p-5 sm:p-6"
                >
                  <div className="space-y-2.5">
                    <span className="badge-tag bg-[#200f07]/10 text-[#200f07]">{area.city}</span>
                    <h2 className="font-display font-bold text-lg text-[#200f07]">{area.name}</h2>
                    <p className="text-xs text-[#200f07]/70 font-medium">{area.tagline}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#200f07]/8 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] text-[#200f07]/60">
                      <MapPin className="w-3.5 h-3.5" />
                      {area.landmarks[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#200f07] uppercase tracking-wider">
                      View
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </main>
  );
};
