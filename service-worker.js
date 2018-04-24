(function (app) {
  'use strict';

  const CACHE_NAME = 'CVjs-1.0.B4#0',
    externalUrlsToCache = [
      'http://www.gravatar.com/avatar/*',
      'https://fonts.googleapis.com/*',
      'https://fonts.gstatic.com/*',
      'https://www.google-analytics.com/analytics.js'
    ],
    internalUrlsToCache = [
      '.',
      'index.html',
      'css/candidate.css',
      'pages/candidate.js',
      'card.html',
      'css/card.css',
      'pages/card.js'
    ],
    urlsToCache = [
      ...internalUrlsToCache,
      ...externalUrlsToCache
    ];

  self.addEventListener('install', function (event) {

    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {

          return cache.addAll(urlsToCache);

        })
    );

  });

  self.addEventListener('activate', function(event) {

    event.waitUntil(
      caches.keys().then(function(keyList) {

        return Promise.all(keyList.map(function(key) {

          if (CACHE_NAME.indexOf(key) === -1) {

            return caches.delete(key);

          }

        }));

      })
    );

  });

  self.addEventListener('fetch', function (event) {

    event.respondWith(
      caches.match(event.request)
        .then(function (response) {

          return response || fetchAndCache(event.request);

        })
    );

  });

  function fetchAndCache(url) {

    return fetch(url)
      .then(function (response) {

        if (!response.ok) {

          throw Error(response.statusText);

        }

        return caches.open(CACHE_NAME)
          .then(function (cache) {

            cache.put(url, response.clone());

            return response;

          });

      })
      .catch(function (error) {

        console.log('Request failed:', error);

      });

  }

}());
