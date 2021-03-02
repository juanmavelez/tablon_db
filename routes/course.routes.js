const express = require('express');
const passport = require('passport');
const CourseService = require('../services/course.service');
const { courseIdSchema, createCourseSchema, updateCourseSchema } = require('../utils/schemas/course.schema');

const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');
const validationHandler = require('../utils/middleware/validationHandler');

require('../utils/auth/strategies/jwt');

function courseApi(app) {
  const router = express.Router();
  app.use('/api/courses', router);
  courseService = new CourseService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:courses']),
    async function (req, res, next) {
      try {
        const { _id } = req.query;
        console.log('req param is ', req.params);
        console.log('query es ', req.query);
        console.log('tags are', { _id });
        const courses = await courseService.getCourses({ _id });
        res.status(200).json({
          data: courses,
          message: 'courses were listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:courseId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:courses']),
    validationHandler({ courseId: courseIdSchema }, 'params'),
    async function (req, res, next) {
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
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:courses']),
    validationHandler(createCourseSchema),
    async function (req, res, next) {
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
    }
  );

  router.put(
    '/:courseId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:courses']),
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
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:courses']),
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
