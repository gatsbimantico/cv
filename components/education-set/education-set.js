import List from '../list/list.js';
import Education from './education.js';

export default ({ education }) => `
  <h3 class="education-set__title">Courses & Education<span aria-label="."></span></h3>
  <ul class="education-set">${List(Education, education)}</ul>
`;
