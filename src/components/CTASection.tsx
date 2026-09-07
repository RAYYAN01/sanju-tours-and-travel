import React from 'react';
import { Send, Phone, MessageSquare, Check } from 'lucide-react';
import { useBookingModal } from '../context/BookingModalContext';
import { BUSINESS_PHONE_DISPLAY, PHONE_TEL_HREF, CALL_ARIA_LABEL, whatsappHref } from '../utils/whatsapp';
import { Reveal } from './motion/Reveal';

export const CTASection: React.FC = () => {
  const { openModal } = useBookingModal();

  return (
    <section className="py-10 sm:py-14 bg-[#200f07] text-[#fff9eb] relative overflow-hidden">
      {/* Subtle Background Radial Glow — slow ambient breathing, respects reduced-motion */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#200f07]/10 blur-[100px] pointer-events-none rounded-full animate-glow-pulse" />

      <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        <span className="text-xs font-display font-bold uppercase tracking-widest text-[#c5e384] block">
          Fast WhatsApp Confirmation
        </span>

        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Plan Your <span className="text-[#c5e384]">Next Journey?</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#fff9eb]/80 max-w-xl mx-auto leading-relaxed">
          Tell us your pickup spot, passenger count, and travel dates. Receive a clear, all-inclusive per-km rate breakdown in minutes.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={whatsappHref({ requirements: 'General booking enquiry from website pre-footer.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto btn-accent py-3.5 px-7 text-xs tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageSquare className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            <span>WhatsApp Us</span>
          </a>

          <button
            type="button"
            onClick={() => openModal('Pre-Footer CTA')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-sm transition-[background-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Request Online Quote</span>
          </button>

          <a
            href={PHONE_TEL_HREF}
            aria-label={CALL_ARIA_LABEL}
            title={CALL_ARIA_LABEL}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-sm transition-[background-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384]"
          >
            <Phone className="w-4 h-4 text-[#c5e384] transition-transform duration-200 group-hover:scale-110" />
            <span>Call {BUSINESS_PHONE_DISPLAY}</span>
          </a>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#fff9eb]/80">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c5e384]" /> Instant Quotations</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c5e384]" /> No Hidden Surcharges</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c5e384]" /> 24/7 Roadside Assistance</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#c5e384]" /> Verified Commercial Drivers</span>
        </div>
      </Reveal>
    </section>
  );
};
