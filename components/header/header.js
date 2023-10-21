export default ({ name, label }) => `
  <section class="hero">
    <h1 class="hero__name">${name}<span aria-label="."></span></h1>
    <h2 class="hero__role">${label}<span aria-label="."></span></h2>
  </section>
`;
