import { esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./date-set.css" assert { type: "css" };

const { content } = await esmImport(import.meta).from("./date-set.html").assert({ type: "html" }); // prettier-ignore
const { scope } = withStyles(styles, "date-set");

export default ({ endDate, startDate, hydrate: html = content.firstChild.cloneNode(true) }) => {
  if (!startDate && !endDate) {
    html.remove();
    return null;
  }

  html.className = scope;
  html.querySelector('[name="start"]').textContent = startDate;
  html.querySelector('[name="end"]').textContent = endDate;

  return html;
};
