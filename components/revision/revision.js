export default class Revision {

  constructor () {}

  get manifest () {

    return fetch('https://gatsbimantico.github.io/cv/manifest.json')
      .then(r => r.json());

  }

  get outerHTML () {

    this.manifest
      .then(app => {

        document.querySelector('#revision-id')
          .innerHTML = `
<a href="https://github.com/gatsbimantico/cv/blob/master/README.md">${app.short_name}<small><small> v.${app.version}</small> by </small>${app.author}</a>
          `;

      });

    return `
<div id="revision-id"></div>
    `;

  }

};
