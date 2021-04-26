const cacheName = "demo-app";

self.addEventListener("activate", function (e) {
  console.log("The Service Worker is activated");
});

// we are k=amking this for saving our file in cache as fffline we avavliable
self.addEventListener("install", function (event) {
  console.log("Service woker install");
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (data) {
        console.log("In service Workder we are saving our file in cahe");
        return data.addAll(["/", "./index.html", "./home.html",'./About.html']);
      })
      .catch(function (err) {
        console.error(err.message);
      })
  );
});

// we are making this whenever we cal later the it will automtcially fetch from here if not avaliable then we fetch from uper function
self.addEventListener("fetch", function (event) {
  console.log("service Worker fethc", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        console.log("Fetching", response);
        return response || fetch(event.request);
      })
      .catch(function (err) {
        console.error(err.message);
      })
  );
});
