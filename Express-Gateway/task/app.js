const express = require('express') ;
const app = express() ;

const router = require('./v1/users.routes') ;


app.use('/user',router) ;


module.exports = app ;