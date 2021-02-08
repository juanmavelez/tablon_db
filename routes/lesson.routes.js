const express = require('express');
const LessonService = require('../services/lesson.service');
const validationHandler = require('../utils/middleware/validationHandler');
const { lessonIdSchema, createLessonSchema, updateLessonSchema } = require('../utils/schemas/lesson.schema');

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

  router.get('/:lessonId', validationHandler({ lessonId: lessonIdSchema }, 'params'), async function (req, res, next) {
    try {
      const { lessonId } = req.params;
      const lesson = await lessonService.getLesson({ lessonId });
      res.status(200).json({
        data: lesson,
        message: 'lesson was listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', validationHandler(createLessonSchema), async function (req, res, next) {
    try {
      const { body: lesson } = req;
      const createdLesson = await lessonService.createLesson({ lesson });
      res.status(201).json({
        data: createdLesson,
        message: 'lesson was created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:lessonId',
    validationHandler({ lessonId: lessonIdSchema }, 'params'),
    validationHandler(updateLessonSchema),
    async function (req, res, next) {
      try {
        const { body: lesson } = req;
        const { lessonId } = req.params;
        const updatedLessonId = await lessonService.updateLesson({ lessonId, lesson });
        res.status(200).json({
          data: updatedLessonId,
          message: 'lesson was updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:lessonId',
    validationHandler({ lessonId: lessonIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { lessonId } = req.params;
        const deletedlessons = await lessonService.deleteLesson({ lessonId });
        res.status(200).json({
          data: deletedlessons,
          message: 'lesson was deleted succesfully',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = lessonApi;
