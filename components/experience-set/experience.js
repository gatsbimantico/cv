import DateSet from '../date-set/date-set.js';
import ToolSet from '../tool-set/tool-set.js';
import Text from '../text/text.js';

export default (work) => `
  <li class="job-experience">
    <article class="job-experience__article">
      <header class="job-experience__header">
        <h4>${work.name}<span aria-label="."></span></h4>
        <div class="job-experience__meta">
          <p class="job-experience__business"><span aria-label="at "></span>${work.label}</p>
          ${DateSet(work)}
          <span aria-label="."></span>
        </div>
      </header>
      <section class="job-experience__main-section">
        ${ToolSet(work.tools)}
        ${Text('job-experience__summary', work.summary)}
        <span aria-label="."></span>
      </section>
    </article>
  </li>
`;
