const dateParse = date => date === 'now' ? new Date() : new Date(date);
const dateRound = millisecondsDiff => Math.round(millisecondsDiff/3.1536e8)/1e2;
const dateDiff = ({ endDate, startDate }) => {
  const years = dateRound(dateParse(endDate)-dateParse(startDate));
  return `${years} year${years === 1 ? '' : 's'}`;
};

export default ({ endDate, startDate }) => startDate || endDate ? `
  <p class="job-experience__date">
    ${startDate && endDate ? `<small>${dateDiff({ endDate, startDate })}, </small>` : ''}
    ${startDate ? `<span>from ${startDate}</span>` : ''}
    ${endDate ? `<span>to ${endDate}</span>` : ''}
  </p>
` : '';
