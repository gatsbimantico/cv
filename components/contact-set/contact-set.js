import { withElement, esmImport } from "VanillaDOM";
import { withStyles } from "VanillaCSS";
import styles from "./contact-set.css" with { type: "css" };

const { content } = await esmImport(import.meta).from("./contact-set.html").with({ type: "html" }); // prettier-ignore
const { scope } = withStyles(styles, "contact-set");

export const ContactSet = ({ phone, email, hydrate = content.firstChild.cloneNode(true) }) =>
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
