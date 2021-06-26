const express = require('express');
const passport = require('passport');

const UserCoursesService = require('../services/userCourses.service');
const CourseService = require('../services/course.service');
const UsersService = require('../services/user.service');
const queryCreator = require('../utils/queryCreator');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const { userCourseIdSchema, createUserCourseSchema } = require('../utils/schemas/userCourses.schema');
const { userIdSchema } = require('../utils/schemas/user.schema');
const { courseIdSchema } = require('../utils/schemas/course.schema');
const { query } = require('express');

function userCoursesApi(app) {
  const router = express.Router();

  app.use('/api/user-courses', router);
  userCoursesService = new UserCoursesService();
  courseService = new CourseService();
  usersService = new UsersService();

  router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-courses']),
    validationHandler({ user_id: userIdSchema } || { course_id: userIdSchema }, 'query'),

    async function (req, res, next) {
      try {
        const userCourses = await userCoursesService.getUserCourses(req.body);
        if (Object.keys(req.body)[0] === 'user_id') {
          // if body === user_id
          key = 'courses_id';
          if (Object.entries(userCourses).length === 0) {
            //if user had no courses
            res.status(200).json({
              data: userCourses,
              message: 'user courses listed',
            });
          } else {
            const queryCourses = queryCreator(userCourses, key);
            const response = await courseService.getCourses(queryCourses);
            res.status(200).json({
              data: response,
              message: 'user courses listed',
            });
          }
        } else {
          // if body ===course_id
          key = 'user_id';
          const courseUsers = await userCoursesService.getCourseUsers(req.body);
          if (Object.entries(courseUsers).length === 0) {
            res.status(200).json({
              data: courseUsers,
              message: 'user courses listed',
            });
          } else {
            const queryUsers = queryCreator(courseUsers, key);
            const response = await usersService.getUsers(queryUsers);
            res.status(200).json({
              data: response,
              message: 'user courses listed',
            });
          }
        }
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-courses']),
    validationHandler({ user_id: userIdSchema } || { course_id: courseIdSchema }, 'params'),
    async function (req, res, next) {
      const user_id = req.query;
      try {
        const userCourses = await userCoursesService.getUserCoursesId(req.query);
        res.status(200).json({
          data: userCourses,
          message: 'user courses id listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-courses']),
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
