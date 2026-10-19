// Service Worker: Network-first, Cache als Fallback. Kein manuelles Hochzählen nötig:
// online kommt immer die neueste Version, offline die zuletzt geladene.
const CACHE = 'chronicler-v2';
const PRECACHE = [
  './', './index.html', './manifest.json',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png',
  './fonts/Inter-Regular.woff', './fonts/Inter-SemiBold.woff', './fonts/Inter-Bold.woff', './fonts/Lora-SemiBold.woff',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      // einzeln, damit ein fehlendes Teil (z. B. CDN offline) die Installation nicht kippt
      Promise.all(PRECACHE.map(u => cache.add(new Request(u, { mode: u.startsWith('http') ? 'cors' : 'same-origin' })).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isSheetJS = url.hostname === 'cdn.jsdelivr.net' && url.pathname.includes('/xlsx@');
  if (!sameOrigin && !isSheetJS) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true }).then(hit =>
          hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())
        )
      )
  );
});
