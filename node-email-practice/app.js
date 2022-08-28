const http = require('http') ;

const nodemailer = require('nodemailer') ;


http.createServer((req,res) => {
    
    if(req.url === "/send"){
        res.write("check mail") ;
        var transporter = nodemailer.createTransport({
            service:'gmail' ,
            secure:true ,
            auth:{
                user:'masanmb17tes@gmail.com' ,
                pass:'qlfcerohkymarafm'
            }
        }) ;

        var mailOption = {
            from:'masanmb17tes@gmail.com' ,
            to:'masanmb17tes@gmail.com' ,
            subject:'test a mail' ,
            html:'<p>welcome to nodemailer</p>'
        }

        transporter.sendMail(mailOption,(err,info) => {
          if(err){
            res.write(err) ;
            res.end() ;
          }
          else{
           res.write(info) ;
           res.end() ;
          }
        }) ;

      
     res.end() ;
    }


}).listen(3000) ;