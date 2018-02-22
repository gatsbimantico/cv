import List  from '../list/list.js';
import Phone from './phone.js';

export default class PhoneSet {

  constructor(phoneSet) {

    this.phoneSet = new List(Phone, phoneSet);

  }

  get outerHTML () {

    return `
<span aria-label="Telephone:"></span>
<ul class="phone-set">
  ${this.phoneSet.outerHTML}
</ul>
<span aria-label="."></span>
    `;

  }

}
