var express = require("express");
var router  = express.Router();
var Author = require('./author');

// Get Book method
router.get('/getAuthor', (req,res) => {
    Author.find((err,data) => {
        if(err) return res.json({succes:false, data: data});
        return res.json({succes:true, data: data});
    });
});

module.exports = router;
