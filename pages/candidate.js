import PageIntro     from '../components/page-intro/page-intro.js';
import Text          from '../components/text/text.js';
import SkillSet      from '../components/skill-set/skill-set.js';
import ExperienceSet from '../components/experience-set/experience-set.js';
import EducationSet  from '../components/education-set/education-set.js';

import ThemeStyleController from '../controllers/theme-styles/theme-style.js';

export default class CandidatePage {

  constructor() {

    let cvPath = (this.externalCV || '../cv') + '.js';

    import(cvPath).then(mod => mod.cv).then(cv => {

      if (!cv) {

        return;

      }

      document.title = cv.name + ' - CV';

      this.$ = {
        pageIntro     : new PageIntro(cv),
        summary       : new Text('summary', cv.summary),
        skillSet      : new SkillSet(
          [
            cv.skill,
            ...cv.skills
          ]
          .filter(o => o)
        ),
        experienceSet : new ExperienceSet(
          [
            cv.experience,
            ...cv.experiences
          ]
          .filter(o => o)
        ),
        educationSet  : new EducationSet(cv.education)
      };

      this.controllers = {
        themeStyle: new ThemeStyleController(cv.color)
      };

      document.body.innerHTML = this.outerHTML;

      this.controllers.themeStyle.init();

    });

  }

  get outerHTML () {

      return `
${this.$.pageIntro.outerHTML}
<main>
  <h3 class="summary__title">Summary</h3>
  ${this.$.summary.outerHTML}
  ${this.$.skillSet.outerHTML}
  ${this.$.experienceSet.outerHTML}
  ${this.$.educationSet.outerHTML}
</main>
      `;

  }

  /**
   * Obtains the query parameter for an external CV
   *
   * @returns {String} The CV path set in the url
   */
  get externalCV () {

    if (window.location.search) {

      return window.location.search.replace('?cv=', '');

    }

    return;

  }

}
