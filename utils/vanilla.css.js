/**=============**\
    VANILLA CSS 
\**=============**/

const GLOBAL_STYLE_SHEET_RULE = ':root { --style-lib: "withStyles"; }';
const VALID_CSS_CHARACTERS =
  "0123456789-ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

const findGlobalStylesheet = () => {
  // Check if the global stylesheet already exists
  return document.adoptedStyleSheets.find(
    (styleSheet) => styleSheet.cssRules[0]?.cssText === GLOBAL_STYLE_SHEET_RULE
  );
};

const createGlobalStylesheet = () => {
  const stylesheet = new CSSStyleSheet();

  stylesheet.insertRule(GLOBAL_STYLE_SHEET_RULE);
  document.adoptedStyleSheets.push(stylesheet);

  return stylesheet;
};

const globalStylesheet = findGlobalStylesheet() || createGlobalStylesheet();

const hashCSS = (data) => {
  const base = VALID_CSS_CHARACTERS.length;
  let hash = 5381;

  for (let i = 0; i < data.length; i++) {
    hash = (hash * 33) ^ data.charCodeAt(i);
  }

  let result = "";
  do {
    hash >>>= 0;
    result = VALID_CSS_CHARACTERS[hash % base] + result;
    hash = Math.floor(hash / base);
  } while (hash > 0);

  return result;
};

export const withStyles = (styles, customScope) => {
  if (!styles.cssRules) return {};
  const classnames = Array.from(styles.cssRules).reduce((namespace, rule) => {
    if (rule instanceof CSSStyleRule) {
      let nameForClass = rule.selectorText
        .replace(/[^\w]+/gi, " ")
        .replace(/[\s\-_]+/g, " ")
        .trim()
        .replace(/\s(\w)/g, (a, b) => b.toUpperCase());

      if (nameForClass === 'scope' && customScope) {
        nameForClass = customScope;
      }

      const uniqueHash = hashCSS(
        rule.cssText.replaceAll(/[^0-9A-Za-z]*/g, "").trim()
      );

      const classname = [nameForClass, uniqueHash].filter(Boolean).join("-");

      const ruleExists = Array.from(globalStylesheet.cssRules).some(
        (existingRule) => existingRule.selectorText === `.${classname}`
      );

      if (!ruleExists) {
        globalStylesheet.insertRule(
          `.${classname}${rule.cssText.slice(rule.cssText.indexOf("{"))}`
        );
      }

      // Advised to start the CSS modules with :scope otherwise, the whole selector will provide a className
      const nameForNamespace = rule.selectorText.startsWith(":")
        ? rule.selectorText.slice(1)
        : rule.selectorText;
      namespace[nameForNamespace] = classname;
    }
    return namespace;
  }, {});

  return classnames;
};

export const withGlobalStyles = (globalStyles, id) => {
  const globalStylesString = typeof globalStyles === 'string' ? globalStyles : Array.from(globalStyles.cssRules)
    .map((rule) => rule.cssText)
    .join("\n");
  const hash =
    id || hashCSS(globalStylesString.replaceAll(/[^0-9A-Za-z]*/g, "").trim());
  const existingStyleElement = document.querySelector(
    `style[data-hash="${hash}"]`
  );

  if (!existingStyleElement) {
    const styleElement = document.createElement("style");
    styleElement.setAttribute("data-hash", hash);
    styleElement.textContent = globalStylesString;
    document.head.appendChild(styleElement);
  }
};
