import { withElement } from "VanillaDOM";
import { withStyles } from 'VanillaCSS';
import styles from './intro.css' with { type: 'css' };

import { Hero } from "./hero.js";
import { ContactSet } from "../contact-set/contact-set.js";
import { Summary } from "../summary/summary.js";

const { scope } = withStyles(styles, 'page-intro');

export const Intro = ({ basics: { name, label, phone, email, summary } } = {}) =>
  withElement({
    tagName: "header",
    className: scope,
    children: [
      withElement({
        tagName: "div",
        className: 'container',
        children: [
          Hero({ name, label, email }),
          ContactSet({ phone, email }),
          Summary(summary),
        ],
      }),
    ],
  });
