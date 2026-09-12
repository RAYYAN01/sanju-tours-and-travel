import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, ArrowDown } from 'lucide-react';
import { CAB_ROUTES, estimateFare } from '../data/routes';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const RoutesHub: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#200f07]/10 overflow-hidden bg-[#200f07]">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <Reveal y={8} delay={0}>
            <span className="block text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white/75">
              Outstation Routes
            </span>
          </Reveal>

          <Reveal y={10} delay={0.1}>
            <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Cab Service, All Over Karnataka.
            </h1>
          </Reveal>

          <Reveal y={10} delay={0.2}>
            <p className="font-accent italic text-lg sm:text-xl lg:text-2xl text-[#c5e384] leading-snug">
              One base in Hubballi, every major city within reach.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.3}>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Real distances, drive times and per-km rates for our most-booked outstation
              routes from Hubli — Bengaluru, Mysuru, Mangaluru, Belagavi, Hampi and beyond.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.36} className="pt-1 flex justify-center">
            <a
              href="#routes-grid"
              className="group btn-accent text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 tracking-wider shadow-md"
            >
              <span>See All Routes</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Popular Routes' }]} />

      <section id="routes-grid" className="py-16 sm:py-24 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" stagger={0.06}>
            {CAB_ROUTES.map((route) => {
              const fare = estimateFare(route);
              return (
                <StaggerItem key={route.slug}>
                  <Link
                    to={`/routes/${route.slug}`}
                    className="group card-editorial h-full flex flex-col justify-between p-5 sm:p-6"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="badge-tag bg-[#200f07]/10 text-[#200f07]">{route.region}</span>
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-[#200f07]/70">
                          <Clock className="w-3.5 h-3.5" />
                          {route.durationLabel}
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-lg sm:text-xl text-[#200f07]">
                        Hubli &rarr; {route.shortCity}
                      </h2>
                      <p className="flex items-center gap-1.5 text-xs text-[#200f07]/70 font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {route.distanceKm} km &middot; via {route.highway}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#200f07]/8 flex items-center justify-between">
                      {fare ? (
                        <span className="text-xs font-display font-extrabold text-[#200f07]">
                          from &#8377;{fare.amount.toLocaleString('en-IN')}
                        </span>
                      ) : (
                        <span className="text-xs text-[#200f07]/60">Custom quote</span>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-display font-bold text-[#200f07] uppercase tracking-wider group-hover:text-[#200f07]">
                        View Route
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CTASection />
    </main>
  );
};
