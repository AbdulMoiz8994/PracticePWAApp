if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(function (data) {
      console.log("data", data);
    })
    .catch(function (err) {
      console.log("There is something wrong");
      console.log(err);
    });
} else {
  console.log("Service Worker not found");
}
