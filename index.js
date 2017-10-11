
const {promisify} = require('util');

function isFunction (fn) {
  return !!(
    fn && fn.constructor && fn.call && fn.apply &&
    Object.prototype.toString.call(fn) === '[object Function]'
  );
}

const proxyMap = new WeakMap();

function doAsync (object) {
  // Return from weakMap
  let proxy = proxyMap.get(object);
  if (proxy) {
    return proxy;
  }

  // Create proxy
  proxy = new Proxy(object, {
    get (target, prop) {
      if (isFunction(target[prop])) {
        const fn = target[prop];
        return fn.length
          ? (...args) => promisify(fn).apply(target, args)
          : () => Promise.resolve(fn.call(target));
      }
      return target[prop];
    },
    apply (fn, thisValue, args) {
      return fn.length
        ? promisify(fn).apply(thisValue, args)
        : Promise.resolve(fn.call(thisValue));
    }
  });

  // Save to weakMap
  proxyMap.set(object, proxy);

  return proxy;
}

module.exports = doAsync;
