'use strict';

const { promisify } = require('util');

const proxyMap = new WeakMap();
const asyncMap = new WeakMap();

const proxyHandler = {
  get (target, prop) {
    if (isFunction(target[prop])) {
      const fn = target[prop];
      return from(asyncMap, fn,
        fn.length
          ? (...args) => promisify(fn).apply(target, args)
          : () => Promise.resolve(fn.call(target))
      );
    }
    return target[prop];
  },
  apply (fn, thisValue, args) {
    return fn.length
      ? from(asyncMap, fn, promisify(fn).apply(thisValue, args))
      : Promise.resolve(fn.call(thisValue));
  }
};

function doAsync (object) {
  return from(proxyMap, object, new Proxy(object, proxyHandler));
}

function from (map, key, value) {
  return map.get(key) || map.set(key, value).get(key);
}

function isFunction (fn) {
  return !!(Object.prototype.toString.call(fn) === '[object Function]');
}

module.exports = doAsync;
