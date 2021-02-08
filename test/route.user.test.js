const assert = require('assert');
const proxyquire = require('proxyquire');
const usersMock = require('../utils/mocks/users.mock');
const { UserServiceMock } = require('../utils/mocks/userService.mock');

const testServer = require('../utils/testServer');

describe('En point Testing: routes - user', function () {
  const route = proxyquire('../routes/user.routes', {
    '../services/user.service': UserServiceMock,
  });
  const request = testServer(route);

  describe('GET / users', function (params) {
    it('should respond with status 200', function (done) {
      request.get('/api/users').expect(200, done);
    });
    it('should respond with the list of users', function (done) {
      request
        .get('/api/users')
        .expect(200)
        .end((err, res) => {
          assert.deepEqual(res.body, {
            data: usersMock,
            message: 'users were listed',
          });
          done();
        });
    });
    it('should bring one user', function () {
      request
        .get('/api/users/1')
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: usersMock[0],
            message: 'user was listed',
          });
        });
    });
  });
  describe('POST / users', function (params) {
    it('should respond a status 200 and the first user of moaks', function (done) {
      request
        .post(`/api/users`)
        .expect(201)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: usersMock[0],
            message: 'user was created',
          });
          err ? done(err) : done();
        });
    });
  });
  describe('PUT / users', function (params) {
    it('should respond a status 200', function (done) {
      request
        .put(`/api/users/1`)
        .send({})
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: usersMock[0],
            message: 'user was updated',
          });
          err ? done(err) : done();
        });
    });
  });

  describe('DELETE / users', function (params) {
    it('should respond a status 200', function (done) {
      request
        .delete(`/api/users/1`)
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: usersMock[0],
            message: 'user was deleted succesfully',
          });
          err ? done(err) : done();
        });
    });
  });
});
