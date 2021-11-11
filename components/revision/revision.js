export default ({ manifest }) => `
  <div id="revision-id">
    <a href="https://github.com/gatsbimantico/cv/blob/master/README.md">${manifest.short_name}<small><small> v.${manifest.version}</small> by </small>${manifest.author}</a>
  </div>
`;
