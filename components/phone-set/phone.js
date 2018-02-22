export default class Phone {

  constructor(phone) {

    this.phone = phone;

  }

  get outerHTML () {

    return `
<li class="phone"><a href="tel:${this.phone}">${this.phone}<span aria-label=","></span></a></li>
    `;

  }

}
