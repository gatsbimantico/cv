/**
 * MEMO
 * ----
 * 
 * This is my state machine, avoids executing functions given the same params as input.
 */

export default function Memo(options = {
    expire: 0, // number of milliseconds to expire the cache
}) {
    const cache = {};
    const proxyGetter = (obj, prop, ...args) => {
        const key = JSON.stringify(args.map(o => (o.toString ? o.toString() : o)));
        if (!(prop in cache)) {
            cache[prop] = {};
        }

        if (!(prop in obj)) {
            return null;
        } else if (typeof cache[prop] !== 'object') {
            return cache[prop];
        } else if (!(key in cache[prop])) {
            if (typeof obj[prop] === 'function') {
                cache[prop][key] = obj[prop].call(obj, ...args);
            } else {
                cache[prop][key] = obj[prop];
            }
            if (options.expire) {
                setTimeout(() => {
                    delete cache[prop][key];
                }, options.expire);
            }
        }

        return cache[prop][key];
    }
    return new Proxy({}, {
        get: (obj, prop) => (...args) => proxyGetter(obj, prop, ...args),
        set: (obj, prop, value) => (delete cache[prop], obj[prop] = value),
    });
}
