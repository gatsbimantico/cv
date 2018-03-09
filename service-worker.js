(function (app) {
  'use strict';

  const CACHE_NAME = 'CVjs-1.0.B391',
    externalUrlsToCache = [
      'http://www.gravatar.com/avatar/e6deefe7eb4c5f22991e392cc720fed5.jpg?s=512&r=x',
      'https://fonts.googleapis.com/css?family=Assistant:400,700|Muli:200,900',
      'https://fonts.gstatic.com/s/assistant/v2/2sDcZGJYnIjSi6H75xkzaGW5Kb8VZA.woff2',
      'https://fonts.gstatic.com/s/assistant/v2/2sDZZGJYnIjSi6H75xk700CsBJ0YTivYtg.woff2',
      'https://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-adf3nOCX2z24PMFk.woff2',
      'https://www.google-analytics.com/analytics.js'
    ],
    internalUrlsToCache = [
      '.',
      'index.html',
      'css/styles.css',
      'pages/app.js'
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
