const Joi = require('Joi');
const { tagNameSchema } = require('./tag.schema');

const userIdSchema = Joi.string().regex(/^[0-9a-f-A-F]{24}/);
const userNameSchema = Joi.string().max(80);
const userEmailSchema = Joi.string().email();
const userPassword = Joi.string();
const userTags = Joi.array().items(tagNameSchema);
const isAdim = Joi.boolean();

const userInterestSchema = Joi.array().items(Joi.string());
const userCoursesSchema = Joi.array().items(Joi.number());

const createUserSchema = Joi.object({
  name: userNameSchema.required(),
  email: userEmailSchema.required(),
  password: userPassword.required(),
  tags: userTags,
});

const updateUserSchema = Joi.object({
  name: userNameSchema,
  email: userEmailSchema,
  password: userPassword,
  tags: userTags,
});

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
};
