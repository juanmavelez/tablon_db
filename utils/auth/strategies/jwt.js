const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');
const UserService = require('../../../services/user.service');
const { config } = require('../../../config');

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayLoad, callback) {
      const userServices = new UserService();
      try {
        const user = await userServices.getUser({ email: tokenPayLoad.email });
        if (!user) {
          return callback(boom.unauthorized('user or password invalid'), false);
        }
        delete user.password;
        callback(null, { ...user, scopes: tokenPayLoad.scopes });
      } catch (err) {
        return callback(err);
      }
    }
  )
);
