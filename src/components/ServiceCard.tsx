import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Plane, Navigation, Briefcase, HeartHandshake, Map } from 'lucide-react';
import { Service } from '../data/services';
import { useBookingModal } from '../context/BookingModalContext';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Plane,
  Navigation,
  Briefcase,
  HeartHandshake,
  Map
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { openModal } = useBookingModal();
  const IconComponent = iconMap[service.iconName] || Compass;

  return (
    <article className="card-editorial h-full flex flex-col justify-between overflow-hidden group hover:shadow-card hover:border-[rgba(32,15,7,0.28)] transition-[box-shadow,border-color] duration-200">
      <div>
        {/* Photography with aspect ratio */}
        <div className="relative aspect-[16/10] bg-[#200f07]/5 overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#c5e384] flex items-center justify-center text-[#200f07] shadow-sm">
            <IconComponent className="w-4 h-4" strokeWidth={1.75} />
          </div>
          <span className="absolute bottom-3 left-3 bg-[#200f07]/85 backdrop-blur-sm text-white text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            {service.categoryTag}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-display font-bold text-[#200f07]">
              {service.number}
            </span>
            <span className="w-4 h-px bg-[#200f07]/20"></span>
            <h3 className="font-display font-bold text-lg text-[#200f07] group-hover:text-[#200f07] transition-colors duration-150">
              {service.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#200f07]/70 leading-relaxed">
            {service.shortDesc}
          </p>

          <ul className="space-y-1.5 pt-2 border-t border-[#200f07]/8 text-xs text-[#200f07]">
            {service.highlights.slice(0, 2).map((hl, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#200f07]"></span>
                <span className="truncate">{hl}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-5 pb-5 pt-3 border-t border-[#200f07]/8 flex items-center justify-between">
        <Link
          to="/services"
          className="text-xs font-display font-bold text-[#200f07] hover:text-[#200f07] flex items-center gap-1 uppercase tracking-wider transition-colors duration-150"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        <button
          type="button"
          onClick={() => openModal(`Service Booking: ${service.title}`)}
          className="btn-accent text-xs py-2 px-3.5 rounded-lg tracking-wider"
        >
          Get Quote
        </button>
      </div>
    </article>
  );
};
