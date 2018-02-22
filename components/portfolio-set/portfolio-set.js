import List from '../list/list.js';
import Url from '../url/url.js';

export default class PortfolioSet {

  constructor (portfolio) {

    let config = portfolio || {},
      urls;

    if (config.length) {

      urls = config;

    } else {

      urls = [
        ...config.released || [],
        ...config.unreleased || [],
        ...config.dismissed || []
      ];

    }

    this.sites = new List(
      Url,
      urls.filter(o => o)
    );

  }

  get columnClass () {

    switch (this.sites.length) {
      case 4:
      case 7:
      case 8:
      case 10:
      case 12:
        return "column column--four";

      case 3:
      case 5:
      case 6:
      case 9:
      case 11:
        return "column column--three";

      case 2:
        return "column column--two";

      default:
        return "column column--single";
    }

  }

  get outerHTML () {

    return this.sites.length ? `
<h5><span aria-label="and I helped to build "></span>Sites<span aria-label=" like"></span>:</h5>
<ul class="job-experience__portfolio ${this.columnClass}">
  ${this.sites.outerHTML}
</ul>
<span aria-label=";."></span>
    ` : '';

  }

}
