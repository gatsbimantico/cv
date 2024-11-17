import { whenDOMLoaded } from "VanillaDOM";

import { GenericError } from "./components/error/generic-error.js";
import { Timer as HotReloadTimer } from "./components/hot-reload/timer.js";
import { CandidatePage } from "./pages/candidate.js";

import cv from "./cv.js";

import manifest from "./manifest.json" with { type: "json" };

try {
  document.body.replaceChildren(...CandidatePage({ cv, manifest }));

  if (location.hostname === 'localhost') {
    // to skip the service worker on development
    // use hot reloading instead
    document.body.appendChild(HotReloadTimer());
  } else if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
  }
} catch (err) {
  document.body.replaceChildren(GenericError(err));
}

await whenDOMLoaded();
document.body.classList.add("loaded");
