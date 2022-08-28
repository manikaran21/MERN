const express  = require('express') ;
const app = express() ;
const bodyParser = require('body-parser') ; // middleware



app.use(bodyParser.urlencoded({extended:false})) ;

app.get('' ,(req,res) => {
  //  res.write("welcome to app ") ;
   // res.end() ;
   res.send("hello") ;
}) ;

app.post('/login' ,(req,res) => {
   console.log(req.body) ;
   res.send(req.body) ;
}) ;

app.listen(3000,() => {
    console.log(" app is running ") ;
}) ;