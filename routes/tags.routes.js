const express = require('express');
const tagService = require('../services/tag.service');
const validationHandler = require('../utils/middleware/validationHandler');
const { tagIdSchema, createtagSchema, updatetagSchema } = require('../utils/schemas/tag.schema');

function tagApi(app) {
  const router = express.Router();
  app.use('/api/search', router);
  tagService = new tagService();

  router.get('/', async function (req, res, next) {
    try {
      const { tags } = req.query;
      const tags = await tagService.getTags({ tags });
      res.status(200).json({
        data: tags,
        message: 'tags were listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:tagId', validationHandler({ tagId: tagIdSchema }, 'params'), async function (req, res, next) {
    try {
      const { tagId } = req.params;
      console.log(tagId);
      const tag = await tagService.getTag({ tagId });
      res.status(200).json({
        data: tag,
        message: 'tag was listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', validationHandler(createtagSchema), async function (req, res, next) {
    try {
      const { body: tag } = req;
      const createdTag = await tagService.createTag({ tag });
      res.status(201).json({
        data: createdTag,
        message: 'tag was created',
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

  router.delete('/:tagId', validationHandler({ tagId: tagIdSchema }, 'params'), async function (req, res, next) {
    try {
      const { tagId } = req.params;
      const deletedtag = await tagService.deleteTag({ tagId });
      res.status(200).json({
        data: deletedtag,
        message: 'tag was deleted succesfully',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = tagApi;
