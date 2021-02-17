const Joi = require('Joi');
const tagsIdSchema = Joi.string().regex(/^[0-9a-f-A-F]{24}/);
const tagsNameSchema = Joi.string().max(80);

const createtagsSchema = Joi.object({
  name: tagsNameSchema.required(),
});
const updatetagsSchema = Joi.object({
  name: tagsNameSchema,
});

module.exports = {
  tagsIdSchema,
  createtagsSchema,
  updatetagsSchema,
};
