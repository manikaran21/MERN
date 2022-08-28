const http = require('http') ;

const formidable = require('formidable') ;

const fs  = require('fs') ;

const path = require('path') ;


http.createServer((req,res) => {

    var form  = new formidable.IncomingForm() ;
    form.parse(req , (err,fields,files) => {
        console.log(files.profilepic.filepath) ;

        // store a file in my application 

        var oldpath  = files.profilepic.filepath ;
        var newpath = "/home/masan/MERN/node-file-upload-practice/Upload/"+files.profilepic.originalFilename ;
        // var newpath = path.join(__dirname,'Upload')+"/"+files.profilepic.originalFilename ;
        var rawdata = fs.readFileSync(oldpath) ;
        fs.writeFile(newpath, rawdata ,(err) => {
            console.log(err) ;
        }) ;
    }) ;
    res.write("welcome to formidable") ;
    res.end() ;
}).listen(3000) ;