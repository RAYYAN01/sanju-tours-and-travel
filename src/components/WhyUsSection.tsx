import React from 'react';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      stat: '99%',
      title: 'On-Time Chauffeur Dispatch',
      desc: 'Route-familiar, verified commercial chauffeurs experienced in navigating ghat curves, forest tracks, and long highway journeys safely.'
    },
    {
      stat: '100%',
      title: 'Sanitized & Climate-Controlled Fleet',
      desc: 'Meticulously serviced sedans, Innova Crystas, Tempo Travellers, and luxury coaches with efficient AC and pristine upholstery.'
    },
    {
      stat: '0',
      title: 'Hidden Charges — Transparent Pricing',
      desc: 'All per-km rates, toll estimations, driver allowances, and night charges communicated in clear written itemized quotes.'
    },
    {
      stat: '24/7',
      title: 'Round-the-Clock Dispatch Assistance',
      desc: 'Continuous coordination for flight arrivals at Hubli Airport (HBX), early railway station pickups, and live WhatsApp road support.'
    },
    {
      stat: '15+',
      title: 'Years Regional Route Mastery',
      desc: 'Deep familiarity with North Karnataka heritage spots, scenic stops, Jolada Roti dining spots, and optimal route shortcuts.'
    },
    {
      stat: '55+',
      title: 'Family, Pilgrim & Event Capacity',
      desc: 'Sized right for everyone from single business travelers to 55-passenger pilgrim sanghas, wedding parties, and collegiate tours.'
    }
  ];

  return (
    <section id="why-us" className="pt-4 sm:pt-6 pb-0 bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="w-full">

        {/* Expansive Infographic Card matching Pinterest Reference Style */}
        <Reveal>
          <div className="w-full bg-[#fff9eb] border-y border-[#200f07]/15 overflow-hidden">
            <div className="grid md:grid-cols-12 items-stretch min-h-[640px] lg:min-h-[820px] xl:min-h-[900px]">

              {/* LEFT DARK HERO BLOCK WITH IMAGE */}
              <div className="md:col-span-5 bg-[#200f07] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                {/* Background Landmark Image */}
                <img
                  src="/city.jpeg"
                  alt="Equestrian statue landmark at a Hubballi city circle"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Dark gradient overlay ensuring high contrast while showing the landmark */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#200f07]/95 via-[#200f07]/85 to-[#200f07]/70" />
                <div className="absolute inset-0 bg-[#200f07]/30" />

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-display font-bold uppercase tracking-widest text-white mb-6 border border-white/20 shadow-sm">
                    Our Standards
                  </span>
                  
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05] drop-shadow-md">
                    Why<br />Choose<br /><span className="text-[#c5e384]">Us?</span>
                  </h2>

                  <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#fff9eb]/90 font-medium leading-relaxed max-w-sm drop-shadow-sm">
                    The numbers speak for themselves. The practical standards that make booking vehicle rentals smooth, safe, and dependable.
                  </p>
                </div>

                {/* Hubballi Local Landmark Footer Badge */}
                <div className="relative z-10 mt-12 pt-6 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white font-bold block">
                      15.3647° N, 75.1240° E
                    </span>
                    <p className="text-xs font-semibold text-white mt-0.5">
                      A Hubballi City Circle Landmark
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[10px] font-display font-bold uppercase tracking-wider text-white border border-white/20">
                    Hubballi Roots
                  </span>
                </div>
              </div>

              {/* RIGHT CONTENT WITH NUMBERED BADGES STRADDLING THE SEAM */}
              <div className="md:col-span-7 bg-[#fff9eb] p-6 sm:p-10 lg:p-14 md:pl-0 flex flex-col justify-center relative">
                <StaggerGroup className="space-y-5 sm:space-y-6 lg:space-y-7" stagger={0.06}>
                  {reasons.map((item, idx) => (
                    <StaggerItem key={item.title}>
                      <div className="group relative flex items-start gap-4 sm:gap-5 md:gap-0 -mx-3 sm:-mx-4 md:mx-0 md:pl-7 lg:pl-8 md:-ml-7 lg:-ml-8 p-3 sm:p-4 md:pt-3 md:pb-3 md:pr-4 rounded-xl transition-colors duration-300 hover:bg-[#2e1c10]">

                        {/* Numbered Circle Badge overlapping the dividing seam */}
                        <div
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-4 sm:border-[5px] border-white shadow-md flex items-center justify-center font-display font-black bg-[#c5e384] text-[#200f07] text-base sm:text-lg lg:text-xl shrink-0 z-20 transition-transform duration-300 group-hover:scale-110"
                        >
                          {idx + 1}
                        </div>

                        {/* Text Details with generous width */}
                        <div className="flex-1 min-w-0 pt-0.5 md:pl-6 lg:pl-8">
                          <h3 className="font-display font-extrabold text-base sm:text-lg lg:text-xl text-[#200f07] tracking-tight transition-colors duration-300 group-hover:text-white">
                            <span className="font-black mr-2 text-[#200f07] transition-colors duration-300 group-hover:text-[#c5e384]">{item.stat}</span>
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-[#200f07]/70 leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-white/75">
                            {item.desc}
                          </p>
                        </div>

                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
