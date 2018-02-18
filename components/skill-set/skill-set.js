import List from '../list/list.js';
import Skill from './skill.js';

export default class SkillSet {

  constructor(skillSet) {

    this.skillSet = new List(Skill, skillSet);

  }

  get outerHTML () {

    return `
<ul class="skill-set">
  ${this.skillSet.outerHTML}
</ul>
    `;

  }

}
