import { withElement, esmImport } from "VanillaDOM";

const { content } = await esmImport(import.meta).from("./tool.html").assert({ type: "html" }); // prettier-ignore

export default (tool = "") => {
  const [, name, version] = tool.match(/^(\D+)(?: (\d+))?$/);

  if (!name) return null;

  const htmlComponent = content.cloneNode(true);
  const nameEl = htmlComponent.querySelector('[name="name"]');
  const versionEl = htmlComponent.querySelector('[name="version"]');

  return withElement({
    hydrate: htmlComponent.firstChild,
    children: [
      withElement({ hydrate: nameEl, textContent: name }),
      version && withElement({ hydrate: versionEl, textContent: version }),
    ],
  });
};
