const express = require('express') ;
const mongoose = require('mongoose') ;
const cors =require('cors') ;
const bodyParser = require('body-parser') ;

const url = "mongodb://localhost:27017/insurence-claims" ;

const app = express() ;

const claimsRouter  = require('./routers/Router') ;


mongoose.connect(url,{useNewUrlParser:true}) ;

const con =  mongoose.connection ;

con.on('open' ,()=>{
   console.log("DB connected ...") ;
}) ;


app.use(cors()) ;

app.use(express.json({
    type: ['application/json', 'text/plain']
  })) ;
  

app.use('/api/claims',claimsRouter.router) ;


app.listen(8000,()=>{
  console.log("server started") ;
});




































































































/*

const express = require('express') ;
const mongoose = require('mongoose') ;
const fs= require('fs') ;
const app = express() ;





mongoose
  .connect("mongodb://localhost:27017/insurence")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error: ", err));



app.use(express.json()) ;



const getClaimIdRoute  = require('./Router/GetClaimId') ;
const postClaimRoute = require('./Router/PostClaim') ;
const getPolicyIdRoute = require('./Router/GetPolicyId') ;
const getHIdCdRoute = require('./Router/GetHIdCd') ;
const putStatusRoute = require('./Router/PutStatus') ;
const deleteClaimIdRoute = require('./Router/DeleteClaimId') ;

// route middleware
app.use(getClaimIdRoute.route) ;
app.use(postClaimRoute.route) ;
app.use(getPolicyIdRoute.route) ;
app.use(getHIdCdRoute.route) ;
app.use(putStatusRoute.route) ;
app.use(deleteClaimIdRoute.route) ;

// route middleware   

//fs.readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));




app.listen(8000,()=>{
    console.log("server is running on port 8000") ;
}) ;


*/