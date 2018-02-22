import List from '../list/list.js';
import Tool from './tool.js';

export default class ToolSet {

  constructor (tools) {

    let config = tools || {};

    if (config.main)
      this.toolSet = new List(Tool, config.main);

  }

  get outerHTML () {

    return this.toolSet ? `
<h5><span aria-label="where I used "></span>Tools<span aria-label=" like"></span>:</h5>
<ul class="job-experience__tool-set">
  ${this.toolSet.outerHTML}
</ul>
<span aria-label=";."></span>
    ` : '';

  }

}
