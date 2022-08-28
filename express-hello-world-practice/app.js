// import express framework

const express = require('express') ;

const app = express() ;

app.get("/" ,(req,res) => {
    res.write("Hello world") ;
    res.end() ;
}) ;

app.listen(3000,() => {
  console.log("app is running in port of " ,3000) ;
}) ;