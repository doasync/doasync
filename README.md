Welcome to the async world!
===================

Hey! I’m a tiny little npm module - **doasync**. 40 lines of code! Don’t ignore me, I’m very helpful! With me you can call any method of your object without a callback and receive a promise! Object is not modified! Cool, ha?

You can use me alongside with **util.promisify** guy. He works with functions, I work with objects, but he helps me. But before we go, we must thank and give all credit to **Proxy** and **ES6** guys... **WeakMap** has also proved useful.

----------

Let's go!
-------------

Install me first:

```bash
npm i --save doasync
```

Usage
-------------------

```javascript
const fs = require('fs');
const doAsync = require('doasync');

doAsync(fs).readFile('package.json', 'utf8')
  .then((result) => {
    console.dir(JSON.parse(result), {colors: true});
  });
```

### Tips
------------------

If you need to receive multiple arguments - use **util.customPromisifyArgs**

If you need a custom promisify function - use **util.promisify.custom**
