const assert = require('assert');
const proxyquire = require('proxyquire');
const coursesMock = require('../utils/mocks/courses.mock');
const { CourseServiceMock } = require('../utils/mocks/courseService.mock');

const testServer = require('../utils/testServer');

describe('En point Testing: routes - course', function () {
  const route = proxyquire('../routes/course.routes', {
    '../services/course.service': CourseServiceMock,
  });
  const request = testServer(route);

  describe('GET / courses', function (params) {
    it('should respond with status 200', function (done) {
      request.get('/api/courses').expect(200, done);
    });
    it('should respond with the list of courses', function (done) {
      request
        .get('/api/courses')
        .expect(200)
        .end((err, res) => {
          assert.deepStrictEqual(res.body, {
            data: coursesMock,
            message: 'courses were listed',
          });
          done();
        });
    });
    it('should bring one course', function () {
      request
        .get('/api/courses/1')
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: coursesMock[0],
            message: 'course was listed',
          });
        });
    });
  });

  describe('POST / courses', function (params) {
    it('should respond a status 200 and the first course of moaks', function (done) {
      request
        .post(`/api/courses`)
        .expect(201)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: coursesMock[0],
            message: 'course was created',
          });
          err ? done(err) : done();
        });
    });
  });
  describe('PUT / courses', function (params) {
    it('should respond a status 200', function (done) {
      request
        .put(`/api/courses/1`)
        .send({})
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: coursesMock[0],
            message: 'course was updated',
          });
          err ? done(err) : done();
        });
    });
  });

  describe('DELETE / courses', function (params) {
    it('should respond a status 200', function (done) {
      request
        .delete(`/api/courses/1`)
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: coursesMock[0],
            message: 'course was deleted succesfully',
          });
          err ? done(err) : done();
        });
    });
  });
});
