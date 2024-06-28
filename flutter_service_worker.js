'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d5cd3e1073b19e7a3d881564a8261091",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "f1001411c9dc67adbbc4f9d69f768413",
"/": "f1001411c9dc67adbbc4f9d69f768413",
"main.dart.js": "b931525ab40e1ff9d1b0acdec4b8c29c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "221ff9db830184011ddb40e1bba4fa34",
"assets/NOTICES": "cdfbdf83f33237b55f8d6c66cc5b3685",
"assets/FontManifest.json": "85f502861f693ab16c188f40478ea228",
"assets/AssetManifest.bin.json": "026f4d41ba5b876c1a4fee63b364e05a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1c48ce647e3750b5d41eb1c8c72f1d1d",
"assets/fonts/Tiny/Tiny5-Regular.ttf": "6e6ba498de8bbc91d05ea784652d1943",
"assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/fonts/MaterialIcons-Regular.otf": "a58b49a2f142bd955764680395dee4a0",
"assets/assets/images/02_mundoappto/02.png": "bf22f0e58183af6a40a9eb2f0860f09e",
"assets/assets/images/02_mundoappto/01.jpeg": "a8ffcff05cbcb46c9ea7b20f8b85fa21",
"assets/assets/images/00_movie/01.png": "c3738cf270f1cd6320ba3b5f7bf02063",
"assets/assets/images/00_movie/02.png": "c3738cf270f1cd6320ba3b5f7bf02063",
"assets/assets/images/06_r10score/01.jpg": "e8c1d8dc04d0b20073031e02f007fdee",
"assets/assets/images/06_r10score/03.jpg": "747ade12c92b64f15f3bf8c2ccc76e76",
"assets/assets/images/06_r10score/02.jpg": "46041a9cdab7b2134e22e22e83ec9d14",
"assets/assets/images/06_r10score/06.jpg": "81bf6ca3d82b34d4d2c80abec12d0ad9",
"assets/assets/images/06_r10score/07.jpg": "c5c7b58892ad372eef036e0ac0621419",
"assets/assets/images/06_r10score/05.jpg": "88015e3844a8e16d2a39c0466ca6258c",
"assets/assets/images/06_r10score/04.jpg": "3f7e230cf8e9189a460efdc729e9df39",
"assets/assets/images/04_servicio_tecnico/00.png": "dc88c22c604b620a7d5cb543f71595c9",
"assets/assets/images/05_taxiwill/00.png": "8066a41a97516f1befd2b5b6ea777931",
"assets/assets/images/05_taxiwill/01.png": "7c51251c0252a4ff2428445402ac58e3",
"assets/assets/images/05_taxiwill/03.png": "e0a5534ac4055ed4d9053cbde1d81e29",
"assets/assets/images/05_taxiwill/02.png": "be10721c2a03fba7c3cd3169a69d654a",
"assets/assets/images/05_taxiwill/06.png": "9bf5c9d41a24d68459ef24359425aa80",
"assets/assets/images/05_taxiwill/05.png": "ede0a88917ff2dc1163ae5816445d919",
"assets/assets/images/05_taxiwill/04.png": "9b469f42b525115621cfb679ab8b91cd",
"assets/assets/images/04_paperless/06.jpeg": "d324ad9b74c5ded7475dffd88c5cefac",
"assets/assets/images/04_paperless/07.jpeg": "2a2e4f1f063bc6b97dbde0f7797fb63f",
"assets/assets/images/04_paperless/00.jpg": "f56ac8f2b00c06820fbe64809c463820",
"assets/assets/images/04_paperless/01.jpg": "49c085f4c837a2b2bf289f3503d0b6e7",
"assets/assets/images/04_paperless/03.jpg": "aa64a7b6b28889867ca276db97774268",
"assets/assets/images/04_paperless/02.jpg": "3126fca74158d976e337ce4ef247c2a8",
"assets/assets/images/04_paperless/05.jpg": "6502a958d8d9a0b0d53d2e0f93aff86e",
"assets/assets/images/04_paperless/04.jpg": "b9137daac529142fec308d661b4b4fb8",
"assets/assets/images/04_paperless/08.jpeg": "4ff0dbaceb21c8b0fe87706e3b5f9ffb",
"assets/assets/images/04_paperless/09.jpeg": "3ad3d235bb85fc3d00f1c66b6f4d60cf",
"assets/assets/images/apps/App4.png": "14962abfdb19bf73fdb8e2a58dcc0bb5",
"assets/assets/images/apps/App5.png": "56a74e65530d02d47b7f859c49721184",
"assets/assets/images/apps/App6.png": "98691aa0ce946de846b49886a3b4ab24",
"assets/assets/images/apps/App2.jpg": "2e800963d8e0d2916eabecc497a12d5d",
"assets/assets/images/apps/App3.jpg": "3ae361483d721e97a19755240f67777d",
"assets/assets/images/apps/App1.jpg": "e08ec35bee8f435900c21acae19c6ca5",
"assets/assets/images/03_cappazo/01.jpeg": "c70a087e0428124d6afc77a7b5cca2a2",
"assets/assets/images/03_cappazo/02.jpeg": "11c55d8324367d4c0d68ae184f4b4fa9",
"assets/assets/images/03_cappazo/03.jpeg": "db71428981d89223e848f8e162980f02",
"assets/assets/images/03_cappazo/04.jpeg": "6cad0c736d4a40d8427546b1da214059",
"assets/assets/docs/ronald_fabian_cv.pdf": "48e9bfddc3bd9fc57fb9e868e455e782",
"assets/assets/icons/github.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/icons/biolink.svg": "d1f44dcf8935c2c8f2b2c6ef01f26a50",
"assets/assets/icons/instagram.svg": "2bd5714b82fd68eb1a380b88689010d3",
"assets/assets/icons/codepen.svg": "59cc541b4dde52d744e71ae408806e98",
"assets/assets/icons/linkedin.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/icons/twitter.svg": "48943146a03795b712d55d2fa735253e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
