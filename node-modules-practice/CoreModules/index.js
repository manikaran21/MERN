// core modules

const http = require('http') ;

var server = http.createServer((req,res) => {
     res.write("welcome to core modules ") ;
     res.end() ;
}) ;

server.listen(3000) ;