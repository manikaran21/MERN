import mongoose from 'mongoose';
import Blog from '../model/Blog' ;
import User from '../model/User';

export const getAllBlogs = async (req,res,next) => {
    let blogs ;
    try{
      blogs = await Blog.find().populate('user') // find all of the records (for empty query)
    }catch(err){
        return console.log(err) ;
    }
    if(!blogs){
        return res.status(404).json({message:"No Blogs Found"}) ;
    }

    return res.status(200).json({blogs}) ;

} ;

export const addBlog =async(req,res,next) => {
  const { title ,description ,image ,  user } = req.body ;
   
  let existingUser ;
  try{
  existingUser = await User.findById(user) ;
  }catch(err){
    return console.log(err) ;
  }
  if(!existingUser){
    return res.status(400).json({message:"Unable to find user by this Id"}) ;
  }
  
  // new instance
  const blog = new Blog( {
       title,
       description,
       image,
       user 
    }) ;
    try{
     //await blog.save() ;
     // add session for there (insted of adding directly , add the session)
     // session to save the blog
     const session = await mongoose.startSession() ;
     session.startTransaction() ;
     await blog.save();
     // await blog.save({session})
      // save the user from session only
     // push to the array of existing user always
     existingUser.blogs.push(blog) ;
     await existingUser.save(); // again save proper new document or object and from this session only
     // await existingUser.save({session})
     await session.commitTransaction() ;

    }catch(err){
         console.log(err) ;
         return res.status(500).json({message:err}) ;
    }
    return res.status(200).json({blog}) ;

} ;

export const updateBlog = async(req,res,next) => {
    const {title,description} = req.body ;
    const blogId = req.params.id ;
    let blog ;
    try{
        blog = await Blog.findByIdAndUpdate(blogId ,{
            title,
            description
        }) ;
    
    }catch(err){
        return console.log(err) ;
    }
    if(!blog){
        return res.status(500).json({message:"Unable to update the Blog"}) ;
    }
    return res.status(200).json({blog}) ; 
} ;

export const getById = async(req,res,next) => {
   const id = req.params.id ;
   let blog ;
   try{
    blog = await Blog.findById(id) ;
   }catch(err) {
    return console.log(err) ;
   }
   if(!blog){
    return res.status(404).json({message:"No Blog Found"}) ;
   }
   return res.status(200).json({blog}) ;
 } ;

 export const deleteBlog = async(req,res,next) => {
   const id = req.params.id ;
   let blog ;
   try{

   blog = await Blog.findByIdAndRemove(id).populate('user') ; // populate works for the reference collection
   console.log(blog) ;
   await blog.user.blogs.pull(blog) ; // pull is method in mongoose to pull out element based on Id
   await blog.user.save() ;

   }catch(err){
    return console.log(err) ; 
   }
   if(!blog){
    return res.status(500).json({message:"unable to delete"}) ;
   }
   return res.status(200).json({message:"successfully deleted"}) ;
 } ;

 export const getByUserId = async(req,res,next) => {
  console.log("hello this is user") ;
   const userId = req.params.id ;
   let userBlogs ;
   try{
     userBlogs = await User.findById(userId).populate("blogs") ;
     console.log(userBlogs) ;
   }catch(err){
    return console.log(err) ;
   }
   if(!userBlogs){
    return res.status(404).json({message:"No blogs found"}) ;
   }
   return res.status(200).json({user:userBlogs}) ;
 } ;