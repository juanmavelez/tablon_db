const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const ApiKeyService = require('../services/apiKeys.service');
const UserService = require('../services/user.service');
const { config } = require('../config');
const { userIdSchema, createUserSchema } = require('../utils/schemas/user.schema');
const validationHandler = require('../utils/middleware/validationHandler');
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeyService = new ApiKeyService();
  const userService = new UserService();

  router.post('/sign-in', async function (req, res, next) {
    const { apiKeyToken } = req.body;
    if (!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
    }
    passport.authenticate('basic', function (error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized('invalid user or password, try again'));
        } else {
          req.login(user, { session: false }, async function (error) {
            if (error) {
              next(error);
            }
            const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });
            if (!apiKey) {
              next(boom.unauthorized('invalid user or password, try again'));
            }
            const { _id: id, name, email } = user;
            const payload = {
              sub: id,
              name,
              email,
              scopes: apiKey.scopes,
            };
            const token = jwt.sign(payload, config.authJwtSecret, {
              expiresIn: '120m',
            });
            return res.status(200).json({ token, user: { id, name, email } });
          });
        }
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post('/sign-up', validationHandler(createUserSchema), async function (req, res, next) {
    const { body: user } = req;
    try {
      const createdUserId = await userService.createUser({ user });
      res.status(201).json({
        data: createdUserId,
        message: 'user created',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = authApi;
