const mongoose = require('mongoose') ;

module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true ,
    } ;
    try{
        mongoose.connect(process.env.DB,connectionParams).then(db => console.log("Connected To DB .......")) ;
       
    }catch(err){
     return console.log(err,'could not connect to database !') ;
    }
}