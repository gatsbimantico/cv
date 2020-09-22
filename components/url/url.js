export default class Url {

  constructor(url) {

    this.url      = url.toLowerCase();
    this.siteName = (new URL(url)).host.replace(/^www\./,'').replace(/\.(com|co\.uk)$/,'').replace(/([^A-z]+)/g,' ');

  }

  toString() {

    return `
<li class="url"><a class="site-${this.siteName.toLowerCase()}" href="${this.url}" target="_blank">${this.siteName}<span aria-label=","></span></a></li>
    `;

  }

}
