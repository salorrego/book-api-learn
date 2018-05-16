const bookController = (Book) => {
  const post = (req, res) => {
    let book = new Book(req.body);
    book.save();
    res.status(201).send(book);
  };

  const get = (req, res) => {
    const query = req.query;
    Book.find(query, (err, books) => {
      if (err) { 
        res.status(500).send(err);
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
