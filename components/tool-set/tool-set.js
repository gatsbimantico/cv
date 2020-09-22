import List from '../list/list.js';
import Tool from './tool.js';

export default ({ main }) => (main ? `
<h5><span aria-label="where I used a "></span>Tech Stack<span aria-label=" like"></span>:</h5>
<ul class="job-experience__tool-set">
  ${new List(Tool, main)}
</ul>
<span aria-label=";."></span>
` : '');
