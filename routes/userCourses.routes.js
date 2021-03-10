const express = require('express');
const passport = require('passport');

const UserCoursesService = require('../services/userCourses.service');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const { userCourseIdSchema, createUserCourseSchema } = require('../utils/schemas/userCourses.schema');
const { userIdSchema } = require('../utils/schemas/user.schema');
const { courseIdSchema } = require('../utils/schemas/course.schema');

function userCoursesApi(app) {
  const router = express.Router();

  app.use('/api/user-courses', router);
  userCoursesService = new UserCoursesService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-courses']),
    validationHandler({ user_id: userIdSchema }, 'params'),
    async function (req, res, next) {
      const user_id = req.query;
      try {
        const userCourses = await userCoursesService.getUserCoursesId(user_id);
        res.status(200).json({
          data: userCourses,
          message: 'user courses id listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:userId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-courses']),
    validationHandler({ user_id: userIdSchema }, 'query'),
    async function (req, res, next) {
      const { user_id } = req.query;
      try {
        const userCourses = await userCoursesService.getUserCourses({ user_id });
        res.status(200).json({
          data: userCourses,
          message: 'user courses listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:usercourses']),
    validationHandler(createUserCourseSchema),
    async function (req, res, next) {
      try {
        const { body: userCourse } = req;
        const createdUserCourses = await userCoursesService.createUserCourses(userCourse);
        res.status(201).json({
          data: createdUserCourses,
          message: 'user course created',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:userCourseId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-courses']),
    validationHandler({ userCourseId: courseIdSchema }, 'params'),
    async function (req, res, next) {
      try {
        const { userCourseId } = req.params;
        const deledUserCourses = await userCoursesService.deleteUserCourses(userCourseId);
        res.status(200).json({
          data: deledUserCourses,
          message: 'user course deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = userCoursesApi;
