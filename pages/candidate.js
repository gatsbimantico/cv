import PageIntro      from '../components/page-intro/page-intro.js';
import Text           from '../components/text/text.js';
// import SkillSet       from '../components/skill-set/skill-set.js';
// import ExperienceSet  from '../components/experience-set/experience-set.js';
// import EducationSet   from '../components/education-set/education-set.js';
// import ThemeStyles    from '../components/theme-styles/theme-styles.js';

export default class CandidatePage {

  constructor() {

    let cvPath = (this.externalCV || '../cv') + '.js';

    import(cvPath).then(mod => mod.cv).then(cv => {

      if (!cv) {

        return;

      }

      document.title = cv.name + ' - CV';

      this.pageIntro        = new PageIntro(cv);
      this.summary          = new Text('summary', cv.summary);
      // this.skillSet         = new SkillSet(cv.skills);
      // this.experienceSet    = new ExperienceSet(cv.experiences);
      // this.educationSet     = new EducationSet(cv.education);
      // this.themeStyles      = new ThemeStyles(cv.favouriteColor);

      document.body.innerHTML = this.outerHTML;


      // this.setFavouriteColor(config.color);
      // this.setSummary(config.summary);
      // this.addSkill(config.skills || config.skill);
      // this.addExperience(config.experiences || config.experience);
      // this.addEducation(config.education);

    });

  }

  get outerHTML () {

      return `
${this.pageIntro.outerHTML}
${this.summary.outerHTML}
      `;
// ${this.skillSet}
// ${this.experienceSet}
// ${this.educationSet}

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

  setSummary(summary) {

    this.summary = summary || '';

  }

  setFavouriteColor(color) {

    this.favouriteColor = color || 'steelblue';

  }

}
