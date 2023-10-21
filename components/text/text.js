export default ({ class: name, text }) => text ? `
  <p class="${name}"><span>${text.replace(/(\n)(\n)/g, '$1</span><span>$2')}</span></p>
` : '';
