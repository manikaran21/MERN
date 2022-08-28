/* 
  var http =  require('http') ;


var server = http.createServer((req,res) => {
    res.write("welcome http") ;
    res.end() ;
}) ;

server.listen(8080) ; // server object listen on port 8080   


*/

/*
var http = require('http');
var server = http.createServer((req, res) =>  {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
});

server.listen(8080) ;

*/

/*
var http = require('http');
var server = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
});

server.listen(8080) ;

*/


var http = require('http');
var url = require('url');

var server = http.createServer( (req, res) =>  {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var s = JSON.stringify(q) ;
  res.write(s) ;
 
});

server.listen(8080) ;