const fs = require('fs');
const doAsync = require('doasync');

doAsync(fs).readFile('package.json', 'utf8')
  .then((result) => {
    console.dir(JSON.parse(result), {colors: true});
  });
