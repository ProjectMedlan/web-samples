// Import Workbox (Google Library for Service Worker)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');


var CACHE_NAME = 'SPWA';
var filesToCache = [
    './index.html',
    './script.js'
];

// On Install - chache files
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(filesToCache);
    })());
  });


// try to geht files from cache - add new files to cache
self.addEventListener('fetch', (e) => {
e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(CACHE_NAME);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
})());
});

// chaching strategy for images
workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// chaching strategy for html
workbox.routing.registerRoute(
    ({request}) => request.destination === 'document',
    new workbox.strategies.NetworkFirst()
);
