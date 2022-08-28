
var mongoose = require('mongoose');
var express = require('express'); 
var router = express.Router();
var BookModel = require('./BookSchema');
  
var query = 'mongodb+srv://Username:<password>'
    + '@book.tuufn.mongodb.net/College?'
    + 'retryWrites=true&w=majority'
  
const db = (query);
mongoose.Promise = global.Promise;
  
mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
  
module.exports = router;