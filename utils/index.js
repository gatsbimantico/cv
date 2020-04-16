import Memo from './memo.js';

const memo = new Memo();
window.memo = memo;

export const hasWindow = typeof window !== 'undefined';
export const hasLocation = hasWindow && 'location' in window;
export const parseURL = memo.parseURL = (url) => new URL(url || 'http://nobrowserhost');

export const location = {
    get current() { return parseURL(hasLocation && window.location.href); }
};
