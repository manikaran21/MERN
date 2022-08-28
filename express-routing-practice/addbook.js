const express = require('express') ;

const route = express.Router() ;

route.post('/addbook' ,(req,res) => {
   res.write("add the book ") ;
   res.end() ;
}) ;

module.exports = {route} ;