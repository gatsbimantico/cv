import List  from '../list/list.js';
import Phone from './phone.js';

export default class PhoneSet {

  constructor(phoneSet) {

    this.phoneSet = new List(Phone, phoneSet);

  }

  get outerHTML () {

    return `
<ul class="phone-set">
  ${this.phoneSet.outerHTML}
</ul>
    `;

  }

}
