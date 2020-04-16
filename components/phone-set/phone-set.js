import List  from '../list/list.js';
import Phone from './phone.js';

export default (phoneSet) => `
<span aria-label="Telephone:"></span>
<ul class="phone-set">
  ${new List(Phone, phoneSet)}
</ul>
<span aria-label="."></span>
`;
