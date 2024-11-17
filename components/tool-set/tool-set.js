import { withElement, esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./tool-set.css" with { type: "css" };

import { List } from "../list/list.js";
import { Tool } from "./tool.js";

const { scope } = withStyles(styles, "tool-set");
const { content: htmlTemplate } =
  await esmImport(import.meta).from("./tool-set.html").with({ type: "html" }); // prettier-ignore

export const ToolSet = ({
  hydrate = htmlTemplate.cloneNode(true),
  tools,
}) => {
  if (!tools) return [];

  withElement({
    hydrate: hydrate.querySelector('[name="set"]'),
    tagName: 'ul',
    className: scope,
    children: List(Tool, tools),
  });

  return hydrate;
};
