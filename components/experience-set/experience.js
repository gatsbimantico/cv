import DateSet      from '../date-set/date-set.js';
import ToolSet      from '../tool-set/tool-set.js';
import PortfolioSet from '../portfolio-set/portfolio-set.js';
import Text         from '../text/text.js';

export default class Experience {

  constructor(experience) {

    let config = experience || {};

    this.role        = config.is || config.was;
    this.at          = config.at;
    this.dateSet     = new DateSet(config.on || config);
    this.toolSet     = new ToolSet(config.tools);
    this.portfolio   = new PortfolioSet(config.portfolio);
    this.description = new Text('job-experience__summary', config.description);

  }

  get outerHTML() {

    return `
<li class="job-experience">
  <h4>${this.role}<span aria-label="."></span></h4>
  <div class="job-experience__meta">
    <p class="job-experience__business"><span aria-label="at "></span>${this.at}</p>
    ${this.dateSet.outerHTML}
    <span aria-label="."></span>
  </div>
  ${this.toolSet.outerHTML}
  ${this.portfolio.outerHTML}
  ${this.description.outerHTML}
  <span aria-label="."></span>
</li>
    `;

}

}
