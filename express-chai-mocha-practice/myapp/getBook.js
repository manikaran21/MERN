router.get('/getBook/:BookId', function(req, res) {
    BookModel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
 });