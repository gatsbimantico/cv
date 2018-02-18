export default class List {

  constructor(Type, list) {

    this.Type = Type;
    this.list = list; 

  }

  get outerHTML () {

    return this.list
      .map(item => new this.Type(item).outerHTML)
      .join('');

  }

}
