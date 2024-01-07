import { esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./experience-set.css" assert { type: "css" };

import List from "../list/list.js";
import Experience from "./experience.js";

const { content } = await esmImport(import.meta).from("./experience-set.html").assert({ type: "html" }); // prettier-ignore
const { scope } = withStyles(styles, "experience-set");

export default ({ hydrate: html = content.firstChild.cloneNode(true), work = [] }) => {
  html.className = scope;
  html.querySelector('[name="set"]').replaceChildren(...List(Experience, work));

  return html;
};
