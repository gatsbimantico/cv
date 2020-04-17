import EducationTitle from './education-title.js';
import List           from '../list/list.js';

export default ({ at, on, titles }) => (titles ? `
<li class="education-experience">
  <span>${on}</span> <span>@ ${at}</span>
  <ul class="education-experience__title-set">
    ${new List(EducationTitle, titles)}
  </ul>
  <span aria-label="."></span>
</li>
` : '');
