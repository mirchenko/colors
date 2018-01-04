import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import server from '../../src/server';
import Products from '../../src/server/db/models/Products';

const should = chai.should();
chai.use(chaiHttp);

describe('Routes : products', () => {
  describe('GET /products', () => {
    it('Should return array of products', done => {
      chai.request(server)
        .get('/products')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          done();
        });
    });
  });


  describe('GET /products', () => {
    it('Should return pagged array of products', done => {
      chai.request(server)
        .get('/products?page=1&size=5')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          done();
        });
    });
  });

  describe('POST /products', () => {
    it('should return product created', done => {
      chai.request(server)
        .post('/products')
        .send({ name: faker.commerce.productName(), color: ['red']})
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          done();
        });
    });
  });

  describe('DELETE /products', () => {
    it('should return product created', done => {
      Products
        .query()
        .first()
        .then(({ id }) => {
          chai.request(server)
            .delete(`/products/${id}`)
            .end((err, res) => {
              should.not.exist(err);
              res.status.should.equal(200);
              res.type.should.equal('application/json');
              done();
            });
        });
    });
  });
});