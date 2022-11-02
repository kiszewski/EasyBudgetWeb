'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0217b7f3bfbebe88eabc41e73fb910c6",
"index.html": "0b75f219cc874e7b353c031dbc3e4553",
"/": "0b75f219cc874e7b353c031dbc3e4553",
"main.dart.js": "7e2b4c84101a2df9ef7dede67944277a",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "77424bc31ebf659fc50e7066787c4c62",
".git/config": "8232e30dfda9bc0b46671fd0914e4f76",
".git/objects/66/393de0fa5144507e511d3416b8392e339eb18a": "947e44a710f68112b3e6514172ce1f43",
".git/objects/6f/14d3cb8e31d7e81b15f65eea20d640ee52b0bd": "77488134146abddb8aaca2d4b30846d4",
".git/objects/0b/f025d76d079fb63d63a498f05cd7674d2a8f32": "2193daea6699afb4bc0a90d034965083",
".git/objects/9c/45f1b86ca1beefbab806408032b391c1ff3b9f": "697eed2afb6495f4d3c43695668bf35f",
".git/objects/a3/ea37da76809ad598dc991c282e17896d689abc": "fc4afe1027ea8b7ae49c7951bea47fc4",
".git/objects/b5/b9bddbef90e9f16ecc3fea753e6c4b0f7664b4": "d7548e682dae4d00c350bb17a90b97e7",
".git/objects/ad/d56e18ddeaea3c0a2883ef1c261c8dfa9cf31e": "68e18efdae5f1265c58f2fc425da421c",
".git/objects/ad/56724f956a4e9c6c19657f5d9090f27277136e": "651041479b22adda12c827e9c44953ed",
".git/objects/d7/66154955438bb736fb18efcdaed788d38289ba": "17b2cabd0c146aaa9008f1b72912020d",
".git/objects/da/b7b813b0dc14e296284d8534cb2eedfd5fe106": "b10cba128d1a056222a6857b1515fc3b",
".git/objects/b4/fc5fe2cacc118fdf0e41c31d1cbec7fbeddc6a": "07b3e4e0e99b70afb5e6bc8e851f7ac8",
".git/objects/a5/72b99cc0995b931b48f82813dc5a9fdc794b1f": "9dcc2c01ea479f66d48ae934d69f4bc7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/ae9267a8feaacdad3d841b064e97c69f877bbd": "2b4faeddbf8c49f8326c8552d7fa3e9e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/532e2427b86e20988eae1def495f83c8d92e0c": "0e93bb70fca9b5cad1be2aae897f029a",
".git/objects/c7/8f30508033645aa97beec5a91da7e4c72a12d0": "f18ac3cf32c1b183042951f2dd9bec80",
".git/objects/fd/2e07cc21fa95f5190c773f486c960f8eb5bc07": "586293813f740f773468f89a01dbe898",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/128dece02b638fccf1ebc7bb70fbdbe2bef826": "a67237cfe8c1746280f3525d7fa62d8d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/45/7b3784d74be244240f3f850505444844f29c45": "d7270a113d8efd07171b9b02369bfd2e",
".git/objects/1f/fd40eedade196f40c2f4d0daa4667475bb6d0a": "c28f77e8f5f1878cfb3f6ce126ff5ede",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/b53ad7af926e83f3c3be27ba3773f0eadf5e12": "cf633cc41e5e67185d8cdc4488737ca0",
".git/objects/26/62893b3636b500ea387b3806fe2880c51a77b6": "804dd50104cf0aa70084f972db175c0b",
".git/objects/81/4502f4823a5b1054fd5b5f455b4926a7a35751": "c04c8a04005830e552e1c0f9a0af55d8",
".git/objects/81/71b5416b71cd5ab5c9068ebe30b90f72933b0f": "96f7b20a48dd91cbccc1f0f91da02b53",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/3d63ff829d0aebbdf59c595f117a12b6438c3b": "2b5d1927195c5215c63bb4e2fac8b1ee",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/09/38823ab3b1402855c9d3747715b8ee8931dbdc": "17530e5ae1b3f9e108fed813ceab4515",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/78cff74b784e244050c674466a706afae264ee": "99f0a869759e3becc115edd5072d2445",
".git/objects/5b/fb802a46ecb1ae05fc504b931be69f11f4fd07": "e0ace348ff747e607d8055d14388f6e1",
".git/objects/55/1672ba3d062a5b2cbc234076aa13e6b0bb6586": "c210e2b5aa9588dc05b161085ef39958",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/405eb32234c3f5d3b2c406c39d2957f25fdad5": "4f2c1ba8d2d6e822655a5768071c1120",
".git/objects/0f/073858d5b73270b39908e536ccd8783888186b": "0781ee6202a09afe19808a9ba8cb0525",
".git/objects/dd/601c3b9ed8dc6982d0721169d5ee15124af8c1": "55281e2dc530077294d0588807c28096",
".git/objects/d5/66c6d9fb46823b14b9c5d46c1a079de0d2ff23": "beceeb185692f9f022e71caaaa27885e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/0ca4e78f5ebeb3dccdd8ca4cf5fceb78916182": "9972635952b346e50ee73e6ae8c3aec0",
".git/objects/e8/b4039f01534cc95b83d9b9fd33c3322536c10c": "379549d6441fd7e4bcf88cbdf73e0ef1",
".git/objects/f6/cfdddae8a5ca633bc3611bd61a6489935c7dc0": "5a8c6c0ea8501d2bd4faa7bf089f62c2",
".git/objects/f1/3d02d5313eb8bd28e5342a934869c18c925798": "7a36fa97d2d5eb8f5f79408f5787ffde",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/4a/91def1a81167b13fca422831d978c2e765b725": "2df552ba3ccb3c91d0d5f0294572e855",
".git/objects/4f/72d211f4df59d7d1a6a3b613eb3fa1dd6fe3cf": "7adea79df4b894d5752c44b4ef08b663",
".git/objects/1c/fbd64269bf97c2e77108ba93ed421d24b0910f": "3e8a0453af62bc64887e57e23387cdcc",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8e/371fb38090883dc8686c00f415e16e499414ec": "c6b1e7a719de9e7e56cec7c2b6cb8b6d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b5fde2f19ac6f368c4cdd8067a87d3f",
".git/logs/refs/heads/main": "e5cace7f724761220f17dd97334cf038",
".git/logs/refs/remotes/origin/main": "325dafaf0f0dfce65d69c3ef69b61e45",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8dd50cea7b7c2b7310458362aec64511",
".git/refs/remotes/origin/main": "8dd50cea7b7c2b7310458362aec64511",
".git/index": "9c18b2383ab7439a1fc1b348867d1d1e",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "5a99ae16e6dd75beb82c02ece3b3a38e",
"assets/NOTICES": "718630ba8f972fd8f3412343e3cecfbf",
"assets/FontManifest.json": "ab04a14da082f604ee07a783f2341169",
"assets/packages/unicons/icons/UniconsLine.ttf": "b6a7ecc47d2853caf153cc1aa5cf93ec",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/unicons/icons/UniconsThinline.ttf": "fe40541d1f998ea2122a68d072f8e254",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "148902e47b90adab7680d587810eccc5",
"assets/lib/app/I18n/en_US.json": "6d662d7a696ad8e8ebcc7f55131c49e9",
"assets/lib/app/I18n/pt_BR.json": "5ea92de0ba1cde4059785be4cf789b0f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/google_icon.png": "3e26049d9396f49912688a986b4027b8",
"assets/assets/icon/icon_logo.png": "d27cc6586a55cd2223a6a837c36bc964",
"assets/assets/icon/logo.png": "5151daf2f05d26e845d5332bf239ff57",
"assets/assets/fonts/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
