const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  author: String,
  summary: String,
  genre: String,
  imageUrl: String
});

var Book = mongoose.model('Book', bookSchema);

// Adding a Book

// var summary = `An unspeakable crime. A confounding investigation. At a time when the King brand has never been stronger
// he has delivered one of his most unsettling and compulsively readable stories
// An eleven-year-old boy’s violated corpse is found in a town park. Eyewitnesses 
// and fingerprints point unmistakably to one of Flint City’s most popular citizens. 
// He is Terry Maitland, Little League coach, English teacher, husband, and father of two girls. 
// Detective Ralph Anderson, whose son Maitland once coached, orders a quick and very public arrest. 
// Maitland has an alibi, but Anderson and the district attorney soon add DNA evidence to go with the fingerprints and witnesses. 
// Their case seems ironclad.

// As the investigation expands and horrifying answers begin to emerge, King’s propulsive story kicks into high gear,
// generating strong tension and almost unbearable suspense. Terry Maitland seems like a nice guy, but is he wearing another face? 
// When the answer comes, it will shock you as only Stephen King can`;


// var outsider = new Book({
//   title: "The Outsider",
//   author: "Stephen King",
//   summary: summary,
//   genre: "Thriller",
//   imageUrl: `https://www.meijer.com/content/dam/meijer/product/0978/15/0118/10/0978150118100_0_A1C1_1200.png`
// });

// outsider.save((err, book) => {
//   if(err) {
//     console.log('Something went wrong');
//   } else {
//     console.log('Book save to the DB');
//   }
// });

module.exports = Book;