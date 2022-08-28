const express = require('express') ;

const app = express() ;

const route = express.Router() ;


route.get('/getBooks',(req,res) => {
    res.write("get all books") ;
    res.end() ;
}) ;

route.post('/addBook',(req,res) => {
    res.write("add a new book ") ;
    res.end() ;
}) ;

route.put('/updateBook',(req,res) => {
    res.write(" update a book ") ;
    res.end() ;
}) ;

route.delete('/deleteBook',(req,res) => {
    res.write(" delete a book ") ;
    res.end() ;
}) ;

app.use(route) ;

app.listen(3000,() => {
   console.log("app is running on port " ,3000) ;
}) ;