const filesToCache = ['/', '/static/js/bundle.js']

const staticCacheName = 'pages-cache-v1'

self.addEventListener('install', event => {
  self.skipWaiting()
  console.log('Attempting to install service worker and cache static assets')
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache)
    }),
  )
})

self.addEventListener('activate', event => {
  console.log('Activating new service worker...')
  const cacheWhitelist = [staticCacheName]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log(`Deleting cache ${cacheName}`)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// network first, fallback to cache
// useful in development, where we want to see the app changes right away
// in production should maybe change to cache first
self.addEventListener('fetch', function(event) {
  console.log('Fetch event for ', event.request.url)
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (event.request.url.indexOf('sockjs-node') !== -1) {
          return response
        } else {
          return caches.open(staticCacheName).then(cache => {
            console.log(`Caching new page ${event.request.url}`)
            cache.put(event.request.url, response.clone())
            return response
          })
        }
      })
      .catch(() => {
        return caches.match(event.request).then(response => {
          console.log('Found ', event.request.url, ' in cache')
          return response
        })
      }),
  )
})

// cache first

// self.addEventListener('fetch', event => {
//   console.log('Fetch event for ', event.request.url)
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(response => {
//         if (response) {
//           console.log('Found ', event.request.url, ' in cache')
//           return response
//         }
//         console.log('Network request for ', event.request.url)
//         return fetch(event.request).then(response => {
//           if (event.request.url.indexOf('sockjs-node') !== -1) {
//             return response
//           } else {
//             console.log(`Caching new page ${event.request.url}`)
//             return caches.open(staticCacheName).then(cache => {
//               cache.put(event.request.url, response.clone())
//               return response
//             })
//           }
//         })
//       })
//       .catch(error => {
//         console.log(`fetch error ${error}`)
//       }),
//   )
// })
