importScripts('/factorization/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/factorization/_nuxt/40c77e01573c20c367a4.js",
    "revision": "4cff8ba93cbe135d75c62eecb27e1d83"
  },
  {
    "url": "/factorization/_nuxt/509daa26770435411685.js",
    "revision": "375341f98912db743110a4cf94803f6b"
  },
  {
    "url": "/factorization/_nuxt/76dfaf679a37d9778619.js",
    "revision": "c4123516a34ff3a6e80b282be3928b8c"
  },
  {
    "url": "/factorization/_nuxt/992bf5ea11bcacc51714.js",
    "revision": "46979530eac0fab13ec1c0575c977e4a"
  },
  {
    "url": "/factorization/_nuxt/e8e63de79d8b26f148ac.js",
    "revision": "ce083c9203e0383ed709911ec5f29b48"
  },
  {
    "url": "/factorization/_nuxt/fac483667e1c71a82b78.js",
    "revision": "c43c0e8e85d379ac6791dc5662f0a96b"
  }
], {
  "cacheId": "factorization",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/factorization/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/factorization/.*'), workbox.strategies.networkFirst({}), 'GET')
