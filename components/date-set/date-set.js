const dateParse = date => date === 'now' ? new Date() : new Date(date);
const dateRound = millisecondsDiff => Math.round(millisecondsDiff/3.1536e8)/1e2;
const dateDiff = ({ end, start }) => {
  const years = dateRound(dateParse(end)-dateParse(start));
  return `${years} year${years > 1 ? 's' : ''}`;
};

export default ({ end, start }) => (start || end ? `
<p class="job-experience__date">
  ${start && end ? `<small>${dateDiff({ end, start })}, </small>` : ''}
  ${start ? `<span>from ${start}</span>` : ''}
  ${end ? `<span>to ${end}</span>` : ''}
</p>
    ` : '');
