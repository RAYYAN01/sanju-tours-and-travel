import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  PAGE_SEO,
  PAGE_CRUMB,
} from '../data/site';

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
    const path = PAGE_SEO[pathname] ? pathname : '/';
    const seo = PAGE_SEO[path];
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

    // BreadcrumbList — Home > <Page>. Only for known sub-pages.
    const existing = document.getElementById(BREADCRUMB_ID);
    if (existing) existing.remove();

    if (path !== '/' && PAGE_CRUMB[path]) {
      const crumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: PAGE_CRUMB[path],
            item: canonical,
          },
        ],
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
