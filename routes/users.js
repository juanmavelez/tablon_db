const express = require('express');
const { userMock } = require('../utils/mocks/user.mock');

function userApi(app) {
  const router = express.Router();
  app.use('/api/users', router);
  router.get('/', async function (req, res, next) {
    try {
      const users = await Promise.resolve(userMock);
      res.status(200).json({
        data: users,
        message: 'users were listed',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = userApi;
