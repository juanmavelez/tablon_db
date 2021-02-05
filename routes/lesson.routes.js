const express = require('express');
const LessonService = require('../services/lesson.service');

function lessonApi(app) {
  const router = express.Router();
  app.use('/api/lessons', router);
  lessonService = new LessonService();

  router.get('/', async function (req, res, next) {
    try {
      const { tags } = req.query;
      const lessons = await lessonService.getLessons({ tags });
      res.status(200).json({
        data: lessons,
        message: 'lessons were listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:lessonId', async function (req, res, next) {
    try {
      const { lessonId } = req.params;
      const lesson = await lessonService.getLesson({ lessonId });
      res.status(200).json({
        data: lessons,
        message: 'lesson was listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const { body: lesson } = req;
      const createdLesson = await lessonService.createLesson({ lesson });
      res.status(200).json({
        data: createdLesson,
        message: 'lesson was created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:lessonId', async function (req, res, next) {
    try {
      const { body: lesson } = req;
      const { lessonId } = req.params;
      const updatedLessonId = await lessonService.updatedLessonId({ lessonId, lesson });
      res.status(200).json({
        data: updatedLessonId,
        message: 'lesson was updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:lessonsId', async function (req, res, next) {
    try {
      const { lessonsId } = req.params;
      const deletedlessons = await lessonService.delete({ lessonsId });
      res.status(200).json({
        data: deletedlessons,
        message: 'lessonss were listed',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = lessonApi;
