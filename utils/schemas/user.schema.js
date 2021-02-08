const Joi = require('Joi');

const userIdSchema = Joi.string().max(24);
const userUsernameSchema = Joi.string().max(80);
const userEmailSchema = Joi.string().email();
const userInterestSchema = Joi.array().items(Joi.number());
const userCoursesSchema = Joi.array().items(Joi.number());

const createUserSchema = Joi.object({
  username: userUsernameSchema.required(),
  email: userEmailSchema.required(),
  interest: userInterestSchema.required(),
  courses: userCoursesSchema.required(),
});

const updateUserSchema = Joi.object({
  username: userUsernameSchema,
  email: userEmailSchema,
  interest: userInterestSchema,
  courses: userCoursesSchema,
});

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
};
