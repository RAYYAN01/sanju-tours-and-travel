import React, { useEffect } from 'react';
import { SITE_URL } from '../data/site';
import { VEHICLES } from '../data/vehicles';
import { SERVICES } from '../data/services';
import { CAB_ROUTES, estimateFare } from '../data/routes';

/**
 * Enhancement schema for JS-capable crawlers: the per-vehicle pricing
 * OfferCatalog and the Service list, built from the same data modules the
 * pages render so it can't drift. The core LocalBusiness and FAQPage
 * nodes live statically in index.html (so no-JS engines get them); these
 * reference the business by @id. Rendered once for the whole app.
 */

const SCRIPT_ID = 'structured-data-graph';
const BUSINESS_ID = `${SITE_URL}/#business`;

const toPerKm = (rate: string): number | null => {
  const n = parseInt(rate.replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
};

function buildGraph() {
  const fleetCatalog = {
    '@type': 'OfferCatalog',
    '@id': `${SITE_URL}/#fleet`,
    name: 'Sanju Tours & Travels — fleet and per-kilometre rates',
    itemListElement: VEHICLES.map((v) => {
      const nonAc = toPerKm(v.rateNonAc);
      return {
        '@type': 'Offer',
        name: `${v.name} rental in Hubballi (${v.seating})`,
        description: `${v.categoryLabel}, ${v.seating}. From ${v.rateNonAc} Non-AC / ${v.rateAc} AC, minimum ${v.avgKm}/day plus driver bata ${v.batta}/day.`,
        priceCurrency: 'INR',
        ...(nonAc
          ? {
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: nonAc,
                priceCurrency: 'INR',
                unitCode: 'KMT',
                name: `${v.name} — from ${v.rateNonAc} (Non-AC)`,
              },
            }
          : {}),
        itemOffered: {
          '@type': 'Service',
          name: `${v.name} hire`,
          serviceType: v.categoryLabel,
          provider: { '@id': BUSINESS_ID },
          areaServed: { '@type': 'City', name: 'Hubballi' },
        },
        seller: { '@id': BUSINESS_ID },
      };
    }),
  };

  const services = SERVICES.map((s) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/services#${s.id}`,
    name: s.title,
    description: s.shortDesc,
    serviceType: s.categoryTag,
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: 'Hubballi' },
      { '@type': 'City', name: 'Dharwad' },
    ],
  }));

  // One Service node per outstation route — a service area, never a second
  // LocalBusiness — referencing the same business @id via areaServed.
  const routeServices = CAB_ROUTES.map((r) => {
    const fare = estimateFare(r);
    return {
      '@type': 'Service',
      '@id': `${SITE_URL}/routes/${r.slug}#service`,
      name: `Hubli to ${r.city} Taxi`,
      description: `Outstation cab from Hubballi to ${r.city} — ${r.distanceKm} km, ${r.durationLabel} via ${r.highway}.`,
      serviceType: 'Outstation Taxi',
      provider: { '@id': BUSINESS_ID },
      areaServed: {
        '@type': 'City',
        name: r.city,
        geo: { '@type': 'GeoCoordinates', latitude: r.lat, longitude: r.lng },
      },
      ...(fare
        ? {
            offers: {
              '@type': 'Offer',
              price: fare.amount,
              priceCurrency: 'INR',
              description: `From ₹${fare.amount} one-way in a ${fare.vehicleName} (approx.)`,
            },
          }
        : {}),
    };
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [fleetCatalog, ...services, ...routeServices],
  };
}

export const StructuredData: React.FC = () => {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = SCRIPT_ID;
    script.textContent = JSON.stringify(buildGraph());
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, []);

  return null;
};
