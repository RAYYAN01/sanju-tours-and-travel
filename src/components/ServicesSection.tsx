import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';

interface ServicesSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ limit, showViewAll = true }) => {
  const displayedServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section id="services" className="section-tight bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-px bg-[#200f07]/40" />
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07]">
                Tailored Transportation
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#200f07] tracking-tight">
              Travel Services <span className="font-accent italic font-bold text-[#8fae52]">Built Around You</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#200f07]/70 max-w-xl">
              From punctual Hubli Airport (HBX) arrivals to outstation road trips and coordinated wedding guest logistics, each service is managed with dedicated drivers.
            </p>
          </div>

          {showViewAll && (
            <Link
              to="/services"
              className="group btn-accent text-xs py-2.5 px-5 tracking-wider shrink-0 self-start md:self-auto shadow-md"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>

        {/* 6 Services Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" stagger={0.08}>
          {displayedServices.map(service => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>

      </div>
    </section>
  );
};
