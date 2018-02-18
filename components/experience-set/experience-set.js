import List from '../list/list.js';
import Experience from './experience.js';

export default class ExperienceSet {

  constructor(experienceSet) {

    this.experienceSet = new List(Experience, experienceSet);

  }

  get outerHTML () {

    return `
<ul class="experience-set">
  <h3>Experiences</h3>
  ${this.experienceSet.outerHTML}
</ul>
    `;

  }

}
