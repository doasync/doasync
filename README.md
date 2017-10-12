![DoAsync logo](http://i.imgur.com/2X3FhA7.png)

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url] [![Tweet][twitter-image]][twitter-url]

[npm-image]: https://img.shields.io/npm/v/doasync.svg
[npm-url]: https://www.npmjs.com/package/doasync
[downloads-image]: https://img.shields.io/npm/dw/doasync.svg
[deps-image]: https://david-dm.org/doasync/doasync.svg
[issues-image]: https://img.shields.io/github/issues/doasync/doasync.svg
[issues-url]: https://github.com/doasync/doasync/issues
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/doasync/doasync/master/LICENSE
[twitter-image]: http://i.imgur.com/VYWV3yd.png
[twitter-url]: https://twitter.com/intent/tweet?text=Promisify%20everything%20without%20modification%20using%20util.promisify%20and%20ES6%20Proxy%3A&url=https://codeburst.io/do-async-js-c0bfa6ce1536
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

Welcome to the async world!
===================

Hey! I’m a tiny little npm module - **doasync**. ~40 lines of code! Don’t ignore me, I’m very helpful! With me you can call any method of your object without a callback and receive a promise! Object is not modified! Cool, ha?

I can promisify functions as well (not only objects) with the help of **util.promisify**. But first of all, we must give credit to **Proxy** and **ES6** guys... **WeakMap** has also proved useful.

----------

Installation
-------------

```bash
npm i --save doasync
```

Usage
-------------------

With objects:

```javascript
const fs = require('fs');
const doAsync = require('doasync');

doAsync(fs).readFile('package.json', 'utf8')
  .then(result => {
    console.dir(JSON.parse(result), {colors: true});
  });
```

With functions:

```javascript
doAsync(request)('http://www.google.com')
  .then(({body}) => {
    console.log(body);
    // ...
  });
```

You can even use native `call` and `apply` to bind some context:

```javascript
doAsync(myFunc).apply(context, params)
  .then(result => { /*...*/ });
```

`util.promisify()` which is under the hood of this module can interact directly with the V8 API, so it doesn't create closures and will be faster than userland implementations.

Memoization is used in the module to prevent functions from being promisified each time (with the use of WeakMaps).

You can use it in **async/await** of course!

### Tip
------------------

If you need a custom promisify function - use **util.promisify.custom**
