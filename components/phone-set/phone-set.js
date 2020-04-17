import List  from '../list/list.js';
import Phone from './phone.js';

export default (phoneSet) => `
<ul class="phone-set">
  ${new List(Phone, phoneSet)}
</ul>
<span aria-label="."></span>
`;
