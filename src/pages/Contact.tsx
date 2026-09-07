import React, { useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, ArrowUpRight, Zap } from 'lucide-react';
import { BookingForm } from '../components/BookingForm';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_ADDRESS, openWhatsAppEnquiry } from '../utils/whatsapp';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Subpage Hero — editorial layout, centered: tiny eyebrow, bold heading,
          italic accent line, description, trust chips, and a CTA button, each staggering in. */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#200f07]/10 overflow-hidden">
        <img
          src="/assets/contact_hero.jpeg"
          alt="Scenic waterfall cascading amidst lush green forest"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#200f07]/85 via-[#200f07]/75 to-[#200f07]/90" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <Reveal y={8} delay={0}>
            <span className="block text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white/75">
              Get In Touch
            </span>
          </Reveal>

          <Reveal y={10} delay={0.1}>
            <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1] whitespace-nowrap">
              Contact &amp; Booking Desk
            </h1>
          </Reveal>

          <Reveal y={10} delay={0.2}>
            <p className="font-accent italic text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#c5e384] leading-snug">
              We&apos;re just a call away.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.3}>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Have questions about fares, vehicle availability, or multi-day itinerary planning? Reach our Hubballi dispatch team directly via phone, WhatsApp, or the booking form below.
            </p>
          </Reveal>

          {/* Quick trust chips */}
          <Reveal y={8} delay={0.36} className="pt-1 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { icon: Zap, label: 'Replies in Under 5 Min' },
              { icon: ShieldCheck, label: 'Verified Chauffeurs' },
              { icon: Clock, label: '24/7 Dispatch Desk' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold text-[#fff9eb]/90 shadow-subtle"
              >
                <Icon className="w-3.5 h-3.5 text-[#c5e384]" />
                {label}
              </span>
            ))}
          </Reveal>

          <Reveal y={8} delay={0.42} className="pt-1 sm:pt-2 flex justify-center">
            <a
              href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s/g, '')}`}
              className="group btn-accent text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact Information & Form Split */}
      <section className="py-16 sm:py-24 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT: Contact Cards & Office Details */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Reveal>
                <span className="text-xs font-display font-bold uppercase tracking-wider text-[#200f07] block">
                  Quick Communication
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#200f07] mt-1">
                  We're Here <span className="font-accent italic font-bold text-[#8fae52]">Around the Clock</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#200f07]/70 mt-2">
                  Call or WhatsApp our dispatch team anytime for instant quotes, airport pickup confirmations, or emergency vehicle dispatch.
                </p>
              </Reveal>

              <StaggerGroup className="space-y-6" stagger={0.09}>
                <StaggerItem>
                  {/* Direct Phone */}
                  <a
                    href={`tel:${BUSINESS_PHONE_DISPLAY.replace(/\s/g, '')}`}
                    className="card-editorial group p-5 flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#200f07] group-hover:text-white">
                      <Phone className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="font-display font-bold text-xs uppercase tracking-wider text-[#200f07]/70">
                        Phone Hotline
                      </p>
                      <p className="font-display font-extrabold text-lg text-[#200f07] group-hover:text-[#200f07] transition-colors">
                        {BUSINESS_PHONE_DISPLAY}
                      </p>
                      <p className="text-[11px] text-[#200f07]/70">
                        Direct line to our operations manager in Hubli
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#200f07]/40 shrink-0 self-start mt-1 transition-all group-hover:text-[#200f07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </StaggerItem>

                <StaggerItem>
                  {/* WhatsApp Desk */}
                  <button
                    type="button"
                    onClick={() => openWhatsAppEnquiry({ requirements: 'Inquiry from Contact page' })}
                    className="card-editorial group p-5 flex items-center gap-4 w-full text-left"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#200f07] group-hover:text-white">
                      <MessageSquare className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="font-display font-bold text-xs uppercase tracking-wider text-[#200f07]/70">
                        WhatsApp Chat Desk
                      </p>
                      <p className="font-display font-extrabold text-lg text-[#200f07] group-hover:text-[#200f07] transition-colors">
                        Chat on WhatsApp
                      </p>
                      <p className="text-[11px] text-[#200f07]/70">
                        Fast quotations with per-km breakdown in under 5 minutes
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#200f07]/40 shrink-0 self-start mt-1 transition-all group-hover:text-[#200f07] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </StaggerItem>

                <StaggerItem>
                  {/* Office Location */}
                  <div className="card-editorial p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#200f07]/10 text-[#200f07] border border-[#200f07]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="font-display font-bold text-xs uppercase tracking-wider text-[#200f07]/70">
                        Office &amp; Unkal Counter
                      </p>
                      <p className="font-display font-bold text-sm text-[#200f07]">
                        {BUSINESS_ADDRESS}
                      </p>
                      <p className="text-[11px] text-[#200f07]/70">
                        Opposite Siddhappilla Temple, Unkal, Hubli
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  {/* Working Hours */}
                  <div className="p-4 rounded-2xl bg-[#200f07] text-[#fff9eb] flex items-center gap-3.5 shadow-card">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 relative">
                      <Clock className="w-5 h-5 text-[#c5e384]" strokeWidth={1.75} />
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#c5e384] ring-2 ring-[#200f07] animate-pulse" />
                    </div>
                    <div className="text-xs">
                      <p className="font-display font-bold text-white uppercase tracking-wider">
                        Operating Hours: 24/7 Available
                      </p>
                      <p className="text-[#fff9eb]/70 text-[11px]">
                        Dispatchers on duty for early morning and late night airport flights
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </div>

            {/* RIGHT: Booking Form Widget */}
            <Reveal className="lg:col-span-7" delay={0.1} y={24}>
              <BookingForm variant="card" />

              {/* Embedded Google Map */}
              <div className="mt-8 rounded-card overflow-hidden border border-[#200f07]/15 shadow-card bg-[#fff9eb] p-4">
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-4 h-4 text-[#200f07] shrink-0" />
                    <span className="text-xs font-display font-bold text-[#200f07] truncate">
                      Unkal &amp; P.B. Road Service Area
                    </span>
                  </div>
                  <span className="badge-tag bg-[#200f07]/10 text-[#200f07] shrink-0">Karnataka 580031</span>
                </div>
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#200f07]/10">
                  <iframe
                    title="Sanju Tours and Travels Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61537.19561081373!2d75.09348128362615!3d15.364708307525367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73b06385f97%3A0xa1969f684cf07834!2sHubballi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

    </main>
  );
};
