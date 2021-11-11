import Memo from './memo.js';

const dom = new Memo({ expire: 1000 });
window.components = dom;

dom.new = (tag = 'div', definition = v => v) => {
    const el = document.createElement(tag);
    definition(el);
    return el;
};
dom.byTagName = (tag) => document.getElementsByTagName(tag);
dom.$ = (selector) => [...document.querySelectorAll(selector)];
dom.$$ = {
    get head() { return dom.byTagName('head')[0]; },
    get title() { return dom.byTagName('title')[0]; },
};

dom.setTitle = (title) => dom.$$.title.innerHTML = title;
dom.addStyleSheet = (url) => new Promise(res => dom.$$.head.appendChild(
    dom.new('link', el => {
        el.href = url;
        el.rel = 'stylesheet';
        el.onload = res;
    })
));
dom.render = (html) => document.body.innerHTML = html;

export default dom;
