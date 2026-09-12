import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  PAGE_SEO,
  PAGE_CRUMB,
  BUSINESS_GEO,
} from '../data/site';
import { getCabRoute } from '../data/routes';

/**
 * Head manager for the SPA — no external dependency.
 * Mounted once in App; re-runs on every route change to keep
 * <title>, description, canonical, Open Graph / Twitter tags and the
 * per-page BreadcrumbList JSON-LD in sync with the current path.
 */

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const BREADCRUMB_ID = 'seo-breadcrumb-jsonld';

export const Seo: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Dynamic route-detail pages (/routes/:slug) build their own title/
    // description/breadcrumb from the route data instead of the static map.
    const routeMatch = pathname.match(/^\/routes\/([^/]+)$/);
    const route = routeMatch ? getCabRoute(routeMatch[1]) : undefined;

    const path = route ? pathname : PAGE_SEO[pathname] ? pathname : '/';
    const seo = route
      ? {
          title: `Hubli to ${route.shortCity} Taxi & Cab Service | Sanju Tours & Travels`,
          description: `Book a cab from Hubli to ${route.city} — ${route.distanceKm} km, ${route.durationLabel} via ${route.highway}. Transparent per-km rates, 24/7 dispatch.`,
        }
      : PAGE_SEO[path];
    const canonical = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);

    // Geo meta tags — active per page, not a fixed copy-paste. Every page
    // defaults to the business's own location; a route page instead points
    // at its destination city, since that's the place the page is actually
    // about, and updates the ICBM pair to match.
    const geo = route
      ? { placename: `Hubballi to ${route.shortCity}, Karnataka`, region: BUSINESS_GEO.region, lat: route.lat, lng: route.lng }
      : BUSINESS_GEO;
    upsertMeta('name', 'geo.region', geo.region);
    upsertMeta('name', 'geo.placename', geo.placename);
    upsertMeta('name', 'geo.position', `${geo.lat};${geo.lng}`);
    upsertMeta('name', 'ICBM', `${geo.lat}, ${geo.lng}`);

    // BreadcrumbList — Home > <Page>. Only for known sub-pages.
    const existing = document.getElementById(BREADCRUMB_ID);
    if (existing) existing.remove();

    const trail = route
      ? [
          { name: 'Home', item: `${SITE_URL}/` },
          { name: 'Popular Routes', item: `${SITE_URL}/routes` },
          { name: `Hubli to ${route.shortCity}`, item: canonical },
        ]
      : path !== '/' && PAGE_CRUMB[path]
        ? [
            { name: 'Home', item: `${SITE_URL}/` },
            { name: PAGE_CRUMB[path], item: canonical },
          ]
        : null;

    if (trail) {
      const crumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: t.name,
          item: t.item,
        })),
      };
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = BREADCRUMB_ID;
      script.textContent = JSON.stringify(crumb);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
};
