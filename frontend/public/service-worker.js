const filesToCache = ['/']

const staticCacheName = 'pages-cache-v1'

// Install the files we've identified
self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache)
    }),
  )
})

// Delete old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [staticCacheName]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Network falling back to the cache
self.addEventListener('fetch', function(event) {
  console.log('Fetch', event.request)
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return caches.open(staticCacheName).then(cache => {
          cache.put(event.request, response.clone())
          return response
        })
      })
      .catch(function() {
        return caches.match(event.request)
      }),
  )
})
