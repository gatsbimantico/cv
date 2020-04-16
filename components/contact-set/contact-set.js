import PhoneSet from '../phone-set/phone-set.js';
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
