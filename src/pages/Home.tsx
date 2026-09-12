import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../components/AboutSection';
import { FleetSection } from '../components/FleetSection';
import { ServicesSection } from '../components/ServicesSection';
import { DestinationsSection } from '../components/DestinationsSection';
import { RoutesSection } from '../components/RoutesSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';

export const Home: React.FC = () => {
  const { hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        if (lenis) {
          lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, lenis]);

  return (
    <main>
      <h1 className="sr-only">Sanju Tours &amp; Travels — Cab, Taxi &amp; Outstation Vehicle Rental in Hubli, Serving All of Karnataka</h1>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Full-Width Green Moving Trust Strip with tight architectural rhythm */}
      <div className="my-2 sm:my-3 w-full">
        <TrustStrip />
      </div>

      {/* 3. Fleet Section (With Category Filters) */}
      <FleetSection limit={3} showViewAll={true} />

      {/* 4. About Preview Section */}
      <AboutSection />

      {/* 5. Services Section */}
      <ServicesSection limit={3} />

      {/* 6. Why Choose Us */}
      <WhyUsSection />

      {/* 7. Destinations Section */}
      <DestinationsSection limit={3} />

      {/* 8. Outstation Routes Across Karnataka */}
      <RoutesSection limit={6} />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. FAQ Accordion */}
      <FAQAccordion />

      {/* 12. Final Consultation CTA */}
      <CTASection />
    </main>
  );
};
