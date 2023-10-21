export default ({ endDate, startDate }) => startDate || endDate ? `
  <p class="job-experience__date">
    ${startDate ? `<span><span aria-label=" from  "></span> ${startDate}</span>` : ''}
    ${endDate ? `<span>to ${endDate}</span>` : ''}
  </p>
` : '';
