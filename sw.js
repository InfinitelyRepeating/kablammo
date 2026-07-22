// Kablammo offline cache — cache-first for the app shell, network passthrough with
// cache-fill for everything else (tracks, favicon, etc).
const C = 'kablammo-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.addAll(['./', './index.html']).catch(() => {})));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(C).then(c => c.put(e.request, copy).catch(() => {}));
      return res;
    }).catch(() => caches.match('./')))
  );
});
