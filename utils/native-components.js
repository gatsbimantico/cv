import Memo from './memo.js';

const dom = new Memo({ expire: 1000 });
window.components = dom;

const newDomTag = (tag = 'div', definition = v => v) => {
    const el = document.createElement(tag);
    definition(el);
    return el;
};

dom.$ = (selector) => [...document.querySelectorAll(selector)];
dom.byTagName = (tag) => document.getElementsByTagName(tag);
dom.Head = () => dom.byTagName('head')[0];
dom.new = newDomTag;
dom.setTitle = (title) => dom.byTagName('title')[0].innerHTML = title;
dom.addStyleSheet = (url) => new Promise(res => dom.Head().appendChild(
    newDomTag('link', el => {
        el.href = url;
        el.rel = 'stylesheet';
        el.onload = res;
    })
));

export default dom;
