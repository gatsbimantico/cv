export default class Url {

  constructor(url) {

    this.url      = url;
    this.siteName = url.match(/\/\/([^\.]*)\./)[1];

  }

  get outerHTML () {

    return `
<li class="url"><a href="${this.url}" target="_blank">${this.siteName}<span aria-label=","></span></a></li>
    `;

  }

}
