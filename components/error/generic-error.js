import { withElement } from "VanillaDOM";
import { withStyles } from "VanillaCSS";

import styles from "./generic-error.css" assert { type: "css" };

const { scope } = withStyles(styles, "generic-error");

export default (textContent) => withElement({ tagName: "div", className: scope, textContent });
