import List  from '../list/list.js';
import Url from '../url/url.js';

export default (siteSet) => `
<span aria-label="Sites:"></span>
<ul class="site-set">
  ${new List(Url, siteSet)}
</ul>
<span aria-label="."></span>
`;
