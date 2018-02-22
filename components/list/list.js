export default class List {

  constructor(Type, list) {

    this.Type = Type;
    this.list = list; 

  }

  get length () {

    return this.list.length;

  }

  get outerHTML () {

    let htmlList = this.list
      .map(item => new this.Type(item).outerHTML),
      lastItem;

    if (htmlList.length >= 2) {

      lastItem = (new DOMParser()).parseFromString(htmlList.pop(), 'text/html').body.firstChild;
      lastItem.innerHTML = `<span aria-label=" and "></span>` + lastItem.innerHTML

      return htmlList.join('') + lastItem.outerHTML;

    } else {

      return htmlList.join('');

    }

  }

}
