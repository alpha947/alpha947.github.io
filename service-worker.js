const CACHE_NAME = "app-cache-v1";
const urlsToCache = [
    "./",
    "./index.html",
    "./styles.css", // Ajoutez les fichiers CSS de votre projet
    "./script.js", // Ajoutez vos scripts JS
    "./icons/icon-192x192.png",
    "./icons/icon-512x512.png"
];

// Installer le service worker et mettre les fichiers en cache
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Caching app shell...");
            return cache.addAll(urlsToCache);
        })
    );
});

// Activer le service worker et supprimer les anciens caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Intercepter les requêtes et retourner les fichiers en cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
