const express  = require('express') ;
const router = express.Router() ;


router.get('/register' ,(req,res) => {
      res.send("User registered successfully ") ;
      
}) ;

module.exports = router ;