import PageIntro from '../components/page-intro/page-intro.js';
import Text from '../components/text/text.js';
import ExperienceSet from '../components/experience-set/experience-set.js';
import EducationSet from '../components/education-set/education-set.js';
import Revision from '../components/revision/revision.js';

import ThemeStyle from '../controllers/theme-styles/theme-style.js';

export default ({ cv, manifest }) => cv ? `
  ${PageIntro(cv)}
  <main>
    ${Text({ class: 'summary', text: cv.basics.summary })}
    ${ExperienceSet(cv)}
    ${EducationSet(cv)}
    ${Revision({ manifest })}
  </main>
  ${ThemeStyle({ color: cv.color })}
` : '';
