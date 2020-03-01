self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/pwa-my-app-/',
          '/pwa-my-app-/index.html',
          '/pwa-my-app-/index.js',
          '/pwa-my-app-/style.css',
          '/pwa-my-app-/images/fox1.jpg',
          '/pwa-my-app-/images/fox2.jpg',
          '/pwa-my-app-/images/fox3.jpg',
          '/pwa-my-app-/images/fox4.jpg'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });
   