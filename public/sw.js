/* Sanju Tours & Travels — offline / edge-saving service worker.
 *
 * Goal: once a visitor has loaded the site, further loads (reload, reopen
 * a tab left idle for minutes/hours, revisit) are served entirely from
 * Cache Storage with NO request to Vercel. The cache is only refreshed in
 * the background, and at most once per REVALIDATE_WINDOW_MS — so an idle
 * user coming back after 10+ minutes still gets an instant, request-free
 * render, with a single quiet refresh to keep the app current.
 *
 * Bump CACHE_VERSION on any change here so stale caches are purged.
 */
const CACHE_VERSION = 'v2';
const CACHE = `stt-cache-${CACHE_VERSION}`;
const SHELL = ['/', '/index.html'];

// Don't revalidate anything from the network more often than this.
const REVALIDATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const META_URL = '/__swmeta__/last-revalidate';
const MEDIA_RE = /\.(?:jpg|jpeg|png|gif|webp|avif|svg|ico|mp4|webm|woff2?|ttf|otf)$/i;

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

async function isRevalidationDue(cache) {
  try {
    const rec = await cache.match(META_URL);
    if (!rec) return true;
    const ts = Number(await rec.text()) || 0;
    return Date.now() - ts > REVALIDATE_WINDOW_MS;
  } catch {
    return true;
  }
}

async function stampRevalidation(cache) {
  try {
    await cache.put(META_URL, new Response(String(Date.now())));
  } catch {
    /* ignore */
  }
}

// Fire-and-forget: refresh one cached entry, but only if the window is up.
async function backgroundRefresh(cache, request, key) {
  if (!(await isRevalidationDue(cache))) return;
  await stampRevalidation(cache); // optimistic — avoids a retry storm on failure
  try {
    const res = await fetch(request);
    if (res && res.status === 200) await cache.put(key || request, res.clone());
  } catch {
    /* stay on cached copy */
  }
}

async function handleNavigate(event) {
  const cache = await caches.open(CACHE);
  const cached = (await cache.match('/index.html')) || (await cache.match('/'));

  if (cached) {
    // Instant, request-free render. Maybe refresh the shell in the background.
    event.waitUntil(backgroundRefresh(cache, event.request, '/index.html'));
    return cached;
  }

  // Nothing cached yet (true first visit) — must go to network.
  try {
    const res = await fetch(event.request);
    if (res && res.status === 200) {
      event.waitUntil(
        cache.put('/index.html', res.clone()).then(() => stampRevalidation(cache))
      );
    }
    return res;
  } catch {
    return (await cache.match('/')) || Response.error();
  }
}

async function handleImmutableAsset(event) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(event.request);
  if (hit) return hit; // fingerprinted — never revalidate
  const res = await fetch(event.request);
  if (res && res.status === 200) {
    event.waitUntil(cache.put(event.request, res.clone()));
  }
  return res;
}

async function handleMedia(event) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(event.request);
  if (hit) {
    event.waitUntil(backgroundRefresh(cache, event.request));
    return hit;
  }
  const res = await fetch(event.request);
  if (res && res.status === 200) {
    event.waitUntil(cache.put(event.request, res.clone()));
  }
  return res;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }
  // Cross-origin (fonts CDN, Google Maps iframe, WhatsApp) passes straight through.
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigate(event));
    return;
  }
  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(handleImmutableAsset(event));
    return;
  }
  if (MEDIA_RE.test(url.pathname)) {
    event.respondWith(handleMedia(event));
    return;
  }
  // Everything else — straight to network.
});
