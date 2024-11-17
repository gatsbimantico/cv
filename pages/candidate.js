import { withElement } from "VanillaDOM";

import { Theme } from "../components/page/theme.js";
import { Language } from "../components/page/language.js";
import { Title } from "../components/page/title.js";
import { Intro } from "../components/page/intro.js";
import { ExperienceSet } from "../components/experience-set/experience-set.js";
import { EducationSet } from "../components/education-set/education-set.js";
import { Revision } from "../components/revision/revision.js";

export const CandidatePage = ({ cv, manifest }) => {
  if (!cv) return [];

  return [
    Intro(cv),
    withElement({
      tagName: "main",
      children: [
        Theme(cv),
        Language(cv),
        Title({
          textContent: `${cv.basics.name} (${cv.basics.label}) ${manifest.name}`,
        }),
        ExperienceSet(cv),
        EducationSet(cv),
      ],
    }),
    Revision({ manifest }),
  ];
};
