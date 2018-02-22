export default class Email {

  constructor(email) {

    this.email = email;

  }

  get outerHTML () {

    return `
<li class="email"><a href="mailto:${this.email}">${this.email}<span aria-label=","></span></a></li>
    `;

  }

}
