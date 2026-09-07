import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { useBookingModal } from '../context/BookingModalContext';
import { PHONE_TEL_HREF, CALL_ARIA_LABEL, whatsappHref } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const { openModal } = useBookingModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating circular WhatsApp button — fixed to the viewport on tablet and
          up; on mobile the sticky 3-button bar below takes over instead. */}
      <aside
        aria-label="Quick contact actions"
        className="hidden sm:block fixed bottom-6 right-6 z-40"
      >
        <a
          href={whatsappHref({ requirements: 'Floating WhatsApp quick click' })}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-14 h-14 rounded-full bg-[#200f07] text-[#c5e384] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-[transform,opacity] duration-300 border-2 border-[#fff9eb] outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff9eb] ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
          }`}
          title="Chat with Sanju Tours & Travels on WhatsApp"
          aria-label="Chat with Sanju Tours & Travels on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
      </aside>

      {/* Mobile sticky 3-button action bar (bottom of screen, mobile only) */}
      <div
        className={`sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#200f07] border-t border-white/10 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center gap-2 shadow-2xl backdrop-blur-md transition-transform duration-500 ease-out ${
          mounted ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <a
          href={PHONE_TEL_HREF}
          aria-label={CALL_ARIA_LABEL}
          className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-[#fff9eb] text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-[background-color,transform] duration-200 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384]"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5e384]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappHref({ requirements: 'Inquiry via mobile bottom action bar' })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-[background-color,transform] duration-200 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#c5e384]"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#c5e384]" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => openModal('Mobile Quick Booking Bar')}
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#c5e384] hover:opacity-90 text-[#200f07] text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-[background-color,opacity,transform] duration-200 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>
    </>
  );
};
