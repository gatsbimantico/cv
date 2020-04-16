import PhoneSet from '../phone-set/phone-set.js';
import SkypeButton from '../skype-button/skype-button.js';
import EmailSet from '../email-set/email-set.js';
import SiteSet from '../site-set/site-set.js';

const ContactSet = (props) => `
<section class="contact-set">
  ${PhoneSet(
    [
      props.phone,
      props.contact.phone,
      ...props.phones || [],
      ...props.contact.phones || []
    ]
      .filter(o => o)
  )}
  ${EmailSet(props.emailSet)}
  ${new SkypeButton(
    [
      props.skype,
      props.contact.skype,
      props.skypeID,
      props.contact.skypeID,
      props.skypeId,
      props.contact.skypeId,
    ]
      .filter(o => o).pop()
  )}
  ${SiteSet(
    [
      props.site,
      props.contact.site,
      ...props.sites || [],
      ...props.contact.sites || []
    ]
      .filter(o => o)
  )}
</section>
`;

export default ContactSet;
