import { withElement } from "VanillaDOM";
import { withStyles } from 'VanillaCSS';
import styles from './intro.css' assert { type: 'css' };

import Hero from "./hero.js";
import ContactSet from "../contact-set/contact-set.js";

const { scope } = withStyles(styles, 'page-intro');

export default ({ basics: { name, label, phone, email } } = {}) =>
  withElement({
    tagName: "header",
    className: scope,
    children: [Hero({ name, label, email }), ContactSet({ phone, email })],
  });
