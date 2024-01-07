import { withStyles } from "VanillaCSS";
import styles from "./timer.css" assert { type: "css" };

const { scope } = withStyles(styles, "hot-reload-timer");

const HOT_RELOAD_INTERVAL = 5_000;
let lastDiff = null;

const hotReloadFn = async (promisedDiff) => {
  const newDiff = await promisedDiff;
  if (lastDiff === null) {
    lastDiff = newDiff;
  } else if (lastDiff !== newDiff) {
    location.reload();
  }
}
const getDiff = () => fetch('./hot').then(r => r.text());

export default () => {
  const el = document.createElement('div');

  el.style.transition = HOT_RELOAD_INTERVAL + 'ms linear';

  const tick = async () => {
    el.classList.add('reset');
    await hotReloadFn(getDiff());
    el.textContent = lastDiff;
    el.classList.remove('reset');
  };
  setInterval(tick, HOT_RELOAD_INTERVAL);
  setTimeout(tick, HOT_RELOAD_INTERVAL / 10);

  el.className = scope;

  return el;
}