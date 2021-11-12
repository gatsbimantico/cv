export default ({ class: name, text }) => text ? `
  <p class="${name}">${text.replace(/(\n)(\n)/g, '$1<br><br>$2')}</p>
` : '';
