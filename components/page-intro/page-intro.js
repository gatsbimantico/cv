import Header from '../header/header.js';
import ContactSet from '../contact-set/contact-set.js';
import List  from '../list/list.js';
import Email from '../email-set/email.js';

export default class PageIntro {

  constructor(props) {
    const { contact = {}, name, role } = props;

    const emailSet = new List(Email,
      [
        props.email,
        contact.email,
        ...props.emails || [],
        ...contact.emails || []
      ]
        .filter(o => o)
    );

    this.contact = ContactSet({ ...props, contact, emailSet });
    this.header = new Header(
      name,
      role,
      emailSet.list[0]
    );

  }

  toString() {

    return `
<header class="page-intro">
  ${this.header}
  ${this.contact}
</header>
    `;

  }

}
