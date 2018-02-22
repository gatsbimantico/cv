export default class EducationTitle {

  constructor (title) {

    this.title = title;

  }

  get outerHTML () {

    return `
<li class="education-experience__title">${this.title}<span aria-label=","></span></li>
    `;

  }

}
