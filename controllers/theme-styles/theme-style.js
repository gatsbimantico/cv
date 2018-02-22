export default class ThemeStyleController {

  constructor(color) {

    this.color = color || 'steelblue';

  }

  get styleHTML () {

    return `
<style>
  .hero {
    background-color: ${this.color};
  }
  
  h3, h4, h5, h6,
  .job-experience__tool,
  .education-experience__title-set,
  a:hover,
  a:focus {
    color: ${this.color};
  }

  .summary__title,
  .experience-set__title,
  .education-set__title {
    background: ${this.color};
  }
</style>
    `;

  }

  init () {

    [
      'meta[name="theme-color"]',
      'meta[name="msapplication-navbutton-color"]',
      'meta[name="msapplication-TileColor"]',
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    ]
    .forEach(selector => {
      
      document
        .querySelector(selector)
        .content = this.color;
        
    });

    document.body.innerHTML += this.styleHTML;

  }

}
