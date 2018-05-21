const express = require('express');
const mongoose = require('mongoose');
const Book = require('./src/models/bookModel');
const bodyParser = require('body-parser');
const bookRouter = require('./src/routes/bookRoutes')(Book);
const config = require('config');

const app = express();

const port = process.env.PORT || 3000;

let db;

db = mongoose.connect(`${config.database.host}/${config.database.name}`);
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API')
});

const server = app.listen(port, () => {
  console.log('Gulp is running on PORT ', port);
});

module.exports = server;
