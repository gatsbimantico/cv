import { withElement } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./hero.css" assert { type: "css" };

const { scope } = withStyles(styles, "hero");

export default ({ name, label }) =>
  withElement({
    tagName: "div",
    className: scope,
    innerHTML: `<h1>${name}</h1><h2>${label}</h2>`,
  });
