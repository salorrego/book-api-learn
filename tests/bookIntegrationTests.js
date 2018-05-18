const should = require('should');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');

const Book = mongoose.model('Book');
const agent = request(app);

describe('Book Crud Test', () => {

  it('Should allow to post a book returning a read and _id', (done) => {
    let bookPost = { 
      title: 'Test Title',
      author: 'Salo',
      genre: 'Unknown'
    };

    agent.post('/api/books')
      .send(bookPost)
      .expect(201)
      .end((err, results) => {
        results.body.read.should.equal(false);
        results.body.should.have.property('_id');
        done();
      })
  });
    
  afterEach((done) => {
    Book.remove().exec(()=> {
      app.close();
      mongoose.connection.close();
      done();
    });
  });
});
