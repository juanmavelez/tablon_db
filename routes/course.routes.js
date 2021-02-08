const express = require('express');
const CourseService = require('../services/course.service');
const validationHandler = require('../utils/middleware/validationHandler');
const { courseIdSchema, createCourseSchema, updateCourseSchema } = require('../utils/schemas/course.schema');

function courseApi(app) {
  const router = express.Router();
  app.use('/api/courses', router);
  courseService = new CourseService();

  router.get('/', async function (req, res, next) {
    try {
      const { tags } = req.query;
      const courses = await courseService.getCourses({ tags });
      res.status(200).json({
        data: courses,
        message: 'courses were listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:courseId', validationHandler({ courseId: courseIdSchema }, 'params'), async function (req, res, next) {
    try {
      const { courseId } = req.params;
      const course = await courseService.getCourse({ courseId });
      res.status(200).json({
        data: course,
        message: 'course was listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', validationHandler(createCourseSchema), async function (req, res, next) {
    try {
      const { body: course } = req;
      const createdCourse = await courseService.createCourse({ course });
      res.status(201).json({
        data: createdCourse,
        message: 'course was created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:courseId',
    validationHandler({ courseId: courseIdSchema }, 'params'),
    validationHandler(updateCourseSchema),
    async function (req, res, next) {
      try {
        const { body: course } = req;
        const { courseId } = req.params;
        const updatedCourseId = await courseService.updateCourse({ courseId, course });
        res.status(200).json({
          data: updatedCourseId,
          message: 'course was updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:courseId',
    validationHandler({ courseId: courseIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { courseId } = req.params;
        const deletedCourse = await courseService.deleteCourse({ courseId });
        res.status(200).json({
          data: deletedCourse,
          message: 'course was deleted succesfully',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = courseApi;
