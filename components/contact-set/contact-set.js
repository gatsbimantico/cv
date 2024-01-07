import { withElement, esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./contact-set.css" assert { type: "css" };

const { content } = await esmImport(import.meta).from("./contact-set.html").assert({ type: "html" }); // prettier-ignore
const { scope } = withStyles(styles, "contact-set");

export default ({ phone, email, hydrate = content.firstChild.cloneNode(true) }) =>
  withElement({
    hydrate,
    className: scope,
    children: [
      phone &&
        withElement({
          hydrate: hydrate.querySelector('[name="phone"]'),
          href: `tel:${phone.replaceAll(/[^+\d]/g, "")}`,
          innerHTML: `Telephone: ${phone}`,
        }),
      email &&
        withElement({
          hydrate: hydrate.querySelector('[name="email"]'),
          href: `mailto:${email}`,
          textContent: `Email: ${email}`,
        }),
    ],
  });
