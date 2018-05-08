import PhoneSet from '../phone-set/phone-set.js';
import EmailSet from '../email-set/email-set.js';
import SkypeButton from '../skype-button/skype-button.js';
import SiteSet  from '../site-set/site-set.js';

export default class ContactSet {

  constructor(cv) {

    let config = Object.assign(
      { contact: {} },
      cv
    );

    this.phoneSet = new PhoneSet(
      [
        config.phone,
        config.contact.phone,
        ...config.phones || [],
        ...config.contact.phones || []
      ]
      .filter(o => o)
    );

    this.emailSet = new EmailSet(
      [
        config.email,
        config.contact.email,
        ...config.emails || [],
        ...config.contact.emails || []
      ]
      .filter(o => o)
    );

    this.skype = new SkypeButton(
      [
        config.skype,
        config.contact.skype,
        config.skypeID,
        config.contact.skypeID,
        config.skypeId,
        config.contact.skypeId,
      ]
      .filter(o => o).pop()
    )

    this.siteSet = new SiteSet(
      [
        config.site,
        config.contact.site,
        ...config.sites || [],
        ...config.contact.sites || []
      ]
      .filter(o => o)
    );

  }

  get outerHTML () {

    return `
<section class="contact-set">
  ${this.phoneSet.outerHTML}
  ${this.emailSet.outerHTML}
  ${this.skype.outerHTML}
  ${this.siteSet.outerHTML}
</section>
    `;

  }

}
