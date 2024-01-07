import { withElement } from "VanillaDOM";
import { withGlobalStyles } from "VanillaCSS";
import globalStyles from './global-styles.css' assert { type: 'css' };

const MetaColor = ({ tagName = 'meta', name, content }) => {
  const currentElement = document.querySelector(`${tagName}[name="${name}"]`);
  const newElement = withElement({
    hydrate: currentElement,
    tagName,
    name,
    content
  });
  if (!currentElement) {
    document.head.appendChild(newElement);
  }
};

export default ({ color = "steelblue" }) => {
  withGlobalStyles(globalStyles);
  withGlobalStyles(`:root { --cv-color: ${color}; }`, 'root-theme');

  MetaColor({
    name: "theme-color",
    content: color
  });
  MetaColor({
    name: "msapplication-navbutton-color",
    content: color
  });
  MetaColor({
    name: "msapplication-TileColor",
    content: color
  });
  MetaColor({
    name: "apple-mobile-web-app-status-bar-style",
    content: color
  });
};
