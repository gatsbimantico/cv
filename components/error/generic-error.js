import { withElement } from "VanillaDOM";
import { withStyles } from "VanillaCSS";

import styles from "./generic-error.css" with { type: "css" };

const { scope } = withStyles(styles, "generic-error");

export const GenericError = (textContent) => withElement({ tagName: "div", className: scope, textContent });
