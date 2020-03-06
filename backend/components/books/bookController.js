var express = require("express");
var router  = express.Router();
var Book = require('./book');

// Get all Books method return array of books
router.get('/getBooks', (req,res) => {
    Book.find((err, books) => {
        if(err) return res.json({succes:false, error: err});
        return res.json({succes:true, books: books});
    });
});

// Get one book by id
router.get('/getBookById', (req,res) => {
    const id = req.body;
    Book.findById(id, (err, book) => {
        if(err) return res.json({succes:false, error:err});
        return res.json({succes:true, data: book});
    }).populate({ path: 'author'}) //TODO check this to be able to retrieve the author link to the book
});

// Create method
router.post('/createBook', (req,res) => {
    let newBook = new Book();

    const title = req.body.title,
          summary = req.body.summary,
          genre = req.body.genre,
          imageUrl = req.body.imageUrl;

    // if((!id && id !==0) || !book) {
    //     return req.json({
    //         succes: false,
    //         error: 'Invalid Input'
    //     });
    // }

    newBook.title = title;
    newBook.summary = summary;
    newBook.genre = genre;
    newBook.imageUrl = imageUrl;
    newBook.save((err) => {
        if(err) return res.json({succes:true, error:err})
        return res.json({succes:true});
    });
});

// Update method
router.post('/updateBook', (req,res) => {
    const {id, update} = req.body;
    Book.findByIdAndUpdate(id, update, (err) => {
        if(err) return res.json({succes:false, error:err});
        return res.json({succes:true});
    });
});

// Delete method
router.delete('/deleteBook', (req,res) => {
    const id = req.body;
    Book.findByIdAndRemove(id, (err) => {
        if(err) return res.json({succes:false, error:err});
        return res.json({succes:true});
    });
});

module.exports = router;
