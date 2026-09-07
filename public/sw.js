/* Sanju Tours & Travels — offline/edge-saving service worker.
 *
 * Goal: a returning visitor (open tab, reload, revisit) pulls the app
 * shell, bundle, images and video from the local Cache Storage instead
 * of hitting Vercel every time — which keeps Edge Request volume low.
 *
 * Bump CACHE_VERSION on any change to this file so old caches are purged.
 */
const CACHE_VERSION = 'v1';
const CACHE = `stt-cache-${CACHE_VERSION}`;
const SHELL = ['/', '/index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(SHELL))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

const MEDIA_RE = /\.(?:jpg|jpeg|png|gif|webp|avif|svg|ico|mp4|webm|woff2?|ttf|otf)$/i;

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }
  // Let anything cross-origin (fonts CDN, Google Maps iframe, WhatsApp) pass straight through.
  if (url.origin !== self.location.origin) return;

  // 1. Page navigations — network-first so new deploys show up immediately,
  //    fall back to the cached shell when offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('/index.html', copy));
          return res;
        })
        .catch(() =>
          caches.match('/index.html').then((r) => r || caches.match('/'))
        )
    );
    return;
  }

  // 2. Fingerprinted build assets are immutable — cache-first, zero revalidation.
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ||
          fetch(request).then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
            return res;
          })
      )
    );
    return;
  }

  // 3. Images / video / fonts — stale-while-revalidate.
  if (MEDIA_RE.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE).then((c) =>
        c.match(request).then((hit) => {
          const network = fetch(request)
            .then((res) => {
              // Only cache complete (200) responses; skip 206 range chunks.
              if (res && res.status === 200) c.put(request, res.clone());
              return res;
            })
            .catch(() => hit);
          return hit || network;
        })
      )
    );
    return;
  }

  // 4. Everything else — straight to network.
});
