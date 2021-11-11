import List from '../list/list.js';
import Experience from './experience.js';

export default ({ work = [] }) => `
  <h3 class="experience-set__title">Experiences<span aria-label="."></span></h3>
  <ul class="experience-set">
    ${List(Experience, work)}
  </ul>
`;
