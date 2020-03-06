const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author'
  },
  summary: String,
  genre: String,
  imageUrl: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;