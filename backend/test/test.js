/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
const app = require('../app');
const chai = require('chai');
chai.use(require('chai-http'));
const { expect } = require('chai');

const host = 'http://localhost';
const port = '3001';
const url = `${host}:${port}`;

it('User Login Test', () => {
  chai
    .request(url)
    .post('/users/login')
    .send({ email: 'au@gmail.com', password: 'test1' })
    .end(function (err, res) {
      expect(res).to.have.status(200);
    });
});

it('User Signup Test', () => {
  chai
    .request(url)
    .post('/users/signup')
    .send({
      name: 'John Doe',
      email: 'jd@gmail.com',
      password: 'test',
    })
    .end(function (err, res) {
      expect(res).to.have.status(200);
    });
});
