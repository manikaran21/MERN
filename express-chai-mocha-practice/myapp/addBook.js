router.post('/addBook', function(req, res) {
    var newBook = new BookModel();
       newBook.Name = req.body.Name;
       
       newBook.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });