const CACHE_NAME = 'anime-tracker-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // Pass-through padrão para garantir dados em tempo real da API
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
