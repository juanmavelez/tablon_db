const express = require('express');
const usersMock = require('../utils/mocks/users.mock');
const UserService = require('../services/user.service');

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

  router.get('/:userId', async function (req, res, next) {
    try {
      const { userId } = req.params;
      const user = await userService.getUser({ userId });
      res.status(200).json({
        data: user,
        message: 'user was listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const { body: user } = req;
      const createdUser = await userService.createUser({ user });
      res.status(200).json({
        data: createdUser,
        message: 'users were created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:userId', async function (req, res, next) {
    try {
      const { body: user } = req;
      const { userId } = req.params;
      const updatedUserId = await userService.updatedUserId({ userId, user });
      res.status(200).json({
        data: updatedUserId,
        message: 'user was updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:userId', async function (req, res, next) {
    try {
      const { userId } = req.params;
      const deletedUser = await userService.delete({ userId });
      res.status(200).json({
        data: deletedUser,
        message: 'users were listed',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = userApi;
