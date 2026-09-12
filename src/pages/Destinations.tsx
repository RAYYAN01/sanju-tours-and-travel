import React, { useEffect } from 'react';
import { DestinationsSection } from '../components/DestinationsSection';
import { RouteTravelSection } from '../components/RouteTravelSection';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Compass, Waves, Landmark, Palmtree } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const Destinations: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Subpage Hero + Route Planner — one continuous panel */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#200f07]/10 overflow-hidden">
        <img
          src="/assets/destination_dandeli.jpeg"
          alt="Misty forest valley and the Kali River near Dandeli, Karnataka"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#200f07]/85 via-[#200f07]/80 to-[#200f07]/92" />

        <Reveal className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-display font-bold uppercase tracking-widest text-white">
            Scenic Getaways From Hubli
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Popular Destinations &amp; <span className="font-accent italic font-bold text-[#c5e384]">Road Trips</span>
          </h1>
          <p className="text-base sm:text-lg text-[#fff9eb]/85 max-w-2xl mx-auto leading-relaxed">
            Hubballi is the cultural and geographical gateway to Karnataka’s finest wonders. Explore Kali river rafting in Dandeli, 6th-century caves in Badami, imperial ruins in Hampi, and the golden beaches of Gokarna &amp; Goa.
          </p>
        </Reveal>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <RouteTravelSection />
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Destinations' }]} />

      {/* Destinations Grid */}
      <DestinationsSection showViewAll={false} />

      {/* Travel Information Callout */}
      <section className="py-16 bg-[#fff9eb] border-b border-[#200f07]/10">
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-editorial p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-3 border-b border-[#200f07]/10 pb-4">
              <div className="w-10 h-10 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#200f07]">
                  Planning an Outstation Getaway From Hubballi?
                </h3>
                <p className="text-xs text-[#200f07]/70">
                  Helpful tips from our experienced local drivers
                </p>
              </div>
            </div>

            <StaggerGroup className="grid sm:grid-cols-3 gap-4 text-xs text-[#200f07]/70 leading-relaxed" stagger={0.1}>
              {[
                { Icon: Waves, title: 'Dandeli River Trips', desc: 'Best visited between October and May. We recommend leaving Hubli by 6:30 AM to reach Kali River rafting camps ahead of the peak crowds.' },
                { Icon: Landmark, title: 'Badami & Hampi Circuits', desc: 'A 2 to 3-day circuit covering Badami caves, Pattadakal, Aihole, and Hampi. Our drivers know safe parking zones near the ASI monuments.' },
                { Icon: Palmtree, title: 'Gokarna & Goa Highway', desc: 'Enjoy a picturesque drive through the Western Ghats. Our vehicles are equipped with Fastags and toll passes for smooth interstate toll transit.' },
              ].map(({ Icon, title, desc }) => (
                <StaggerItem
                  key={title}
                  className="group p-4 rounded-xl border border-[#200f07]/10 bg-[#fff9eb] hover:bg-[#2e1c10] hover:border-[#2e1c10] hover:-translate-y-0.5 transition-[background-color,border-color,transform] duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center mb-2.5">
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-[#200f07] mb-1 transition-colors duration-300 group-hover:text-white">
                    {title}
                  </h4>
                  <p className="transition-colors duration-300 group-hover:text-[#fff9eb]/75">{desc}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};
