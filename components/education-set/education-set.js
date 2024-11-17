import { esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from './education-set.css' with { type: 'css' };

import { List } from "../list/list.js";
import { Education } from "./education.js";

const { scope } = withStyles(styles, 'education-set');
const { content } = await esmImport(import.meta).from("./education-set.html").with({ type: "html" }); // prettier-ignore

export const EducationSet = ({ hydrate: html = content.firstChild.cloneNode(true), education = [] }) => {
  html.className = scope;
  html.querySelector('[name="set"]').replaceChildren(...List(Education, education));

  return html;
};
