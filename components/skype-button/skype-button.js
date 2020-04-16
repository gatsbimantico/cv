
export default class SkypeButton {

  constructor(skypeLink) {

    this.skype = skypeLink;

    if (this.isLink(skypeLink)) {

      this.partial = 'link';

    }

  }

  isLink (str) {

    return str.match(/^(https?\:)?\/\//);

  }

  linkPartial (skypeLink) {

    return `
<a href="${skypeLink}" target="_blank">Skype</a>
    `;
  }

  toString() {

    return `
<span aria-label="Join me in a "></span>
<div class="skype-button" aria-label="Skype">
  ${this[this.partial + ['Partial']](this.skype)}
</div>
<span aria-label="."></span>
    `;

  }

}
