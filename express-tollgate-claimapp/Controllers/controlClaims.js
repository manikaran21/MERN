const Claims = require('../models/claims') ;
// get claim by id
const getClaimId = async(req,res)=>{
    try{
        Claims.find().lean().exec((err, users) => {
            console.log(users) ;
            res.json(users) ;   
          })   
    }
    catch(err){
     console.log(err) ;
    }
}
//post a claim
const postClaim = async(req,res) => {
  const claim = new Claims({
     claimTitle:req.body.claimTitle,
     hospitalId:req.body.hospitalId ,
     policyId:req.body.policyId,
     status:req.body.status
  } ) ;
  try{
    const a1 = await claim.save();
    res.send(a1) ;
  }
  catch(err){
      res.send(err.message) ;
  }
} ;
// get policy id
const getPolicyId = async(req,res)=>{
  try{
      const claim = await Claims.findOne({policyId:req.params.id}) ;
      res.json(claim) ;
  }
  catch(err){
   console.log(err) ;
  }
}
// get hospital id and date
const getHidDd = async(req,res)=>{
  try{
      
    const claim = await Claims.find({hospitalId:req.params.hospital ,createdAt:req.params.date}) ;
    res.json(claim) ;

        }

  catch(err){
   console.log(err) ;
  }
}

 // put status
const putStatus = async(req,res) => {
  try{
    const claim = await Claims.findById(req.params.id) ;
    claim.status = true ;

    const a1 = await claim.save() ;
    res.json(a1) ;
 }
 catch(e){
   res.send(e.massage) ;
 }
} ;
// delete a claim
const deleteClaim = async(req,res) => {
  try {
    const claim = await Claims.findByIdAndDelete(req.params.id);
    res.json(claim) ;
  } catch (e) {
    res.status(400).json({err: e});
  }
} ;



module.exports ={getClaimId,postClaim,getPolicyId,getHidDd,putStatus,deleteClaim} ;

