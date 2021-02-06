const assert = require('assert');
const proxyquire = require('proxyquire');
const userMock = require('../utils/mocks/users.mock');
const { UserServicesMocks } = require('../utils/mocks/userService.mock');

const testServer = require('./testServer');

describe('routes - user', function () {
  const route = proxyquire('../routes/users.routes', {
    '../services/user.service': UserServicesMocks,
  });
  const request = testServer(route);

  describe('GET / users', function (params) {
    it('should respond with status 200', function (done) {
      request.get('/api/users').expect(200, done);
    });
    it('should respond with the list of users', function (done) {
      request.get('/api/users').end((err, res) => {
        assert.deepEqual(res.body, {
          data: userMock,
          message: 'users were listed',
        });
        done();
      });
    });
  });
  describe('POST / users', function (params) {
    it('should respond a status 200', function (done) {
      request
        .post(`/api/users`)
        .send({
          name: 'Coffee - Hazelnut Cream',
          course: 141,
          description:
            'sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
        })
        .expect(200)
        .end(function (err, res) {
          err ? done(err) : done();
        });
    });
  });
});
