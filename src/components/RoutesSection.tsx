import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { CAB_ROUTES, estimateFare } from '../data/routes';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';

interface RoutesSectionProps {
  limit?: number;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({ limit = 6 }) => {
  const displayed = CAB_ROUTES.slice(0, limit);

  return (
    <section id="routes" className="section-tight bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07] block mb-1.5">
              Outstation Cab Service
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#200f07] tracking-tight">
              Cab Service <span className="font-accent italic font-bold text-[#8fae52]">All Over Karnataka</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#200f07]/70 max-w-xl">
              From our Hubballi base, we run outstation cabs to every major Karnataka city — real distances,
              drive times and per-km rates, no surprises.
            </p>
          </div>

          <Link
            to="/routes"
            className="group btn-accent text-xs py-2.5 px-5 tracking-wider shrink-0 self-start md:self-auto shadow-md"
          >
            <span>View All Routes</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" stagger={0.07}>
          {displayed.map((route) => {
            const fare = estimateFare(route);
            return (
              <StaggerItem key={route.slug}>
                <Link
                  to={`/routes/${route.slug}`}
                  className="group card-editorial h-full flex flex-col justify-between p-5"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="badge-tag bg-[#200f07]/10 text-[#200f07]">{route.region}</span>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#200f07]/70">
                        <Clock className="w-3.5 h-3.5" />
                        {route.durationLabel}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-[#200f07]">
                      Hubli &rarr; {route.shortCity}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-[#200f07]/70 font-medium">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {route.distanceKm} km
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#200f07]/8 flex items-center justify-between">
                    {fare ? (
                      <span className="text-xs font-display font-extrabold text-[#200f07]">
                        from &#8377;{fare.amount.toLocaleString('en-IN')}
                      </span>
                    ) : (
                      <span className="text-xs text-[#200f07]/60">Custom quote</span>
                    )}
                    <ArrowRight className="w-3.5 h-3.5 text-[#200f07] transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
};
