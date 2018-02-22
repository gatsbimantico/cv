import EducationTitle from './education-title.js';
import List           from '../list/list.js';

export default class Education {

  constructor(education) {

    if (education.titles) {

      this.titleSet = new List(EducationTitle, education.titles);
      this.on = education.on;
      this.at = education.at;

    }

  }

  get outerHTML () {

    if (!this.titleSet) {

      return '';

    }

    return `
<li class="education-experience">
  <ul class="education-experience__title-set">
    ${this.titleSet.outerHTML}
  </ul>
  <span>${this.on}</span> <span>@ ${this.at}</span>
  <span aria-label="."></span>
</li>
    `;

  }

}
