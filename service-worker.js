const CACHE_NAME = 'giulia-castro-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Allura&family=Poppins:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://lhujzzoqebgjbsnezmrt.supabase.co/storage/v1/object/public/Photos/giuliainstagram1.png',
  'https://lhujzzoqebgjbsnezmrt.supabase.co/storage/v1/object/public/Photos/qrcodeinstagramgiuliapr.png',
  'https://lhujzzoqebgjbsnezmrt.supabase.co/storage/v1/object/public/Photos/giuliafotoqrcodebrlogotipo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
