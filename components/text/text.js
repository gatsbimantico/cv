export default class Text {

  constructor (name, text) {

    this.name = name;
    this.text = this.parse(text);

  }

  parse (str) {

    return str
      .replace(/(\n)(\n)/g, '$1<br><br>$2');

  }

  get outerHTML () {

    return `
<p class="${this.name}">${this.text}</p>
    `;

  }

}
