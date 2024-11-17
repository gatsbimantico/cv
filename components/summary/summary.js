import { withElement } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./summary.css" with { type: "css" };

import { Text } from "../text/text.js";

const { scope } = withStyles(styles);

export const Summary = (textContent) =>
  withElement({
    tagName: "section",
    children: [
      Text({
        className: scope,
        textContent,
      }),
    ],
  });
