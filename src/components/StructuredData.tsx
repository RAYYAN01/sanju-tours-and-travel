import React, { useEffect } from 'react';
import { SITE_URL } from '../data/site';
import { FAQS } from '../data/faqs';
import { VEHICLES } from '../data/vehicles';
import { SERVICES } from '../data/services';

/**
 * Injects the data-derived JSON-LD (FAQPage, per-vehicle pricing offers,
 * service list) built from the same modules the pages render, so the
 * structured data can never drift from what's on screen. The core
 * LocalBusiness node lives statically in index.html; these reference it
 * by @id. Rendered once for the whole app.
 */

const SCRIPT_ID = 'structured-data-graph';
const BUSINESS_ID = `${SITE_URL}/#business`;

const toPerKm = (rate: string): number | null => {
  const n = parseInt(rate.replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
};

function buildGraph() {
  const faqPage = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

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

  return {
    '@context': 'https://schema.org',
    '@graph': [faqPage, fleetCatalog, ...services],
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
