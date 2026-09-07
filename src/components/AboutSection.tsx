import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useBookingModal } from '../context/BookingModalContext';
import { Reveal, StaggerGroup, StaggerItem } from './motion/Reveal';
import { Counter } from './motion/Counter';

export const AboutSection: React.FC = () => {
  const { openModal } = useBookingModal();

  return (
    <section id="about" className="py-8 sm:py-11 bg-[#fff9eb] border-b border-[#200f07]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: Travel Photography Composition */}
          <Reveal className="lg:col-span-6 relative" y={24}>
            <div className="relative rounded-xl overflow-hidden border border-[#200f07]/15 shadow-lifted bg-[#fff9eb] corner-bracket">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/about_us.jpeg"
                  alt="Karnatak University clock tower, Dharwad - Sanju Tours & Travels"
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 sm:p-4 bg-[#200f07] text-[#fff9eb] flex items-center justify-between border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white font-bold block">
                    15.4589° N, 75.0078° E · DHARWAD
                  </span>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    Hubballi-Dharwad &amp; North Karnataka Operations
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-white">
                  EST. 2014
                </span>
              </div>
            </div>

            {/* Trust Stat Card - Architectural Technical Ledger */}
            <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 bg-[#fff9eb] p-3.5 sm:p-4 rounded-xl border border-[#200f07]/12 shadow-sm text-center">
              <div className="px-1 sm:px-2 text-left">
                <span className="font-mono text-[10px] text-[#200f07] block">01 / TRACK RECORD</span>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-[#200f07] mt-0.5">
                  <Counter value={10} suffix="+ Yrs" duration={1.2} />
                </p>
                <p className="text-[10px] font-medium text-[#200f07]/70">Local Experience</p>
              </div>
              <div className="border-x border-[#200f07]/10 px-2 sm:px-3 text-left">
                <span className="font-mono text-[10px] text-[#200f07] block">02 / PASSENGERS</span>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-[#200f07] mt-0.5">
                  <Counter value={5000} suffix="+" duration={1.6} />
                </p>
                <p className="text-[10px] font-medium text-[#200f07]/70">Safe Dispatches</p>
              </div>
              <div className="px-1 sm:px-2 text-left">
                <span className="font-mono text-[10px] text-[#200f07] block">03 / DISPATCH</span>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-[#200f07] mt-0.5">24·7</p>
                <p className="text-[10px] font-medium text-[#200f07]/70">Highway Support</p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Story & Details */}
          <Reveal className="lg:col-span-6 space-y-6 pt-6 sm:pt-0" delay={0.1} y={24}>
            <div className="flex items-center gap-2">
              <span className="w-5 h-px bg-[#200f07]/40" />
              <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07]">
                About Us
              </span>
            </div>

            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#200f07] block -mt-4">
              Established 2014 · Hubballi Chauffeurs
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#200f07] tracking-tight leading-[1.12]">
              Your Journey Starts With the <span className="font-accent italic font-bold text-[#8fae52]">Right Ride.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#200f07]/70 leading-relaxed">
              Sanju Tours &amp; Travels was established to provide reliable, stress-free vehicle rental and cab services across Hubballi-Dharwad and surrounding regions. Whether you need a punctual airport pickup, an executive sedan for corporate visits, a Tempo Traveller for family vacations to Dandeli and Goa, or luxury coaches for large wedding convoys — our focus is on safety, transparency, and dependable service.
            </p>

            <StaggerGroup className="space-y-2.5 text-xs sm:text-sm lg:text-base text-[#200f07] font-medium pt-2" stagger={0.08}>
              {[
                'Transparent per-km rate sheets shared upfront with driver allowances',
                'Licensed commercial chauffeurs experienced in highway and ghat driving',
                'Clean, sanitized, and air-conditioned fleet across all passenger capacities'
              ].map(point => (
                <StaggerItem key={point} y={12}>
                  <div className="group flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#200f07]/10 text-[#200f07] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{point}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/about"
                className="group btn-accent text-xs py-3 px-6 tracking-wider"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() => openModal('About Section Consultation')}
                className="btn-outline-dark text-xs py-3 px-6 tracking-wider"
              >
                <span>Speak With Our Team</span>
              </button>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
};
