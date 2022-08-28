const express = require('express') ;

const route = express.Router() ;

route.get('/getBook/:bookId' ,(req,res) => {
   res.write("get the book ") ;
   res.end() ;
}) ;

module.exports = {route} ;