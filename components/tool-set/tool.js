export default (tool = '') => {

  const [, name, version] = tool.match(/^(.*)\s?(\d*)$/);

  return name || version ? `
    <li class="job-experience__tool">
      ${name ? `<span class="job-experience__tool-name">${name}</span>` : ''}
      ${version ? `<span class="job-experience__tool-version">${version}</span>` : ''}
      <span aria-label=","></span>
    </li>
  ` : '';

}
