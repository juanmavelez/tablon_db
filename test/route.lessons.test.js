const assert = require('assert');
const proxyquire = require('proxyquire');
const lessonsMock = require('../utils/mocks/lessons.mock');
const { LessonServiceMock } = require('../utils/mocks/lessonService.mock');

const testServer = require('../utils/testServer');

describe('En point Testing: routes - lesson', function () {
  const route = proxyquire('../routes/lesson.routes', {
    '../services/lesson.service': LessonServiceMock,
  });
  const request = testServer(route);

  describe('GET / lessons', function (params) {
    it('should respond with status 200', function (done) {
      request.get('/api/lessons').expect(200, done);
    });
    it('should respond with the list of lessons', function (done) {
      request
        .get('/api/lessons')
        .expect(200)
        .end((err, res) => {
          assert.deepStrictEqual(res.body, {
            data: lessonsMock,
            message: 'lessons were listed',
          });
          done();
        });
    });
    it('should bring one lesson', function () {
      request
        .get('/api/lessons/1')
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: lessonsMock[0],
            message: 'lesson was listed',
          });
        });
    });
  });

  describe('POST / lessons', function (params) {
    it('should respond a status 200 and the first lesson of moaks', function (done) {
      request
        .post(`/api/lessons`)
        .expect(201)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: lessonsMock[0],
            message: 'lesson was created',
          });
          err ? done(err) : done();
        });
    });
  });
  describe('PUT / lessons', function (params) {
    it('should respond a status 200', function (done) {
      request
        .put(`/api/lessons/1`)
        .send({})
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: lessonsMock[0],
            message: 'lesson was updated',
          });
          err ? done(err) : done();
        });
    });
  });

  describe('DELETE / lessons', function (params) {
    it('should respond a status 200', function (done) {
      request
        .delete(`/api/lessons/1`)
        .expect(200)
        .end(function (err, res) {
          assert.deepStrictEqual(res.body, {
            data: lessonsMock[0],
            message: 'lesson was deleted succesfully',
          });
          err ? done(err) : done();
        });
    });
  });
});
