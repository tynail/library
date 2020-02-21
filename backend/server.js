const mongoose = require('mongoose');
const express = require('express');

var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());

const router = express.Router();

// this is our MongoDB database
const dbRoute =
  'mongodb://localhost/library';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Schema 

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

var summary = `An unspeakable crime. A confounding investigation. At a time when the King brand has never been stronger
he has delivered one of his most unsettling and compulsively readable stories
An eleven-year-old boy’s violated corpse is found in a town park. Eyewitnesses 
and fingerprints point unmistakably to one of Flint City’s most popular citizens. 
He is Terry Maitland, Little League coach, English teacher, husband, and father of two girls. 
Detective Ralph Anderson, whose son Maitland once coached, orders a quick and very public arrest. 
Maitland has an alibi, but Anderson and the district attorney soon add DNA evidence to go with the fingerprints and witnesses. 
Their case seems ironclad.

As the investigation expands and horrifying answers begin to emerge, King’s propulsive story kicks into high gear,
generating strong tension and almost unbearable suspense. Terry Maitland seems like a nice guy, but is he wearing another face? 
When the answer comes, it will shock you as only Stephen King can`;


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

// Get Book method
router.get('getBook', (req,res) => {
    Data.find((err,data) => {
        if(err) return res.json({succes:false, data: data});
        return res.json({succes:true, data: data});
    });
});







// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));