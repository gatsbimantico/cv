import List from '../list/list.js';
import Experience from './experience.js';

export default (experienceSet) => `
<h3 class="experience-set__title">Experiences<span aria-label="."></span></h3>
<ul class="experience-set">
  ${new List(Experience, experienceSet)}
</ul>
`;
