export default ({ institution, studyType, area, endDate }) => `
  <li class="education-experience">
    <span>${endDate}</span> <span>@ ${institution}</span>
    <p class="education-experience__title">${studyType} in ${area}<span aria-label=","></span></p>
    <span aria-label="."></span>
  </li>
`;
