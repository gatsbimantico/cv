import { withElement } from "VanillaDOM";

export const Language = ({ defaultLanguage }) => {
  withElement({
    hydrate: document.documentElement,
    lang: defaultLanguage,
  });
  
  // TODO: Add support for multiple languages
};