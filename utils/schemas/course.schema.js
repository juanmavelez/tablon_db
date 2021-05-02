const Joi = require('Joi');
const { userIdSchema } = require('./user.schema');
const { tagNameSchema } = require('./tag.schema');

const lessonNameSchema = Joi.string();
const lessonDescriptionSchema = Joi.string();

const createLessonSchema = Joi.object({
  name: lessonNameSchema,
  description: lessonDescriptionSchema,
});

const courseIdSchema = Joi.string().regex(new RegExp('[0-9a-fA-F]{24}$'));
const courseNameSchema = Joi.string().max(80);
const courseLessonsSchema = Joi.array().items(createLessonSchema);
const courseStudentsSchema = Joi.array().items(userIdSchema);
const courseTagSchema = Joi.array().items(tagNameSchema);
const courseDescriptionSchema = Joi.string();

const createCourseSchema = Joi.object({
  name: courseNameSchema.required(),
  teacher: userIdSchema.required(),
  lessons: courseLessonsSchema.required(),
  tags: courseTagSchema,
  description: courseDescriptionSchema.required(),
});

const updateCourseSchema = Joi.object({
  name: courseNameSchema,
  teacher: userIdSchema,
  lessons: courseLessonsSchema,
  tags: courseTagSchema,
  description: courseDescriptionSchema,
});

module.exports = {
  courseIdSchema,
  createCourseSchema,
  updateCourseSchema,
};
