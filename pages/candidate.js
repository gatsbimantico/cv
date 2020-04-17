import PageIntro from '../components/page-intro/page-intro.js';
import Text from '../components/text/text.js';
import SkillSet from '../components/skill-set/skill-set.js';
import ExperienceSet from '../components/experience-set/experience-set.js';
import EducationSet from '../components/education-set/education-set.js';
import Revision from '../components/revision/revision.js';

import ThemeStyleController from '../controllers/theme-styles/theme-style.js';

class CandidatePage {

  constructor(cv) {
    if (!cv) return;

    this.cv = cv;
    this.$ = {
      pageIntro: new PageIntro(cv),
      summary: new Text('summary', cv.summary),
      skillSet: SkillSet([
        cv.skill,
        ...(cv.skills || [])
      ]),
      experienceSet: ExperienceSet([
        cv.experience,
        ...cv.experiences
      ]),
      revision: new Revision()
    };

    this.controllers = {
      themeStyle: new ThemeStyleController(cv.color)
    };

    document.body.innerHTML = this;

    this.controllers.themeStyle.init();
  }

  toString() {

    return `
${this.$.pageIntro}
<main>
  <h3 class="summary__title">Summary</h3>
  ${this.$.summary}
  ${this.$.skillSet}
  ${this.$.experienceSet}
  ${EducationSet(this.cv)}
  ${this.$.revision}
</main>
      `;

  }
}

export default CandidatePage;
