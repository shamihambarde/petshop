var fs = require('fs');

fs.unlink('do.js', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});