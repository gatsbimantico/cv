import List from '../list/list.js';
import Experience from './experience.js';

export default class ExperienceSet {

  constructor(experienceSet) {

    this.experienceSet = new List(Experience, experienceSet);

  }

  get outerHTML () {

    return `
<h3 class="experience-set__title">Experiences<span aria-label="."></span></h3>
<ul class="experience-set">
  ${this.experienceSet.outerHTML}
</ul>
    `;

  }

}
