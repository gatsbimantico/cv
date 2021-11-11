export default ({ phone }) => phone ? `
  <a class="phone" href="tel:${phone}">Telephone: ${phone}<span aria-label=","></span></a>
` : '';
