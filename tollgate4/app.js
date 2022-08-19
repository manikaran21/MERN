const express = require('express') ;
const mongoose = require('mongoose') ;
const cors =require('cors') ;
const bodyParser = require('body-parser') ;

const app = express() ;
// parse application/x-www-form-urlencoded

const url = "mongodb://localhost:27017/claim" ;



mongoose.connect(url,{useNewUrlParser:true}) ;

const con =  mongoose.connection ;

con.on('open' ,()=>{
   console.log("DB connected ...") ;
}) ;

const alienRouter = require('./routers/aliens') ;
app.use(cors()) ;

app.use(express.json({
    type: ['application/json', 'text/plain']
  })) ;
  

//app.use(bodyParser.urlencoded()) ;

// parse application/json
//app.use(bodyParser.json()) ;



app.use('/aliens',alienRouter.router) ;


app.listen(8000,()=>{
  console.log("server started") ;
});