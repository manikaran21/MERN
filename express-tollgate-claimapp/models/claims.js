const mongoose = require('mongoose') ;

const claimsSchema = new mongoose.Schema(
    {
        claimTitle: {
            type:String ,
            required:true
        } ,
        hospitalId: {
            type:Number ,
            required:true
        } ,
        policyId: {
          type:Number ,
          required:true
      } ,
      status:{
        type:Boolean ,
        default:false
      }
      
        
    }
,{timestamps:true}) ;

module.exports =  mongoose.model('Claims' ,claimsSchema) ;