const express = require('express') ;

const getRoute = require('./getbook') ;

const addRoute = require('./addbook') ;

const updateRoute = require('./updatebook') ;

const deleteRoute = require('./deletebook') ;



const app = express() ;

app.use(getRoute.route) ;

app.use(addRoute.route) ;

app.use(updateRoute.route) ;

app.use(deleteRoute.route) ;


app.listen(3000 , () => {
    console.log("app is running on port number ",3000)
}) ;
