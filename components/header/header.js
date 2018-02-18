export default class Header {

  constructor(name, role) {

    this.name = name || 'Annon Candidate';
    this.role = role || '';

  }

  get outerHTML () {

    return `
<header class="header">
  <img class="header__pic" src="http://www.gravatar.com/avatar/e6deefe7eb4c5f22991e392cc720fed5.jpg?s=512&r=x" />
  <h1 class="header__name">${this.name}</h1>
  <h2 class="header__role">${this.role}</h2>
</header>
    `;

  }

}
