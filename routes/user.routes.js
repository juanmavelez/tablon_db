const express = require('express');
const UserService = require('../services/user.service');
const validationHandler = require('../utils/middleware/validationHandler');
const { userIdSchema, createUserSchema, updateUserSchema } = require('../utils/schemas/user.schema');

function userApi(app) {
  const router = express.Router();
  app.use('/api/users', router);
  userService = new UserService();

  router.get('/', async function (req, res, next) {
    try {
      const { tags } = req.query;
      const users = await userService.getUsers({ tags });
      res.status(200).json({
        data: users,
        message: 'users were listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:userId', validationHandler({ userId: userIdSchema }, 'params'), async function (req, res, next) {
    try {
      const { userId } = req.params;
      console.log(userId);
      const user = await userService.getUser({ userId });
      res.status(200).json({
        data: user,
        message: 'user was listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', validationHandler(createUserSchema), async function (req, res, next) {
    try {
      const { body: user } = req;
      const createdUser = await userService.createUser({ user });
      res.status(201).json({
        data: createdUser,
        message: 'user was created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:userId', validationHandler(updateUserSchema), async function (req, res, next) {
    try {
      const { body: user } = req;
      const { userId } = req.params;
      const updatedUserId = await userService.updateUser({ userId, user });
      res.status(200).json({
        data: updatedUserId,
        message: 'user was updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:userId', validationHandler({ userId: userIdSchema }, 'params'), async function (req, res, next) {
    try {
      const { userId } = req.params;
      const deletedUser = await userService.deleteUser({ userId });
      res.status(200).json({
        data: deletedUser,
        message: 'user was deleted succesfully',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = userApi;
