import List from '../list/list.js';
import Education from './education.js';

export default class EducationSet {

  constructor(educationSet) {

    this.educationSet = new List(Education, educationSet);

  }

  get outerHTML () {

    return `
<h3 class="education-set__title">Courses & Education<span aria-label="."></span></h3>
<ul class="education-set">
  ${this.educationSet.outerHTML}
</ul>
    `;

  }

}
