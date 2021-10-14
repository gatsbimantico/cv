export default ({ end, start }) => (start || end ? `
<p class="job-experience__date">
  ${start && end ? `<small>${Math.round(((end === 'now' ? new Date() : new Date(end))-(new Date(start)))/(3.1536e8))/1e2} year/s, </small>` : ''}
  ${start ? `<span>from ${start}</span>` : ''}
  ${end ? `<span>to ${end}</span>` : ''}
</p>
    ` : '');
