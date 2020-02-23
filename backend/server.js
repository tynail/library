const mongoose = require('mongoose');
const express = require('express');

var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const Data = require('./data');

var bookRoutes = require('./routes/book');

const API_PORT = 3001;
const app = express();
app.use(cors());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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


// Routes fo books
app.use('/book', bookRoutes );

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));