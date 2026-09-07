import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { useBookingModal } from '../context/BookingModalContext';
import { BUSINESS_PHONE_DISPLAY, openWhatsAppEnquiry } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const { openModal } = useBookingModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Circular WhatsApp Button (Visible Desktop & Tablet) */}
      <aside aria-label="Quick contact actions">
        <button
          type="button"
          onClick={() => openWhatsAppEnquiry({ requirements: 'Floating WhatsApp quick click' })}
          className={`w-12 h-12 rounded-full bg-[#200f07] text-[#c5e384] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-[transform,opacity] duration-300 border-2 border-[#fff9eb] focus:outline-none ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          title="Chat with Sanju Tours & Travels on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </button>
      </aside>

      {/* Mobile Sticky 3-Button Action Bar (Bottom of Screen on Mobile Only) */}
      <div
        className={`sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#200f07] border-t border-white/10 p-2.5 flex items-center gap-2 shadow-2xl backdrop-blur-md transition-transform duration-500 ease-out ${
          mounted ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a
          href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s/g, '')}`}
          className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-[#fff9eb] text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-[background-color,transform] duration-200 active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5e384]" />
          <span>Call</span>
        </a>

        <button
          type="button"
          onClick={() => openWhatsAppEnquiry({ requirements: 'Inquiry via mobile bottom action bar' })}
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#200f07] hover:opacity-90 text-white text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-[background-color,transform] duration-200 active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={() => openModal('Mobile Quick Booking Bar')}
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#200f07] hover:opacity-90 text-white text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-[background-color,transform] duration-200 active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </>
  );
};
