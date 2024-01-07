import { withElement } from "VanillaDOM";

export default ({ hydrate, className, textContent }) => {
  if (!textContent && hydrate) hydrate.remove();
  if (!textContent) return null;

  return withElement({
    hydrate,
    tagName: "p",
    ...(className ? { className } : {}),
    innerHTML: `<span>${textContent.replace(/(\n)(\n)/g, "$1</span><br/><span>$2")}</span>`,
  });
};
