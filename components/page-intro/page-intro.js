import Header from '../header/header.js';
import ContactSet from '../contact-set/contact-set.js';

export default ({ name, label, phone, email }) => `
  <header class="page-intro">
    ${Header({ name, label, email })}
    ${ContactSet({ phone, email })}
  </header>
`;
