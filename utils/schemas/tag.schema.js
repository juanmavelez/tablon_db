const Joi = require('Joi');
const tagIdSchema = Joi.string().regex(new RegExp('[0-9a-fA-F]{24}$'));
const tagTypeSchema = Joi.string().max(30);
const tagNameSchema = Joi.array().items(Joi.array().max(30));

const createtagSchema = Joi.object({
  type: tagTypeSchema.required(),
  name: tagNameSchema.required(),
});
const updatetagSchema = Joi.object({
  type: tagTypeSchema.required(),
  name: tagNameSchema.required(),
});

module.exports = {
  tagIdSchema,
  tagNameSchema,
  updatetagSchema,
};
