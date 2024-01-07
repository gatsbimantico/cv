import { esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./experience.css" assert { type: "css" };

import DateSet from "../date-set/date-set.js";
import ToolSet from "../tool-set/tool-set.js";
import Text from "../text/text.js";

const { scope } = withStyles(styles, "experience");
const { content } = await esmImport(import.meta).from("./experience.html").assert({ type: "html" }); // prettier-ignore

export default ({ name, position, endDate, startDate, tools, summary }) => {
  const html = content.firstChild.cloneNode(true);

  html.className = scope;
  html.querySelector('[name="name"]').textContent = `${name},`;
  html.querySelector('[name="position"]').textContent = position;
  html.querySelector('[name="date-set"]').replaceWith(DateSet({ endDate, startDate }));
  html.querySelector('[name="tool-set"]').replaceWith(ToolSet({ tools }));
  Text({ hydrate: html.querySelector('[name="summary"]'), textContent: summary });

  return html;
};
