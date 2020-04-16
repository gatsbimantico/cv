import PageIntro     from '../components/page-intro/page-intro.js';

import ThemeStyleController from '../controllers/theme-styles/theme-style.js';

class CardPage {

  constructor() {

    let cvPath = (this.externalCV || '../cv') + '.js';

    import(cvPath).then(mod => mod.default).then(cv => {

      if (!cv) {

        return;

      }

      document.title = cv.name + ' - CV';

      this.$ = {
        pageIntro: new PageIntro(cv)
      };

      this.controllers = {
        themeStyle: new ThemeStyleController(cv.color)
      };

      document.body.innerHTML = this;

      this.controllers.themeStyle.init();

    });

  }

  toString() {

      return `
${this.$.pageIntro}
      `;

  }

  /**
   * Obtains the query parameter for an external CV
   *
   * @returns {String} The CV path set in the url
   */
  get externalCV () {

    if (window.location.search) {

      return window.location.search.replace('?cv=', '');

    }

    return;

  }

}

export const page = new CardPage();
