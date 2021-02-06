const Joi = require('joi');

const lessonIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const lessonNameSchema = Joi.string().min(3);
const lessonCourseSchema = Joi.number();
const lessonDescriptionSchema = Joi.string();

const createLessonSchema = Joi.object({
  name: lessonNameSchema.required(),
  course: lessonCourseSchema.required(),
  description: lessonDescriptionSchema.required(),
});

const updateLessonSchema = Joi.object({
  name: lessonNameSchema,
  course: lessonCourseSchema,
  description: lessonDescriptionSchema,
});

module.exports = {
  lessonIdSchema,
  createLessonSchema,
  updateLessonSchema,
};
