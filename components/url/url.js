export default class Url {

  constructor(url) {

    this.url      = url.toLowerCase();
    this.siteName = url.match(/\/\/([^\.]*)\./)[1];

  }

  toString() {

    return `
<li class="url"><a class="site-${this.siteName.toLowerCase()}" href="${this.url}" target="_blank">${this.siteName.replace(/([A-Z])/g, ' $1')}<span aria-label=","></span></a></li>
    `;

  }

}
