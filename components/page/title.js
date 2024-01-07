import { withElement } from "VanillaDOM";

export default ({ textContent }) => {
  if (!textContent) return;

  const currentTitle = document.head.querySelector("title");
  const newTitle = withElement({
    hydrate: currentTitle,
    tagName: "title",
    textContent,
  });

  if (!currentTitle) {
    document.head.appendChild(newTitle);
  }
};
