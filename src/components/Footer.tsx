import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock, ArrowUp, ExternalLink } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_ADDRESS, BUSINESS_MAPS_URL, PHONE_TEL_HREF, CALL_ARIA_LABEL, whatsappHref } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#200f07] text-[#fff9eb] pt-10 pb-8 border-t-2 border-[#c5e384]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group" aria-label="Sanju Tours & Travels Home">
              <img
                src="/logo-mark.webp"
                alt=""
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover shrink-0 ring-1 ring-white/15 shadow-sm"
              />
              <div>
                <span className="font-display font-extrabold text-base tracking-tight uppercase text-white block leading-none">
                  Sanju Tours
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#c5e384] font-bold block mt-1 leading-none">
                  &amp; Travels
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#fff9eb]/75 leading-relaxed max-w-sm">
              Hubli-Dharwad’s trusted vehicle rental and tours operator. Specializing in airport transfers, outstation cab bookings, Tempo Travellers, and luxury coaches across North Karnataka and Goa.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={PHONE_TEL_HREF}
                aria-label={CALL_ARIA_LABEL}
                title={CALL_ARIA_LABEL}
                className="btn-dark bg-white/5 hover:bg-white/10 text-xs py-2 px-3 border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384]"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5e384]" />
                <span>Call Us</span>
              </a>
              <a
                href={whatsappHref({ requirements: 'Footer quick contact enquiry' })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark bg-white/5 hover:bg-white/10 text-xs py-2 px-3 border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#c5e384]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#c5e384]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#fff9eb]/80 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/fleet" className="hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-white transition-colors">Tour Packages</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#c5e384]">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-[#fff9eb]/80 font-medium">
              <li><Link to="/services" className="hover:text-white transition-colors">Airport Transfers (Hubli Airport)</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Outstation Cabs &amp; One-Way Drops</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Local Twin-City Hourly Rentals</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Corporate Vehicle Hire &amp; Commute</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Wedding &amp; Event Group Shuttles</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Custom Multi-day Tour Packages</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#c5e384]">
              Contact Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#fff9eb]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5e384] shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS_ADDRESS}</p>
                  <a
                    href={BUSINESS_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1 text-[#c5e384] font-semibold hover:text-white hover:underline transition-colors"
                  >
                    View on Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5e384] shrink-0" />
                <a
                  href={PHONE_TEL_HREF}
                  aria-label={CALL_ARIA_LABEL}
                  className="hover:text-white font-bold text-[#fff9eb] outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384] rounded"
                >
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5e384] shrink-0" />
                <span>24 Hours · 7 Days a Week</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#fff9eb]/60">
          <p>© {new Date().getFullYear()} Sanju Tours &amp; Travels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Reliable cab &amp; vehicle rental in Hubballi, Karnataka</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="pt-4 text-center text-[10px] text-[#fff9eb]/40">
          Designed &amp; Developed by{' '}
          <a
            href="https://www.naazailabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#fff9eb]/60 hover:text-[#c5e384] underline decoration-[#fff9eb]/20 underline-offset-2 hover:decoration-[#c5e384] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384] rounded"
          >
            Naaz AI Labs
          </a>
        </p>

      </div>
    </footer>
  );
};
