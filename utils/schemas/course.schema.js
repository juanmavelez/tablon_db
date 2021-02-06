const Joi = require('Joi');

const courseIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const courseNameSchema = Joi.string().max(80);
const courseTeacherSchema = Joi.number();
const courseClassesSchema = Joi.array().items(Joi.number());
const courseStudentsSchema = Joi.array().items(Joi.number());
const courseTagSchema = Joi.array().items(Joi.number());
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
