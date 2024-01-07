/**=============**\
    VANILLA DOM 
\**=============**/

export function withElement({
  hydrate,
  tagName = "div",
  children,
  ...props
} = {}) {
  const elementToHydrate =
    typeof hydrate === "string" ? document.querySelector(hydrate) : hydrate;
  const el = elementToHydrate || document.createElement(tagName);

  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (el[key] !== value) {
        el[key] = value;
      }
    }
  }

  if (children?.length > 0) {
    el.replaceChildren(
      ...children
        .flat()
        .filter((child) => child !== null && child !== undefined)
        .flatMap((child) => {
          if (child instanceof DocumentFragment) {
            return Array.from(child.childNodes);
          } else if (child instanceof Node) {
            return child;
          } else if (typeof child === "string") {
            return document.createTextNode(child);
          }

          console.error(`Invalid child: ${child}`);
          return [];
        })
    );
  }

  return el;
}

// https://github.com/WICG/webcomponents/blob/gh-pages/proposals/html-modules-explainer.md
export const esmImport = (meta) => ({
  from: (url) => ({
    assert: async (assert) => {
      if (assert.type === "html") {
        const fullURL = new URL(url, meta.url);
        const fileContent = await fetch(fullURL).then((r) => r.text());
        const template = document.createElement("template");
        template.innerHTML = fileContent;
        return template;
      }
    },
  }),
});

export const whenDOMLoaded = async () => new Promise(res => {
  const loaded = document.readyState === "complete" || document.readyState === "interactive";
  if (loaded) {
    res(true);
  } else {
    const listener = () => {
      res(true);
      window.removeEventListener('load', listener);
    };
    window.addEventListener('load', listener);
  }
});
