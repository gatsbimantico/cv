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
<p class="job-experience__tool-set">
  ${this.toolSet.outerHTML}
</p>
    ` : '';

  }

}
