import mongoose from 'mongoose' ;

const schema = mongoose.Schema ;

const blogSchema = new schema({
    title:{
        type:String ,
        required:true 
    } ,
    description:{
        type:String ,
        required:true
    } ,
    image:{
        type:String ,
        required:true
    } ,
    user :{  // which user is posted
        type:mongoose.Types.ObjectId ,
        ref:"User" ,
        required:true
    }

}) ;

export default mongoose.model("Blog",blogSchema) ;
