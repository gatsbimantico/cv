import DateSet      from '../date-set/date-set.js';
import ToolSet      from '../tool-set/tool-set.js';
import PortfolioSet from '../portfolio-set/portfolio-set.js';
import Text         from '../text/text.js';

export default class Experience {

  constructor(experience) {

    let config = experience || {};

    this.role        = config.is || config.was;
    this.at          = config.at;
    this.dateSet     = DateSet(config.on || config);
    this.toolSet     = ToolSet(config.tools);
    this.portfolio   = new PortfolioSet(config.portfolio);
    this.description = new Text('job-experience__summary', config.description);

  }

  toString() {

    return `
<li class="job-experience">
  <article class="job-experience__article">
    <header class="job-experience__header">
      <h4>${this.role}<span aria-label="."></span></h4>
      <div class="job-experience__meta">
        <p class="job-experience__business"><span aria-label="at "></span>${this.at}</p>
        ${this.dateSet}
        <span aria-label="."></span>
      </div>
    </header>
    <section class="job-experience__main-section">
      ${this.toolSet}
      ${this.portfolio}
      ${this.description}
      <span aria-label="."></span>
    </section>
  </article>
</li>
    `;

}

}
