import { withElement } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./revision.css" with { type: "css" };

const { scope } = withStyles(styles);

export const Revision = ({ manifest }) =>
  withElement({
    tagName: "footer",
    id: "revision-id",
    className: scope,
    innerHTML: `<a href="https://github.com/gatsbimantico/cv/blob/master/README.md">${manifest.short_name}<small><small> v.${manifest.version}</small></small></a>`,
  });
