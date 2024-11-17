import { withElement } from "VanillaDOM";

export const Title = ({ textContent }) => {
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
