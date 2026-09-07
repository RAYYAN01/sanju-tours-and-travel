import React, { useEffect } from 'react';
import { ListChecks, Car, FileCheck2, ThumbsUp, ArrowDown, PlaneTakeoff, Route, Building2, Sparkles } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';
import { CTASection } from '../components/CTASection';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      step: '01',
      Icon: ListChecks,
      title: 'Choose Your Service',
      desc: 'Outstation cab, Hubli Airport pickup, local twin-city hourly rental, or a custom holiday tour — pick what fits your itinerary.'
    },
    {
      step: '02',
      Icon: Car,
      title: 'Select a Vehicle',
      desc: 'From compact Dzire sedans to spacious 17-seater Tempo Travellers or 55-seater tourist coaches sized to your group and luggage.'
    },
    {
      step: '03',
      Icon: FileCheck2,
      title: 'Get Your Written Quote',
      desc: 'We share an itemized, clear quotation on WhatsApp or phone with all per-km rates, daily allowances, and terms clearly explained.'
    },
    {
      step: '04',
      Icon: ThumbsUp,
      title: 'Travel Comfortably',
      desc: 'Your professional chauffeur arrives on time with a clean, sanitized vehicle. Our dispatch desk remains reachable 24/7 throughout your trip.'
    }
  ];

  return (
    <main>
      {/* Services Hero — editorial layout, centered: tiny eyebrow, bold heading,
          italic accent line, description, tag row, and a CTA button, each staggering in. */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#200f07]/10 overflow-hidden">
        <img
          src="/assets/services_hero_original_16_9.jpeg"
          alt="Intricately carved stone temple sanctum in Karnataka"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#200f07]/85 via-[#200f07]/75 to-[#200f07]/90" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <Reveal y={8} delay={0}>
            <span className="block text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white/75">
              Our Services
            </span>
          </Reveal>

          <Reveal y={10} delay={0.1}>
            <h1 className="font-display text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] whitespace-nowrap">
              Travel Services, Made Simple.
            </h1>
          </Reveal>

          <Reveal y={10} delay={0.2}>
            <p className="font-accent italic text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#c5e384] leading-snug">
              Built around your journey.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.3}>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              From round-the-clock Hubballi Airport (HBX) taxi transfers to corporate delegacy transportation and multi-day group tours across Karnataka.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.36} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { icon: PlaneTakeoff, label: 'Airport' },
              { icon: Route, label: 'Outstation' },
              { icon: Building2, label: 'Corporate' },
              { icon: Sparkles, label: 'Custom Tours' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold text-white/90 shadow-subtle"
              >
                <Icon className="w-3.5 h-3.5 text-[#c5e384]" />
                {label}
              </span>
            ))}
          </Reveal>

          <Reveal y={8} delay={0.42} className="pt-1 sm:pt-2 flex justify-center">
            <a
              href="#services"
              className="group btn-accent text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 tracking-wider shadow-md"
            >
              <span>Explore Our Services</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesSection showViewAll={false} />

      {/* How It Works (4 Simple Steps) */}
      <section className="py-16 sm:py-24 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff9eb] border border-[#200f07]/12 text-[11px] font-display font-bold uppercase tracking-widest text-[#200f07] mb-3">
              How It Works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#200f07] tracking-tight">
              Book in <span className="font-accent italic font-bold text-[#8fae52]">Four Simple Steps</span>
            </h2>
            <p className="mt-2 text-sm text-[#200f07]/70">
              A straightforward booking process without hidden terms or surprise surge fees.
            </p>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {steps.map((s, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full bg-[#fff9eb] rounded-card border border-[#200f07]/10 p-6 space-y-3 relative overflow-hidden shadow-subtle group hover:shadow-card hover:border-[#200f07]/25 hover:-translate-y-1 transition-[box-shadow,border-color,transform] duration-300">
                  <span className="absolute top-3 right-4 font-display font-black text-4xl sm:text-5xl text-[#200f07]/8 group-hover:text-[#c5e384]/40 transition-colors duration-300 select-none">
                    {s.step}
                  </span>
                  <div className="relative w-12 h-12 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <s.Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative font-display font-bold text-lg text-[#200f07]">
                    {s.title}
                  </h3>
                  <p className="relative text-xs text-[#200f07]/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};
