const Joi = require('Joi');
const { userIdSchema } = require('./user.schema');
const { courseIdSchema } = require('./course.schema');

const userCourseIdSchema = Joi.string().regex(/^[0-9a-f-A-F]{24}/);
const userCourseCourses = courseIdSchema;

const createUserCourseSchema = Joi.object({
  userId: userIdSchema.required(),
  courses: userCourseCourses.required(),
});

module.exports = { userCourseIdSchema, createUserCourseSchema };
