import React from 'react';
import { Star, ShieldCheck, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Star,
      iconColor: 'text-[#200f07] fill-[#200f07]',
      title: '4.9/5 Google Reviews',
      desc: '210+ Verified Customer Ratings'
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-[#200f07]',
      title: 'Verified Chauffeurs',
      desc: 'Route-familiar professional drivers'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-[#200f07]',
      title: 'Transparent Per-Km Pricing',
      desc: 'Zero hidden fees & honest billing'
    },
    {
      icon: Clock,
      iconColor: 'text-[#200f07]',
      title: '24/7 Dispatch Support',
      desc: 'Instant booking via call & WhatsApp'
    },
    {
      icon: Sparkles,
      iconColor: 'text-[#200f07]',
      title: 'Clean & Comfortable Fleet',
      desc: 'Sanitized, AC & well-maintained cabs'
    }
  ];

  // Repeat items for continuous infinite marquee loop
  const repeatedItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <section
      aria-label="Key Service Highlights"
      className="relative w-full py-2.5 sm:py-3 bg-[#c5e384] border-y border-[#200f07]/10 shadow-sm overflow-hidden select-none"
    >
      {/* Soft Fade Edge Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#c5e384] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#c5e384] to-transparent z-10" />

      {/* Infinite Moving Marquee Track */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-0.5">
          {repeatedItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-90"
              >
                <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 ${item.iconColor}`} />
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="font-display font-bold text-xs sm:text-sm text-[#200f07] tracking-wide uppercase">
                    {item.title}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#200f07]/80 font-sans whitespace-nowrap">
                    — {item.desc}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#200f07]/30 ml-4 sm:ml-6 shrink-0" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
