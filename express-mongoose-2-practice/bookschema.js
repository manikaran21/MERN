var mongoose=require('mongoose');
  
var BookSchema = new mongoose.Schema({
    BookId:Number,
    Name:String,
});
  
module.exports = mongoose.model(
    'book', BookSchema, 'Books');