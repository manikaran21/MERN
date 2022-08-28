router.get('/save', function(req, res) {
    var newBook = new BookModel({BookId:101, 
        Name:"The Chronicles of Narnia"});

    newBook.save(function(err, data) {
        if(err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});