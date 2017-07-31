Welcome to the async world!
===================

Hey! I'm a tiny cute npm module, **doAsync**. 40 lines of code! Don't ignore me, I'm very helpful! With me you can call any method of your object without a callback and receive a promise! Object is not modified! Cool, ha?

I can be used along with **util.promisify**. He works with functions, I work with objects. But before we go, we must thank and give all credit to **Proxy** and ES6 guys.

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

### Yep!
