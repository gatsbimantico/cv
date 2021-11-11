export default (Type, list = []) => {
  let htmlList = list.filter(o => o).map(Type),
    lastItem;

  if (htmlList.length >= 2) {

    lastItem = (new DOMParser()).parseFromString(htmlList.pop(), 'text/html').body.firstChild;
    lastItem.innerHTML = `<span aria-label=" and "></span>` + lastItem.innerHTML

    return htmlList.join('') + lastItem.outerHTML;

  }

  return htmlList.join('');
}
