const express=require("express");
const router=express.Router();
const {check,validationResult}=require("express-validator")
const {users}=require("../database");
const bcrypt=require("bcrypt")

router.get("/",(req,res)=>{
    res.send("Auth set");
})

router.post("/signup",[
    check("email","Please enter valid email")
    .isEmail(),
    check("password","Please enter valid password")
    .isLength({min:6})
],async (req,res)=>{
    const {email,password}=req.body;
    const errors=validationResult(req);

    //handling errors
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }

    //check is user already exist
    let user=users.find((user)=>{
        return user.email===email
    });
    if(user){
        res.status(400).json({
            "errors":[
                {
                    "mag":"Sorry! The user already exists"
                }
            ]
        })
    } 
    //Hashing the password
    let hashedPassword=await bcrypt.hash(password,10);
    users.push({
        email,
        password:hashedPassword
    })
    console.log(email,password);
    res.send("Validation passed");
})

//Get total users
router.get("/all",(req,res)=>{
    res.json(users);
})
module.exports=router;