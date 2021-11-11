import md5 from '../../controllers/cypher/md5.js';

export default ({ name, label, email }) => `
  <section class="hero">
    <div class="hero__pic hero__pic--div" style="background-image: url('https://www.gravatar.com/avatar/${md5(email)}.jpg?s=512&r=x');"></div>
    <img class="hero__pic hero__pic--img" src="https://www.gravatar.com/avatar/${md5(email)}.jpg?s=512&r=x"/>
    <h1 class="hero__name">${name}<span aria-label="."></span></h1>
    <h2 class="hero__role">${label}<span aria-label="."></span></h2>
  </section>
`;
