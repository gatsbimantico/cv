import { esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from './education.css' assert { type: 'css' };

const { scope } = withStyles(styles, 'education');
const { content } = await esmImport(import.meta).from("./education.html").assert({ type: "html" }); // prettier-ignore

export default ({ institution, studyType, area, endDate }) => {
  const html = content.firstChild.cloneNode(true);

  html.className = scope;
  html.querySelector('[name="end-date"]').textContent = endDate;
  html.querySelector('[name="institution"]').textContent = institution;
  html.querySelector('[name="study-type"]').textContent = studyType;
  html.querySelector('[name="area"]').textContent = area;

  return html;
};
