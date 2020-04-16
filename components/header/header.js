import md5 from '../../controllers/cypher/md5.js';

export default class Header {

  constructor(name, role, email) {

    this.name = name || 'Annon Candidate';
    this.role = role || '';
    this.email = email || '';

  }

  toString() {
    // e6deefe7eb4c5f22991e392cc720fed5

    return `
<section class="hero">
  <div class="hero__pic hero__pic--div" style="background-image: url('http://www.gravatar.com/avatar/${md5(this.email)}.jpg?s=512&r=x');"></div>
  <img class="hero__pic hero__pic--img" src="http://www.gravatar.com/avatar/${md5(this.email)}.jpg?s=512&r=x"/>
  <h1 class="hero__name">${this.name}<span aria-label="."></span></h1>
  <h2 class="hero__role">${this.role}<span aria-label="."></span></h2>
</section>
    `;

  }

}
