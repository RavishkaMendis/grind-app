// GRIND Service Worker — offline caching + push notifications
const CACHE = 'grind-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap',
];

// Install — cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(() => console.log('Failed to cache:', url)))
      );
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache-first for assets, network-first for everything else
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Cache-first for same-origin assets + fonts
  if (url.origin === location.origin || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          // Cache valid responses
          if (response && response.status === 200 && response.type !== 'opaque') {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => caches.match('/index.html'));
      })
    );
    return;
  }

  // Network-first for analytics (don't block on failure)
  if (url.hostname.includes('google') || url.hostname.includes('googletagmanager')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 200 })));
    return;
  }

  // Default: network with cache fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request) || caches.match('/index.html'))
  );
});

// Daily push notification
self.addEventListener('push', e => {
  const quotes = [
    "Nobody is coming to save you. Build the door yourself.",
    "Every day you don't build, someone else is.",
    "Don't stop when you're tired. Stop when you're done.",
    "Your future self is watching what you do right now.",
    "The market doesn't care about your effort. It rewards results.",
    "You miss 100% of the shots you don't take.",
    "Hard work beats talent when talent doesn't work hard.",
  ];
  const text = quotes[new Date().getDate() % quotes.length];
  e.waitUntil(self.registration.showNotification('GRIND ⚡', {
    body: text,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'daily-grind',
    renotify: true,
    vibrate: [100, 50, 100],
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
