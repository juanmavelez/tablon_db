const Joi = require('Joi');

const lessonNameSchema = Joi.string();
const lessonDescriptionSchema = Joi.string();
const createLessonSchema = Joi.object({
  name: lessonNameSchema,
  description: lessonDescriptionSchema,
});

const courseIdSchema = Joi.string().max(24);
const courseNameSchema = Joi.string().max(80);
const courseTeacherSchema = Joi.number();
const courseClassesSchema = Joi.array().items(createLessonSchema);
const courseStudentsSchema = Joi.array().items(Joi.number());
const courseTagSchema = Joi.array().items(Joi.string());
const courseDescriptionSchema = Joi.string();

const createCourseSchema = Joi.object({
  name: courseNameSchema.required(),
  teacher: courseTeacherSchema.required(),
  classes: courseClassesSchema.required(),
  tags: courseTagSchema.required(),
  students: courseStudentsSchema.required(),
  description: courseDescriptionSchema.required(),
});

const updateCourseSchema = Joi.object({
  name: courseNameSchema,
  teacher: courseTeacherSchema,
  classes: courseClassesSchema,
  tags: courseTagSchema,
  students: courseStudentsSchema,
  description: courseDescriptionSchema,
});

module.exports = {
  courseIdSchema,
  createCourseSchema,
  updateCourseSchema,
};
