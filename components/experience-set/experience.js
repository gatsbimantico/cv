import DateSet from '../date-set/date-set.js';
import ToolSet from '../tool-set/tool-set.js';
import Text from '../text/text.js';

export default ({ name, position, endDate, startDate, tools, summary }) => `
  <li class="job-experience">
    <article class="job-experience__article">
      <header class="job-experience__header">
        <h4 class="job-experience__business">${name},</h4>
        <p class="job-experience__position"><span aria-label="at "></span>${position}</p>
        ${DateSet({ endDate, startDate })}
      </header>
      <section class="job-experience__main-section">
        ${ToolSet(tools)}
        ${Text({ class: 'job-experience__summary', text: summary })}
        <span aria-label="."></span>
      </section>
    </article>
  </li>
`;
