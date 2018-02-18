export default class Email {

  constructor(email) {

    this.email = email;

  }

  get outerHTML () {

    return `
<li class="email"><a href="mailto:${this.email}">&#9993; ${this.email}</a></li>
    `;

  }

}
