import Header     from '../header/header.js';
import ContactSet from '../contact-set/contact-set.js';

export default class PageIntro {

  constructor(cv) {

    let config = cv || {};

    this.contact = new ContactSet(config);
    this.header = new Header(
      config.name,
      config.role,
      this.contact.emailSet.emailSet.list[0]
    );

  }

  get outerHTML () {

    return `
<header class="page-intro">
  ${this.header.outerHTML}
  ${this.contact.outerHTML}
</header>
    `;

  }

}
