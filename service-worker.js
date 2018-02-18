(function () {
    'use strict';
    //1) starts by defining a cache name, and a list of URLs to be cached
    //Note that . is also cached; represents the current directory, in this case, app/.
    const CACHE_NAME = 'static-cache',
      externalUrlsToCache = [
        'http://www.gravatar.com/avatar/e6deefe7eb4c5f22991e392cc720fed5.jpg?s=512&r=x',
        'https://fonts.googleapis.com/css?family=Assistant:400,700|Muli:200,900',
        'https://fonts.gstatic.com/s/assistant/v2/2sDcZGJYnIjSi6H75xkzaGW5Kb8VZA.woff2',
        'https://fonts.gstatic.com/s/assistant/v2/2sDZZGJYnIjSi6H75xk700CsBJ0YTivYtg.woff2',
        'https://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-adf3nOCX2z24PMFk.woff2'
      ],
      internalUrlsToCache = [
        '.',
        'index.html',
        'css/styles.css',
        'pages/app.js',
        '/service-worker.js'
      ],
      urlsToCache = [
        ...internalUrlsToCache,
        ...externalUrlsToCache
      ];

    //2) An install event listener is then added to the service worker.
    self.addEventListener('install', function (event) {
        //tells the browser not to preemptively terminate the service worker before the asynchronous
        //operations inside of it have completed.
        event.waitUntil(
            //When the service worker installs, it opens a cache and  the app's static assets.
            //these assets are available for quick loading
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    return cache.addAll(urlsToCache);
                })
        );
    });

    //3)Fetch from the cache
    //adds a fetch event listener to the service worker; When a resource is requested,
    //the service worker intercepts the request and a fetch event is fired.
    self.addEventListener('fetch', function (event) {
        event.respondWith(
            //Tries to match the request with the content of the cache,
                caches.match(event.request)
                .then(function (response) {
                    //and if the resource is in the cache, then returns it.
                    //if not, attempts to get the resource from the network using fetch.
                    return response || fetchAndCache(event.request);
                })
        );
    });

    function fetchAndCache(url) {
        return fetch(url)
            .then(function (response) {
                // Check if we received a valid response
                //If the response is invalid, throws an error and logs a message to the console (catch)
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                //If the response is valid, creates a copy of the response (clone),
                //stores it in the cache, and then returns the original response.
                //Note: We clone the response because the request is a stream that 
                //can only be consumed once
                return caches.open(CACHE_NAME)
    .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });

            })
            .catch(function (error) {
                console.log('Request failed:', error);
                // You could return a custom offline 404 page here
            });
    }

})();
