const { json } = require('body-parser');
const express = require('express') ;
const { findById, castObject } = require('../models/aliens');
const router = express.Router() ;
const Alien = require('../models/aliens') ;

router.get('/' ,async(req,res)=>{

    try{
       
        Alien.find().lean().exec((err, users) => {
            
            res.json(users) ;
            
          })

          
        
       
    }
    catch(err){
     console.log(err) ;
    }
}) ;


router.post('/' ,async(req,res) => {

   const alien = new Alien({
      name:req.body.name ,
      tech:req.body.tech ,
      sub:req.body.sub
   } ) ;
   try{
     const a1 = await alien.save();
     res.send(a1) ;
   }
   catch(err){
       res.send(err.message) ;
   }
 
}) ;


router.get('/:id',async(req,res) =>{
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien) ;
  } catch (e) {
    res.status(400).json({err: e});
  }
}) ;

router.delete('/:id',async(req,res) =>{
  try {
    const alien = await Alien.findByIdAndDelete(req.params.id);
    res.json(alien) ;
  } catch (e) {
    res.status(400).json({err: e});
  }
}) ;

router.put('/:id' ,async(req,res)=>{

  try{
     const alien = await Alien.findById(req.params.id) ;
     alien.sub = true ;

     const a1 = await alien.save() ;
     res.json(a1) ;
  }
  catch(e){
    res.send(e.massage) ;
  }
      
    
   

}) ;






module.exports = {router} ;