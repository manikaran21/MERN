const express = require('express') ;

const route = express.Router() ;

route.delete('/deleteBook/:bookId' ,(req,res) => {
   res.write("get the book " , req.url) ;
   res.end() ;
}) ;

module.exports = {route} 