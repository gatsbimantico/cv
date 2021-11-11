import Phone from './phone.js';
import Email from './email.js';

export default ({ phone, email }) => `
  <section class="contact-set">
    ${Phone({ phone })}
    ${Email({ email })}
  </section>
`;
