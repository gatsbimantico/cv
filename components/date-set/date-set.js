export default ({ end, start }) => (start || end ? `
<p class="job-experience__date">
  ${start ? `<span>from ${start}</span>` : ''}
  ${end ? `<span>to ${end}</span>` : ''}
</p>
    ` : '');
