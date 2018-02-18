import List from '../list/list.js';
import Education from './education.js';

export default class EducationSet {

  constructor(educationSet) {

    this.educationSet = new List(Education, educationSet);

  }

  get outerHTML () {

    return `
<ul class="education-set">
  <h3>Courses & Education</h3>
  ${this.educationSet.outerHTML}
</ul>
    `;

  }

}
