var express = require("express");
var router  = express.Router();
var Book = require('../models/book');

// Get Book method
router.get('/getBook', (req,res) => {
    Book.find((err,data) => {
        if(err) return res.json({succes:false, data: data});
        return res.json({succes:true, data: data});
    });
});

module.exports = router;
