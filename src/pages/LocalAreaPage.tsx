import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { MapPin, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { LOCAL_AREAS, getLocalArea } from '../data/localities';
import { whatsappHref, PHONE_TEL_HREF, CALL_ARIA_LABEL } from '../utils/whatsapp';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const LocalAreaPage: React.FC = () => {
  const { slug = '' } = useParams();
  const area = getLocalArea(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) {
    return <Navigate to="/local" replace />;
  }

  const enquiryHref = whatsappHref({
    pickup: `${area.name}, ${area.city}`,
    requirements: `Cab enquiry for a pickup in ${area.name}, ${area.city}.`,
  });

  const related = LOCAL_AREAS.filter((a) => a.city === area.city && a.slug !== area.slug).slice(0, 4);

  return (
    <main>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Local Areas', href: '/local' },
          { label: area.name },
        ]}
      />

      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#200f07]/10 bg-[#fff9eb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-3">
            <span className="badge-tag bg-[#200f07]/10 text-[#200f07]">{area.city}</span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#200f07] tracking-tight">
              Cab &amp; Taxi Service in {area.name}
            </h1>
            <p className="text-sm sm:text-base text-[#200f07]/70 max-w-2xl leading-relaxed">
              {area.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 card-editorial p-4 flex items-start gap-3">
            <span className="w-9 h-9 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </span>
            <p className="text-sm text-[#200f07]/75">{area.distanceNote}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={enquiryHref} target="_blank" rel="noopener noreferrer" className="btn-accent text-xs py-3.5 px-6 tracking-wider">
              <span>Book a Pickup in {area.name}</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </a>
            <a href={PHONE_TEL_HREF} aria-label={CALL_ARIA_LABEL} className="btn-outline-dark text-xs py-3.5 px-6 tracking-wider">
              Call to Book
            </a>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-lg font-bold text-[#200f07] mb-2">Ideal for</h2>
              <ul className="space-y-1.5 text-sm text-[#200f07]/75">
                {area.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8fae52] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#200f07] mb-2">Nearby landmarks</h2>
              <ul className="space-y-1.5 text-sm text-[#200f07]/75">
                {area.landmarks.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#200f07]/50 shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 pt-8 border-t border-[#200f07]/10">
            <p className="text-sm text-[#200f07]/70">
              Travelling further? See our{' '}
              <Link to="/routes" className="font-semibold text-[#200f07] underline decoration-[#200f07]/30 hover:decoration-[#200f07]">
                outstation cab routes across Karnataka
              </Link>{' '}
              or browse the{' '}
              <Link to="/fleet" className="font-semibold text-[#200f07] underline decoration-[#200f07]/30 hover:decoration-[#200f07]">
                full fleet &amp; rates
              </Link>
              .
            </p>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={0.3} className="mt-8">
              <h2 className="font-display text-lg font-bold text-[#200f07] mb-3">Other areas we serve in {area.city}</h2>
              <StaggerGroup className="flex flex-wrap gap-2" stagger={0.05}>
                {related.map((a) => (
                  <StaggerItem key={a.slug}>
                    <Link
                      to={`/local/${a.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#200f07]/12 text-xs font-semibold text-[#200f07] hover:border-[#200f07] transition-colors"
                    >
                      {a.name}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
};
