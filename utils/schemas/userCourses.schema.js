const Joi = require('Joi');
const { userIdSchema } = require('./user.schema');
const { courseIdSchema } = require('./course.schema');

const userCourseIdSchema = Joi.string().regex(/^[0-9a-f-A-F]{24}/);

const createUserCourseSchema = Joi.object({
  user_id: userIdSchema.required(),
  courses: Joi.array().items(courseIdSchema),
});

const updateUserCourseSchema = Joi.object({
  user_id: userIdSchema.required(),
  courses: Joi.array().items(courseIdSchema),
});

module.exports = { userCourseIdSchema, createUserCourseSchema };
