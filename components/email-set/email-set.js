import List  from '../list/list.js';
import Email from './email.js';

export default class EmailSet {

  constructor(emailSet) {

    this.emailSet = new List(Email, emailSet);

  }

  get outerHTML () {

    return `
<ul class="email-set">
  ${this.emailSet.outerHTML}
</ul>
    `;

  }

}
