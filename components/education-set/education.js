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
  <ul>
    ${this.titleSet.outerHTML}
  </ul>
  <span>${this.on}</span> <span>@ ${this.at}</span>
</li>
    `;

  }

}
//   education: function (education) {

//     var text = '<div class="education-experience">';

//     if (education.titles) {

//       education.titles.forEach(title => {

//         text += `<h4 class="education-experience__title">${title}</h4>`;

//       });

//     }

//     text += `
//     <span>${education.on}</span>
//     <span>@ ${education.at}</span>
// 		`;

//     text += '</div>';

//     return text;

//   },
