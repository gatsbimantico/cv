export default class Phone {

  constructor(phone) {

    this.phone = phone;

  }

  get outerHTML () {

    return `
<li class="phone"><a href="tel:${this.phone}">&#9990; ${this.phone}</a></li>
    `;

  }

}
