const express = require('express');
const coursesMock = require('../utils/mocks/courses.mock');
const CourseService = require('../services/course.service');

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

  router.get('/:courseId', async function (req, res, next) {
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

  router.post('/', async function (req, res, next) {
    try {
      const { body: course } = req;
      const createdCourse = await courseService.createCourse({ course });
      res.status(200).json({
        data: createdCourse,
        message: 'course was created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:courseId', async function (req, res, next) {
    try {
      const { body: course } = req;
      const { courseId } = req.params;
      const updatedCourseId = await courseService.updatedCourseId({ courseId, course });
      res.status(200).json({
        data: updatedCourseId,
        message: 'course was updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:courseId', async function (req, res, next) {
    try {
      const { courseId } = req.params;
      const deletedCourse = await courseService.delete({ courseId });
      res.status(200).json({
        data: deletedCourse,
        message: 'courses were listed',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = courseApi;
