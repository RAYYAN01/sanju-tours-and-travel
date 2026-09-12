import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, ArrowRight, Users, Headset, ArrowDown } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { useBookingModal } from '../context/BookingModalContext';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';
import { Counter } from '../components/motion/Counter';

export const About: React.FC = () => {
  const { openModal } = useBookingModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Subpage Hero — editorial layout, centered: tiny eyebrow, bold heading,
          italic accent line, description, and a CTA, each staggering in. */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#200f07]/10 overflow-hidden">
        <img
          src="/assets/about_heritage_collage.jpg"
          alt="Heritage temple and monument circuits across India"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#200f07]/85 via-[#200f07]/75 to-[#200f07]/90" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <Reveal y={8} delay={0}>
            <span className="block text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white/75">
              Local Roots • Professional Service
            </span>
          </Reveal>

          <Reveal y={10} delay={0.1}>
            <h1 className="font-display text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] whitespace-nowrap">
              About Sanju Tours &amp; Travels
            </h1>
          </Reveal>

          <Reveal y={10} delay={0.2}>
            <p className="font-accent italic text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#c5e384] leading-snug">
              A decade of dependable journeys.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.3}>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Your dependable transportation and vehicle rental partner in Hubballi, Karnataka — committed to safe journeys, comfortable vehicles, and transparent quotations.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.36} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { icon: ShieldCheck, label: '10+ Years Local Experience' },
              { icon: Users, label: '5,000+ Safe Dispatches' },
              { icon: Headset, label: '24/7 Highway Support' },
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
              href="#our-story"
              className="group btn-accent text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 tracking-wider shadow-md"
            >
              <span>Read Our Story</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Company Story Split */}
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <section id="our-story" className="py-16 sm:py-24 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <Reveal className="lg:col-span-6 space-y-6" y={24}>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#200f07] tracking-tight">
                Built On Trust, Punctuality, and <span className="font-accent italic font-bold text-[#8fae52]">Local Hospitality.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#200f07]/70 leading-relaxed">
                Founded in Hubballi, Sanju Tours &amp; Travels began with a clear mission: to replace the uncertainty of street booking and unpredictable cab apps with a dependable, client-first travel service rooted in North Karnataka.
              </p>
              <p className="text-sm sm:text-base text-[#200f07]/70 leading-relaxed">
                Over the past decade, we have expanded our fleet from compact sedans to executive MUVs, high-roof Tempo Travellers, and luxury touring buses. Whether picking up corporate executives arriving at Hubballi Airport (HBX), ferrying large family pilgrimages to Badami and Hampi, or coordinating wedding transportation across twin-cities, our drivers arrive early, vehicles are spotless, and rates are confirmed in writing.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => openModal('About Page Contact')}
                  className="group btn-accent text-xs py-3 px-6 tracking-wider"
                >
                  <span>Plan Your Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <Link
                  to="/fleet"
                  className="btn-outline-dark text-xs py-3 px-6 tracking-wider"
                >
                  <span>Browse Our Fleet</span>
                </Link>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 relative" delay={0.1} y={24}>
              <div className="rounded-[28px] overflow-hidden shadow-lifted">
                <img
                  src="/assets/hero_travel_fleet.jpg"
                  alt="Sanju Tours and Travels fleet vehicle on a Western Ghats highway"
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </Reveal>

          </div>

          {/* Icon + Stat Row */}
          <StaggerGroup className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto text-center" stagger={0.1}>
            {[
              { Icon: ShieldCheck, value: 10, suffix: '+', label: 'Years of Experience' },
              { Icon: Users, value: 5000, suffix: '+', label: 'Happy Travellers' },
              { Icon: Headset, value: null, display: '24/7', label: 'Support Available' },
            ].map(({ Icon, value, suffix, label, display }) => (
              <StaggerItem key={label} className="space-y-2">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#200f07]">
                  {display ?? <Counter value={value as number} suffix={suffix} duration={1.4} />}
                </p>
                <p className="text-xs text-[#200f07]/70">{label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-5 h-px bg-[#200f07]/40" />
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07]">
                Our Promise to You
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#200f07]">
              What We <span className="font-accent italic font-bold text-[#8fae52]">Stand By</span>
            </h2>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-3 gap-6" stagger={0.1}>
            {[
              { Icon: ShieldCheck, title: '100% Verified Drivers', desc: "Commercial driver's license, background verifications, and proven experience on interstate highways and mountain curves." },
              { Icon: Award, title: 'Transparent Written Billing', desc: 'Per-km rate, driver Bata, and daily kilometer minimums are clearly spelled out before you make any payment.' },
              { Icon: Heart, title: 'Customer First Care', desc: 'Flight delay accommodation, elderly passenger boarding assistance, and polite chauffeurs committed to making trips pleasant.' },
            ].map(({ Icon, title, desc }) => (
              <StaggerItem key={title} className="card-editorial p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#200f07]">{title}</h3>
                <p className="text-xs text-[#200f07]/70 leading-relaxed mt-2">
                  {desc}
                </p>
                <span className="w-8 h-0.5 bg-[#c5e384] rounded-full mt-4" aria-hidden="true" />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Consultation CTA */}
      <CTASection />
    </main>
  );
};
