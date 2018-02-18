export default class Skill {

  constructor (skill) {

    this.skill = skill;

  }

  get outerHTML () {

    return `
<li class="skill-set__item">${this.skill}</li>
    `;

  }

}
