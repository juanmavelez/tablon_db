const { query } = require('express');
const MongoLib = require('../lib/mongo');

class TagService {
  constructor() {
    this.collection = 'search';
    this.mongoDB = new MongoLib();
  }

  async getTags({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const tags = await this.mongoDB.getAll(this.collection, query);
    return tags || [];
  }

  async getTag({ tagId }) {
    const tag = await this.mongoDB.get(this.collection, tagId);
    return tag || {};
  }

  async createTag({ tag }) {
    const createdTagId = await this.mongoDB.create(this.collection, tag);
    return createdTagId;
  }

  async updateTag({ tagId, tag }) {
    const updatetagId = await this.mongoDB.update(this.collection, tagId, tag);
    return updatetagId;
  }

  async deleteTag({ tagId }) {
    const deletedTagId = await this.mongoDB.delete(this.collection, tagId);
    return deletedTagId;
  }
}

module.exports = TagService;
