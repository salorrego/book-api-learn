const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost/bookAPI');

const app = express();

const port = process.env.PORT || 3000;

const bookRouter = require('./routes/bookRoutes')(Book);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API')
});

app.listen(port, () => {
  console.log('Gulp is running on PORT ', port);
});
