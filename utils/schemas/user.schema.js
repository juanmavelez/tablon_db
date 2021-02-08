const Joi = require('Joi');

const userIdSchema = Joi.string().max(24);
const userNameSchema = Joi.string().max(80);
const userSurnameSchema = Joi.string().max(80);
const userEmailSchema = Joi.string().email();
const userInterestSchema = Joi.array().items(Joi.string());
const userCoursesSchema = Joi.array().items(Joi.number());

const createUserSchema = Joi.object({
  name: userNameSchema.required(),
  surname: userSurnameSchema.required(),
  email: userEmailSchema.required(),
  interest: userInterestSchema.required(),
  courses: userCoursesSchema.required(),
});

const updateUserSchema = Joi.object({
  name: userNameSchema,
  surname: userSurnameSchema,
  email: userEmailSchema,
  interest: userInterestSchema,
  courses: userCoursesSchema,
});

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
};
