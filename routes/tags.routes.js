const express = require('express');
const TagService = require('../services/tag.service');
const validationHandler = require('../utils/middleware/validationHandler');
const { tagIdSchema, updatetagSchema } = require('../utils/schemas/tag.schema');

function tagApi(app) {
  const router = express.Router();
  app.use('/api/tags', router);
  tagService = new TagService();

  router.get('/', async function (req, res, next) {
    try {
      const { tags } = req.query;
      const allTags = await tagService.getTags({ tags });
      res.status(200).json({
        data: allTags,
        message: 'tags were listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:tagId', validationHandler(updatetagSchema), async function (req, res, next) {
    try {
      const { body: tag } = req;
      const { tagId } = req.params;
      const updatedtagId = await tagService.updateTag({ tagId, tag });
      res.status(200).json({
        data: updatedtagId,
        message: 'tag was updated',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = tagApi;
