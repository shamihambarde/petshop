var http = require('http');
var dtime = require('./datemodule');

http.createServer(function (req, res) {
  console.log('entered function')
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!\nSending data to client.\n\n');
  res.end('Date and time : ' + dtime.dates());
}).listen(8080); 