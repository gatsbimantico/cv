import { esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./date-set.css" with { type: "css" };

const { content } = await esmImport(import.meta).from("./date-set.html").with({ type: "html" }); // prettier-ignore
const { scope } = withStyles(styles, "date-set");

export const DateSet = ({ endDate, startDate, hydrate: html = content.firstChild.cloneNode(true) }) => {
  if (!startDate && !endDate) {
    html.remove();
    return null;
  }

  html.className = scope;
  html.querySelector('[name="start"]').textContent = startDate;
  html.querySelector('[name="end"]').textContent = endDate;

  return html;
};
