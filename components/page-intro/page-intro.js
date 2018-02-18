import Header     from '../header/header.js';
import ContactSet from '../contact-set/contact-set.js';

export default class PageIntro {

  constructor(cv) {

    let config = cv || {};

    this.header = new Header(config.name, config.role);
    this.contact = new ContactSet(config);

  }

  get outerHTML () {

    return `
<div class="page-intro">
  ${this.header.outerHTML}
  ${this.contact.outerHTML}
</div>
    `;

  }

}
