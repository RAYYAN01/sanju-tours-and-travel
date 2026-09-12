import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Navigation,
  MessageSquare,
  ArrowRight,
  Milestone,
  Route as RouteIcon,
} from 'lucide-react';
import { CAB_ROUTES, getCabRoute, estimateFare } from '../data/routes';
import { VEHICLES } from '../data/vehicles';
import { whatsappHref, PHONE_TEL_HREF, CALL_ARIA_LABEL } from '../utils/whatsapp';
import { CTASection } from '../components/CTASection';
import { Breadcrumb } from '../components/Breadcrumb';
import { Reveal, StaggerGroup, StaggerItem } from '../components/motion/Reveal';

export const RoutePage: React.FC = () => {
  const { slug = '' } = useParams();
  const route = getCabRoute(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!route) {
    return <Navigate to="/routes" replace />;
  }

  const fare = estimateFare(route);
  const recommendedVehicles = route.recommendedVehicleIds
    .map((id) => VEHICLES.find((v) => v.id === id))
    .filter((v): v is (typeof VEHICLES)[number] => Boolean(v));

  const viewRouteUrl = `https://www.google.com/maps/dir/?api=1&origin=Hubballi,+Karnataka&destination=${encodeURIComponent(
    route.city
  )}`;

  const enquiryHref = whatsappHref({
    pickup: 'Hubballi',
    destination: route.city,
    requirements: `Route enquiry: Hubli → ${route.city} (${route.distanceKm} km, ${route.durationLabel}). Please share vehicle options and a per-km quote.`,
  });

  const related = CAB_ROUTES.filter((r) => r.region === route.region && r.slug !== route.slug).slice(0, 3);

  return (
    <main>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Popular Routes', href: '/routes' },
          { label: `Hubli to ${route.shortCity}` },
        ]}
      />

      <section className="pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#200f07]/10 bg-[#fff9eb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal delay={0.05} className="space-y-3">
            <span className="badge-tag bg-[#200f07]/10 text-[#200f07]">{route.region}</span>
            <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-[#200f07] tracking-tight">
              Hubli to {route.city} Taxi &amp; Cab Service
            </h1>
            <p className="text-sm sm:text-base text-[#200f07]/70 max-w-2xl leading-relaxed">
              {route.note}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 grid sm:grid-cols-3 gap-3">
            <div className="card-editorial p-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0">
                <Milestone className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07]/60">Distance</p>
                <p className="font-display font-extrabold text-[#200f07]">{route.distanceKm} km</p>
              </div>
            </div>
            <div className="card-editorial p-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07]/60">Drive Time</p>
                <p className="font-display font-extrabold text-[#200f07]">{route.durationLabel}</p>
              </div>
            </div>
            <div className="card-editorial p-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#c5e384] text-[#200f07] flex items-center justify-center shrink-0">
                <RouteIcon className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[10px] font-display font-bold uppercase tracking-wider text-[#200f07]/60">Highway</p>
                <p className="font-display font-extrabold text-[#200f07]">{route.highway}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={enquiryHref} target="_blank" rel="noopener noreferrer" className="btn-accent text-xs py-3.5 px-6 tracking-wider">
              <span>Enquire on WhatsApp</span>
              <MessageSquare className="w-3.5 h-3.5" />
            </a>
            <a
              href={PHONE_TEL_HREF}
              aria-label={CALL_ARIA_LABEL}
              className="btn-outline-dark text-xs py-3.5 px-6 tracking-wider"
            >
              Call to Book
            </a>
            <a
              href={viewRouteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark text-xs py-3.5 px-6 tracking-wider"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>View Route on Map</span>
            </a>
          </Reveal>

          {fare && (
            <Reveal delay={0.2} className="mt-4 text-xs text-[#200f07]/70">
              Starting from <strong className="text-[#200f07]">&#8377;{fare.amount.toLocaleString('en-IN')}</strong> in a {fare.vehicleName}
              {' '}(approx. one-way, Non-AC per-km rate &times; distance — excludes toll, permits and driver bata). Request an exact written quote on WhatsApp.
            </Reveal>
          )}

          <Reveal delay={0.25} className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-lg font-bold text-[#200f07] mb-2">Recommended vehicles</h2>
              <StaggerGroup className="flex flex-wrap gap-2" stagger={0.05}>
                {recommendedVehicles.map((v) => (
                  <StaggerItem key={v.id}>
                    <Link
                      to="/fleet"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#fff9eb] border border-[#200f07]/12 text-xs font-semibold text-[#200f07] hover:border-[#200f07] transition-colors"
                    >
                      {v.name} &middot; {v.rateNonAc}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#200f07] mb-2">Drop points in {route.shortCity}</h2>
              <ul className="space-y-1.5 text-sm text-[#200f07]/75">
                {route.landmarks.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#200f07]/50 shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 pt-8 border-t border-[#200f07]/10 space-y-4">
            <h2 className="font-display text-lg font-bold text-[#200f07]">Frequently asked</h2>
            <div>
              <h3 className="font-display font-bold text-sm text-[#200f07]">
                How much does a taxi from Hubli to {route.shortCity} cost?
              </h3>
              <p className="text-sm text-[#200f07]/70 mt-1">
                {fare
                  ? `Starting from ₹${fare.amount.toLocaleString('en-IN')} one-way in a ${fare.vehicleName}, based on our published ₹/km rate. Exact fare depends on vehicle choice, tolls and driver bata — we confirm this in writing before you book.`
                  : `Fare depends on the vehicle and trip dates — WhatsApp us for a written quote before you book.`}
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-[#200f07]">
                How long does the Hubli to {route.shortCity} drive take?
              </h3>
              <p className="text-sm text-[#200f07]/70 mt-1">
                Around {route.durationLabel} covering {route.distanceKm} km via {route.highway}, depending on traffic and stops.
              </p>
            </div>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={0.35} className="mt-10 pt-8 border-t border-[#200f07]/10">
              <h2 className="font-display text-lg font-bold text-[#200f07] mb-3">Nearby routes</h2>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/routes/${r.slug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#200f07]/12 text-xs font-semibold text-[#200f07] hover:border-[#200f07] transition-colors"
                  >
                    Hubli &rarr; {r.shortCity}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
};
