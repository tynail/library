const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var authorSchema = new Schema({
    first_name: String,
    last_name: String,
    age: Number
});

var Author = mongoose.model('Author', authorSchema);

module.exports = Author;