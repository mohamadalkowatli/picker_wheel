'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5dcce7607e0c98626a7be7b7f61e93bf",
".git/config": "fbf0af9c18f531c097eeadc3e1faaa9f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "08133b822da1739bb97a13e13a5f59fc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e9c850e64a475b72a12d9cfd8fa2b905",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9dbea7a658c03ef46111a1c223ee3ccf",
".git/logs/refs/heads/gh-pages": "df756b580acf4b529357e8f70298d14a",
".git/logs/refs/heads/main": "844c1760eeec5c2c1ac4ec146af7b838",
".git/logs/refs/remotes/origin/gh-pages": "ed7272fd1feb3e8fdbd191f641444c3e",
".git/logs/refs/remotes/origin/main": "7de4e9c7f089ac7a8ae4ec9cee2751d3",
".git/objects/03/9dd15c09016fb2aff27ee33500d2a9201290bf": "5286197b00c448bc7076b7d9d4fa180f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/a019032845cd344d50d9e99ed200d981d5dc07": "60b4efa9f39652427631adb0d1a9f39d",
".git/objects/07/e8714f7dd06cea0dee84889f6fb6015e0abdde": "a64f79a0c98c96a7634f741e4598ed29",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/17/85e76837fe91e53d3d2f4756701385929c49dd": "ba19aa640a269b936401d3d8e13b0b71",
".git/objects/18/92ad4074a0ce6d51532d941abcffd5204beeb0": "6b0a95e601a25461b9d328ea3d626bc9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/31d454cafa9e1059bd333feaae375a67729ca7": "dec51aa571d2f56543f5f6526b98c280",
".git/objects/1d/b894b3510e8272b62930affb465d2f601459c0": "98b42d7eadbf74307d919ce74b082558",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/23/6e9f2edac51ce285591bc9cf193ad1f06eb0fe": "2685422631d64075c8d87d00abdfc43a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/0304e2359427f0180978b0c98b87d77da4dd3e": "8186698f1f5f8e462248d304b03bcccd",
".git/objects/28/0e43778288bf403321e122d224943221ef4cf7": "584e1f38a67030b1202a52e074f1fb50",
".git/objects/2b/aa38d4146f3711f85487b4dccb2524a9628a86": "88fbdf426a05010343cb64f56927f52d",
".git/objects/2e/62b3d2972c5d86df76ddb08814081e2b9968c7": "9f9c221d58b88eaf2ce2b79c7881eef7",
".git/objects/35/5c92513c94564a1256fbb1b96252e5f048fea2": "6afac9374ba1f2486382f57ab9981c3f",
".git/objects/3b/9481d8089872f854541495928924429172103a": "5ad738d669a9c394ab60dcd897dbbbc9",
".git/objects/3f/90169f0ebacd1ec11fde0292ccf6c6d86b6610": "0d6e75072b5e03a9c9b0ca3b9a19aa23",
".git/objects/42/3149158acd24f3779427729e77fe3cf4eb07f2": "f9e7d55ecb954014892b69430b9b665c",
".git/objects/44/354eee67866cc5cb8786c2d3ce1540a3abb6c7": "4fc711ceb435a93fba2ad9c9a24df443",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/534274159989cf845423174ff2c14da2bd71fc": "878f1d899268631070493572ce07c518",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/b0fdc60cc9b44a0fbddcbf8099f96494d35d81": "3120eee070b2c222cf68839394657093",
".git/objects/4d/7d8dfac7c94752541674c6e7b5410e074247cd": "8835fb6572005a87f4b0a02366e3cea7",
".git/objects/56/c2a76a2fd1eab0d9f80247c98050d516bbc2d9": "8bd27d4cb4f4897f4005cb771393a99e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/6a04bfa9d33f257d6edeeca793293c3beae226": "91c2563d49919da5b67b80109699b308",
".git/objects/5c/db362be1b82395f83bc5f86a24a9d72d3b0fc1": "d23d16a0fc329d3410de4d616ebfd996",
".git/objects/5d/59ab840f653886a88bc6724a97f916f3bb663d": "7ae5942411a11d5ebe11ec035a22f5f4",
".git/objects/61/5359ae098b8a9f73d4c153b842412d5a32c9a7": "525e484995be4bbe24cc4d26df55506e",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/fb130683e5375b15d822237e977d130f2bb845": "cebaf606ef3c864ef171adc66565242c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/71/15913e72784a0abe0b2917c75397b1941b16c0": "17e9dd58fce521449b6e5bb0d0849078",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/1a1dbc4586c7560c2b8e52631317ba4f6597b2": "dca0fd1cf74529d1cace6f166984a220",
".git/objects/78/32e1e9b1d64b00a514be4a8b528e3189556f24": "513f72e86035a1b5ca763d2591075ab3",
".git/objects/7a/0c1682aec406cb22b11e3219e53d2f8f40933e": "72cbfe460e11931722c778fb5ac442ba",
".git/objects/7b/5c241da5c9497b578c4e1a6f6d482f941717fa": "bacd867aed8054d4775b9b4f79955e4d",
".git/objects/81/9029c0e9aa69982bb4ba1aa8aa575d5f566a93": "bd8a9f0c4116c22ec99bb33a3f23674d",
".git/objects/83/32bc0725b4636fab70f0ee8d414d91af0e3b98": "50ccd760ac7cdf96fa5f1e2219eced93",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5e03357f4fbc5deae57453ba7156ab795d93eb": "8d51253d4d849cfc7a27a76f0785cb02",
".git/objects/89/aa593b0d35b7378b44a1df297672428bb11b78": "fb76edbba1b03666a4885b83555632fb",
".git/objects/8a/8f2080e96426d799b5ca4f0dee1f3be54ae9a5": "2535c7a074f69bdc299df442924168bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/02d2660772b84bf47bf51db10d6a370a4245f0": "a2c010a20ee474ae9ca8c5584676b00d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/7c8a2acaff1b2c6acc728aaf3b6af2ccb1a2fb": "bb35eb3b6b921ee80e3570bd698ed465",
".git/objects/9d/f6ec2fa3514b67c50aad632a17fcc94c0fa39f": "a460b7c62bd065ff0f9640a735976dea",
".git/objects/a0/6bf1041f319ec91d0b09bdf461ff0f2724c452": "6fa69d3f1c2a4cba93cb40c1b0435f41",
".git/objects/a0/75cd75f80a170d522bec3513e6549237f6dd7f": "c96436b75c528c0e1a281120f729b866",
".git/objects/a0/c54528eb1b6a8c8310420f49483942d791da2e": "10262bb8d49700ed6de6335fe7ac5c92",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/0d5d0357ffd8c91f5c58fb5071d4e54067ab09": "5d0b50d66bc8eac0d72cb5b949ed7122",
".git/objects/ce/df4530d0a2d38d425ec541b286808c8945d123": "92ba7e3251b20f49d74f0219928fd0f3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/8d6c67456d95cace49ca62f55dbc5762159caa": "175d78941718a9a68d7b1121a58f7f59",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ad91fd9948a3417610921fccceb97dd6834759": "d7ce22e07a4fc1caa0b0f65b99091e07",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/ec8aee6d5be826eebbf6ccc9773b4cc2ddbb1b": "0826442ef7f5682cd5b71246996b198c",
".git/ORIG_HEAD": "cb4837dd9cd97f059414ca68ceced648",
".git/refs/heads/gh-pages": "779ea0e8ffa88cac9360aa18d77aedc9",
".git/refs/heads/main": "6100de2351290e4ce372a0972305738a",
".git/refs/remotes/origin/gh-pages": "f99c91c27d6c86b17723ccad9fc1bb5e",
".git/refs/remotes/origin/main": "6100de2351290e4ce372a0972305738a",
"assets/AssetManifest.bin": "f9561c0936ac07f39d89790793d45f78",
"assets/AssetManifest.bin.json": "37d9a28ab6e7b3d41d26242b8d1f82b9",
"assets/AssetManifest.json": "d32e8d88e9dd9448f89b9db899f7b1af",
"assets/assets/EHG.png": "b92d5983e0c2e0ad1bdb75ca3a7137da",
"assets/assets/fitness.jpg": "7029e8b6b24f77135a9b09d9c9e7e449",
"assets/assets/HaKeem.png": "139f3170c3fa5246a9ff670935e2504a",
"assets/assets/iconference_logo_new.png": "0d17f52cb3b11653f1bd2567c4ec6cb0",
"assets/assets/kcal.png": "2c3b7d18e232c2f97187c60bdf6d0404",
"assets/assets/Novo_Nordisk.png": "cae4904fb1f24009bdddd00f4f8eb893",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2c6af0e67beb3e634c51be4e263af993",
"assets/NOTICES": "b2da37e961190c56447ace7cd0bf4c99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c52a19f9ddbc2d04dcb8243ddd3da18f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f843035c145ed27ccc7e46aff7b49bc8",
"/": "f843035c145ed27ccc7e46aff7b49bc8",
"main.dart.js": "f068db185a92661cdbbd833006c65352",
"manifest.json": "190e211365332b8d8f92d4bb8d80376d",
"version.json": "fb51759e535d6ada9921a016c0f83cf6"};
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
