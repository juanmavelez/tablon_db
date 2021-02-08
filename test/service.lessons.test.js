const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub, getStub, updateStub, deleteStub } = require('../utils/mocks/mongoLib.mock');
const lessonsMock = require('../utils/mocks/lessons.mock');

describe('Test services - lessons', function () {
  const LessonService = proxyquire('../services/lesson.service', {
    '../lib/mongo.js': MongoLibMock,
  });
  const lessonService = new LessonService();

  describe('getlessons method is called', async function () {
    it('getAll MongoLib Method', async function () {
      await lessonService.getLessons({});
      assert.deepStrictEqual(getAllStub.called, true);
    });
    it('should return an array of lessons', async function () {
      const result = await lessonService.getLessons({});
      const expected = lessonsMock;
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('getlesson method is called', async function () {
    it('get call MongoLib Method', async function () {
      await lessonService.getLesson({});
      assert.deepStrictEqual(getStub.called, true);
    });
    it('should return an lesson', async function () {
      const result = await lessonService.getLesson(0);
      const expected = lessonsMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('createlesson method is called', async function () {
    it('create call MongoLib Method', async function () {
      await lessonService.createLesson({});
      assert.deepStrictEqual(getStub.called, true);
    });
    it('should return an lesson id', async function () {
      const result = await lessonService.createLesson({});
      const expected = lessonsMock[0].id;
      assert.deepStrictEqual(result, expected);
    });
  });
  describe('updatelesson method is called', async function () {
    it('update call MongoLib Method', async function () {
      await lessonService.updateLesson({});
      assert.deepStrictEqual(updateStub.called, true);
    });
    it('should return an lesson', async function () {
      const result = await lessonService.updateLesson({});
      const expected = lessonsMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });
  describe('Delete method is called', async function () {
    it('delete call MongoLib Method', async function () {
      await lessonService.deleteLesson({});
      assert.deepStrictEqual(deleteStub.called, true);
    });
    it('should return an lesson id', async function () {
      const result = await lessonService.deleteLesson({});
      const expected = lessonsMock[0].id;
      assert.deepStrictEqual(result, expected);
    });
  });
});
