import { withElement } from "VanillaDOM";

import Theme from "../components/page/theme.js";
import Title from "../components/page/title.js";
import Intro from "../components/page/intro.js";
import ExperienceSet from "../components/experience-set/experience-set.js";
import EducationSet from "../components/education-set/education-set.js";
import Revision from "../components/revision/revision.js";
import Summary from "../components/summary/summary.js";

export default ({ cv, manifest }) => {
  if (!cv) return [];

  return [
    Intro(cv),
    withElement({
      tagName: "main",
      children: [
        Theme(cv),
        Title({
          textContent: `${cv.basics.name} (${cv.basics.label}) ${manifest.name}`,
        }),
        Summary(cv.basics.summary),
        ExperienceSet(cv),
        EducationSet(cv),
      ],
    }),
    Revision({ manifest }),
  ];
};
