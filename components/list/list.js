export default class List {

  constructor(Type, list = []) {

    this.Type = Type;
    this.list = list.filter(o => o);

  }

  get length () {

    return this.list.length;

  }

  toString() {

    let htmlList = this.list
      .map(item => {
        try {
          return new this.Type(item);
        } catch (e) {}
        try {
          return this.Type(item);
        } catch (e) {}
      }),
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
