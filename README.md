Welcome to the async world!
===================

Hey! I’m a tiny little npm module - **doasync**. 40 lines of code! Don’t ignore me, I’m very helpful! With me you can call any method of your object without a callback and receive a promise! Object is not modified! Cool, ha?

**util.promisify** guy helps me to work with functions and object methods. But before we go, we must thank and give all credit to **Proxy** and **ES6** guys... **WeakMap** has also proved useful.

----------

Let's go!
-------------

Install me first:

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
  .then((result) => {
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
  .then(result => {...});
```

`util.promisify()` which is under the hood of this module can interact directly with the V8 API, so it doesn't create closures and will be faster than userland implementations.

### Tip
------------------

If you need a custom promisify function - use **util.promisify.custom**
