router.get('/deleteBook', function(req, res) {
    BookModel.remove({BookId:188}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});