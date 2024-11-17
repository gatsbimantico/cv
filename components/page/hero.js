import { withElement } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./hero.css" with { type: "css" };

const { scope } = withStyles(styles, "hero");

export const Hero = ({ name, label }) =>
  withElement({
    tagName: "div",
    className: scope,
    innerHTML: `<h1 tabindex="0">${name}</h1><h2 tabindex="0">${label}</h2>`,
  });
