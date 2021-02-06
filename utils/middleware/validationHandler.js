const boom = require('@hapi/boom');
const joi = require('joi');

const validate = (data, schema) => {
  schema = joi.isSchema(schema) ? schema : joi.object(schema);
  const { error } = schema.validate(data);
  return error;
};

function validationHandler(schema, data = 'body') {
  return function (req, res, next) {
    const error = validate(req[data], schema);
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;
