router.post('/updateBook', function(req, res) {
    BookModel.findByIdAndUpdate(req.body.id, 
    {Name:req.body.Name}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});