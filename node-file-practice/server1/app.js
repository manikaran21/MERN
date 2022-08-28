const http = require('http') ;

const fs  = require('fs') ;


let server = http.createServer((req,res) => {
   if(req.url == '/read') {
    fs.readFile('hello.txt' , (err ,data) => {
        if(err){
            res.write("File error") ;
            res.end() ;
        }
        else{
            res.write("Hello ") ;
            res.write(data.toString()) ;
            res.end() ;
        }
    }) ;
   }
   if(req.url == '/write'){
    fs.writeFile('./hello.txt' , " Welcome to my world  " , (err) =>{
        if(err) {
            res.write(err) ;
            res.end() ;
        }
        else{

        }
    } )
   }
   if(req.url == '/append'){
    fs.appendFile('./hello.txt' , " This is stackroute " , (err) =>{
        if(err) {
            res.write(err) ;
            res.end() ;
        }
        else{

        }
    } )
   }

   if(req.url == '/rename'){
    fs.rename('./hello.txt' , 'file1.txt' , (err) =>{
        if(err) {
            res.write(err) ;
            res.end() ;
        }
        else{

        }
    } )
   }

 if(req.url == '/delete'){
    fs.unlink('./hello.txt' , " This is stackroute " , (err) =>{
        if(err) {
            res.write(err) ;
            res.end() ;
        }
        else{

        }
    } )
   }

}) ;


server.listen(3000) ;