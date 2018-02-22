import List  from '../list/list.js';
import Email from './email.js';

export default class EmailSet {

  constructor(emailSet) {

    this.emailSet = new List(Email, emailSet);

  }

  get outerHTML () {

    return `
<span aria-label="Email:"></span>
<ul class="email-set">
  ${this.emailSet.outerHTML}
</ul>
<span aria-label="."></span>
    `;

  }

}
