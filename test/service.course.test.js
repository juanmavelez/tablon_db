const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub, getStub, updateStub, deleteStub } = require('../utils/mocks/mongoLib.mock');
const coursesMock = require('../utils/mocks/courses.mock');

describe('Test services - courses', function () {
  const CourseService = proxyquire('../services/course.service', {
    '../lib/mongo.js': MongoLibMock,
  });
  const courseService = new CourseService();

  describe('getcourses method is called', async function () {
    it('getAll MongoLib Method', async function () {
      await courseService.getCourses({});
      assert.deepStrictEqual(getAllStub.called, true);
    });
    it('should return an array of courses', async function () {
      const result = await courseService.getCourses({});
      const expected = coursesMock;
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('getcourse method is called', async function () {
    it('get call MongoLib Method', async function () {
      await courseService.getCourse({});
      assert.deepStrictEqual(getStub.called, true);
    });
    it('should return an course', async function () {
      const result = await courseService.getCourse(0);
      const expected = coursesMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('createCourse method is called', async function () {
    it('create call MongoLib Method', async function () {
      await courseService.createCourse({});
      assert.deepStrictEqual(getStub.called, true);
    });
    it('should return an course id', async function () {
      const result = await courseService.createCourse({});
      const expected = coursesMock[0].id;
      assert.deepStrictEqual(result, expected);
    });
  });
  describe('updatecourse method is called', async function () {
    it('update call MongoLib Method', async function () {
      await courseService.updateCourse({});
      assert.deepStrictEqual(updateStub.called, true);
    });
    it('should return an course', async function () {
      const result = await courseService.updateCourse({});
      const expected = coursesMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });
  describe('Delete method is called', async function () {
    it('delete call MongoLib Method', async function () {
      await courseService.deleteCourse({});
      assert.deepStrictEqual(deleteStub.called, true);
    });
    it('should return an course id', async function () {
      const result = await courseService.deleteCourse({});
      const expected = coursesMock[0].id;
      assert.deepStrictEqual(result, expected);
    });
  });
});
