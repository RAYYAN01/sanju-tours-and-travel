import React from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { PHONE_TEL_HREF, CALL_ARIA_LABEL, whatsappHref } from '../utils/whatsapp';
import { useBookingModal } from '../context/BookingModalContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { openModal } = useBookingModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-[#200f07]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        role="dialog" 
        aria-modal="true" 
        className="relative w-[85%] max-w-sm h-full bg-[#fff9eb] shadow-2xl flex flex-col justify-between border-l border-[#200f07]/15 z-10 animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#200f07]/15 bg-[#200f07] text-[#fff9eb]">
          <div>
            <span className="font-display font-bold text-sm tracking-wider uppercase block text-white">
              SANJU TOURS & TRAVELS
            </span>
            <span className="text-[10px] text-[#c5e384] uppercase tracking-widest font-semibold">
              Hubballi, Karnataka
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-[#fff9eb]/80 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="p-5 space-y-1 overflow-y-auto">
          {/* Main Home Link */}
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider text-[#200f07] hover:bg-[#200f07]/8 hover:text-[#200f07] transition-colors"
          >
            <span>Home</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#200f07]/70" />
          </Link>

          {/* Quick Home Sub-Sections for fast jump */}
          <div className="pl-4 pr-1 py-1 grid grid-cols-2 gap-1.5 mb-2">
            {[
              { to: '/#why-us', label: '• Why Us' },
              { to: '/#testimonials', label: '• Reviews' },
              { to: '/#faqs', label: '• FAQs' },
            ].map(sec => (
              <Link
                key={sec.to}
                to={sec.to}
                onClick={onClose}
                className="py-1.5 px-2.5 rounded-lg text-[11px] font-sans font-medium text-[#200f07]/70 hover:text-[#200f07] hover:bg-[#200f07]/5 transition-colors"
              >
                {sec.label}
              </Link>
            ))}
          </div>

          {[
            { to: '/about', label: 'About Us' },
            { to: '/fleet', label: 'Our Fleet' },
            { to: '/services', label: 'Services' },
            { to: '/destinations', label: 'Destinations' },
            { to: '/packages', label: 'Tour Packages' },
            { to: '/contact', label: 'Contact & Location' },
          ].map(item => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-display font-semibold uppercase tracking-wider text-[#200f07] hover:bg-[#200f07]/8 hover:text-[#200f07] transition-colors"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#200f07]/70" />
            </Link>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-5 border-t border-[#200f07]/15 space-y-3 bg-[#fff9eb]">
          <button
            type="button"
            onClick={() => {
              onClose();
              openModal('Mobile Quick Booking');
            }}
            className="w-full btn-accent py-3 text-xs tracking-wider"
          >
            Get a Free Quote
          </button>
          
          <div className="grid grid-cols-2 gap-2">
            <a
              href={PHONE_TEL_HREF}
              aria-label={CALL_ARIA_LABEL}
              onClick={onClose}
              className="btn-outline-dark py-2.5 px-3 text-[11px] flex items-center justify-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-[#200f07]"
            >
              <Phone className="w-3.5 h-3.5 text-[#200f07]" />
              <span>Call Now</span>
            </a>
            <a
              href={whatsappHref({ requirements: 'Enquiry from mobile menu' })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-dark py-2.5 px-3 text-[11px] flex items-center justify-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#c5e384]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#200f07]/70 font-medium pt-1">
            <ShieldCheck className="w-3 h-3 text-[#200f07]" />
            <span>4.9/5 Rated · 210+ Verified Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};
