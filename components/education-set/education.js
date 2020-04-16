import EducationTitle from './education-title.js';
import List           from '../list/list.js';

export default ({ at, on, titles }) => (titles ? `
<li class="education-experience">
  <ul class="education-experience__title-set">
    ${new List(EducationTitle, titles)}
  </ul>
  <span>${on}</span> <span>@ ${at}</span>
  <span aria-label="."></span>
</li>
` : '');
