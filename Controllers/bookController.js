const bookController = (Book) => {

  const post = (req, res) => {
    if(!req.body.title) {
      res.status(400);
      res.send('Title is required');
    } else {
      let book = new Book(req.body);
      book.save();
      res.status(201);
      res.send(book);
    }
  };

  const get = (req, res) => {
    const query = req.query;
    Book.find(query, (err, books) => {
      if (err) { 
        res.status(500);
        res.send(err);
      }
      else {
        res.json(books);
      }
    });
  };

  return {
    post,
    get
  }
}

module.exports = bookController;
