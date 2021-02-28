const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
  return function (req, res, next) {
    if (!req || !req.user || !req.user.scopes) {
      next(boom.unauthorized('Missing scopes'));
    } else {
      const hasAccess = allowedScopes
        .map((allowedScopes) => req.user.scopes.includes(allowedScopes))
        .find((allowed) => Boolean(allowed));
      hasAccess ? next() : next(boom.unauthorized('Missing scopes'));
    }
  };
}

module.exports = scopesValidationHandler;
