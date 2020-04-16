import List from '../list/list.js';
import Skill from './skill.js';

export default (skillSet) => `
<ul class="skill-set">
  ${new List(Skill, skillSet)}
</ul>
`;
