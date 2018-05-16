const should = require('should');
const sinon = require('sinon');

describe('Book Controller Tests', () => {
  describe('Post', () => {
    it('should not allow an empty title on post', () => {
      const Book = function(book) {this.save = () => {}};
      const req = {
        body: {
          author: 'Salo'
        }
      }
      const res = {
        status: sinon.spy(),
        send: sinon.spy()
      }

      const bookController = require('../controllers/bookController')(Book);

      bookController.post(req, res);

      res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
      res.send.calledWith('Title is required').should.equal(true);
    });
  });
});
