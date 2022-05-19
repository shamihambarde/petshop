var fs = require('fs');

fs.appendFile('appendedfile.txt', 'Hello this is appended', function(err){
    if(err) throw err;
    console.log('Saved!');
});

fs.open('openfile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

fs.writeFile('writefile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});