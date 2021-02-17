const express = require('express');
const UserCoursesService = require('../services/userCourses.service');
const validationHandler = require('../utils/middleware/validationHandler');

const { userCourseIdSchema, createUserCourseSchema } = require('../utils/schemas/userCourses.schema');
const { userIdSchema } = require('../utils/schemas/user.schema');
const { courseIdSchema } = require('../utils/schemas/course.schema');

function userCoursesApi(app) {
  const router = express.Router();
  app.use('/api/user-courses', router);
  userCoursesService = new UserCoursesService();

  router.get('/', validationHandler({ userId: userIdSchema }, 'query'), async function (req, res, next) {
    const { userId } = req.query;
    try {
      const userCourses = await userCoursesService.getUserCourses({ userId });
      res.status(200).json({
        data: userCourses,
        message: 'user courses listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', validationHandler(createUserCourseSchema), async function (req, res, next) {
    try {
      const { body: userCourse } = req;
      const createdUserCourses = await userCoursesService.createUserCourses({ userCourse });
      res.status(201).json({
        data: createdUserCourses,
        message: 'user course created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete(
    '/:userCoursesId',
    validationHandler(({ userCoursesId: courseIdSchema }, 'query')),
    async function (req, res, next) {
      try {
        const { userCoursesId } = req.params;
        const deledUserCourses = await userCoursesService.deleteUserCourses({ userCoursesId });
        res.status(200).json({
          data: deledUserCourses,
          message: 'user course deleted€',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = userCoursesApi;
