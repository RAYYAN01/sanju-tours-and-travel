import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Waves, Landmark, Mountain, MapPinned } from 'lucide-react';
import { PackageCard } from '../components/PackageCard';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { PACKAGES } from '../data/packages';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const Packages: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Subpage Hero — editorial layout, centered: tiny eyebrow, bold heading,
          italic accent line, description, tag row, and a CTA button, each staggering in. */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#200f07]/10 overflow-hidden bg-[#200f07]">
        <img
          src="/assets/packages_hero.jpeg"
          alt="Virupaksha Temple gopuram rising over the Vijayanagara ruins at Hampi, Karnataka"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#200f07]/85 via-[#200f07]/75 to-[#200f07]/90" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-5">
          <Reveal y={8} delay={0}>
            <span className="block text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.3em] text-white/75">
              Our Packages
            </span>
          </Reveal>

          <Reveal y={10} delay={0.1}>
            <h1 className="font-display text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] whitespace-nowrap">
              Tour Packages from Hubballi, Karnataka.
            </h1>
          </Reveal>

          <Reveal y={10} delay={0.2}>
            <p className="font-accent italic text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#c5e384] leading-snug">
              Itineraries crafted for the road ahead.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.3}>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Ready-made travel plans you can customize. Choose a vehicle suited to your group size and enjoy private road travel with experienced highway drivers.
            </p>
          </Reveal>

          <Reveal y={8} delay={0.36} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { icon: Waves, label: 'Coastal Escapes' },
              { icon: Landmark, label: 'Heritage Circuits' },
              { icon: Mountain, label: 'Hill Getaways' },
              { icon: MapPinned, label: 'Custom Itineraries' },
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
              href="#packages-grid"
              className="group btn-accent text-xs sm:text-sm py-3 sm:py-3.5 px-6 sm:px-8 tracking-wider shadow-md"
            >
              <span>Explore Packages</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tour Packages' }]} />

      {/* All Packages Grid */}
      <section id="packages-grid" className="py-16 sm:py-24 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" stagger={0.08}>
            {PACKAGES.map(pkg => (
              <StaggerItem key={pkg.id}>
                <PackageCard pkg={pkg} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Topical body content for on-page depth */}
      <section className="py-12 sm:py-16 bg-[#fff9eb] border-b border-[#200f07]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#200f07]">
            Multi-Day Tour Packages from Hubballi
          </h2>
          <p className="text-sm text-[#200f07]/70 leading-relaxed">
            Each package above is a ready-made itinerary you can adjust — swap the vehicle,
            add a day, or combine two circuits. We run these primarily in an Innova Crysta or
            a 12-seater Tempo Traveller so families and small groups travel together
            comfortably, with an experienced highway driver who knows the ghat sections on
            the Dandeli, Badami-Hampi and Gokarna-Murudeshwar routes. Every quote includes the
            per-km rate, driver bata and toll estimate in writing before you confirm.
          </p>
          <p className="text-sm text-[#200f07]/70 leading-relaxed">
            Travelling somewhere not listed here? Check our{' '}
            <Link to="/routes" className="font-semibold text-[#200f07] underline decoration-[#200f07]/30 hover:decoration-[#200f07]">
              outstation route pages
            </Link>{' '}
            for one-way and round-trip cabs to every major Karnataka city, or{' '}
            <Link to="/contact" className="font-semibold text-[#200f07] underline decoration-[#200f07]/30 hover:decoration-[#200f07]">
              contact us
            </Link>{' '}
            for a fully custom itinerary.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};
