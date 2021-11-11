export default ({ email }) => email ? `
  <a class="email" href="mailto:${email}">Email: ${email}<span aria-label=","></span></a>
` : '';
