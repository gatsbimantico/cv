import List  from '../list/list.js';
import Url from '../url/url.js';

export default class SiteSet {

  constructor(siteSet) {

    this.siteSet = new List(Url, siteSet);

  }

  get outerHTML () {

    return `
<ul class="site-set">
  ${this.siteSet.outerHTML}
</ul>
    `;

  }

}
