import List from '../list/list.js';
import Tool from './tool.js';

export default (tools) => tools ? `
  <span aria-label="where I used: "></span>
  <ul class="job-experience__tool-set">
    ${List(Tool, tools)}
  </ul>
  <span aria-label=";."></span>
` : '';
