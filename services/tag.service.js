const { query } = require('express');
const MongoLib = require('../lib/mongo');

class TagService {
  constructor() {
    this.collection = 'tag';
    this.mongoDB = new MongoLib();
  }
  async getTags({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const tagsResponse = await this.mongoDB.getAll(this.collection, query);
    console.log(tagsResponse);
    return tagsResponse || [];
  }
  async updateTag({ tagId, tag }) {
    const updatetagId = await this.mongoDB.update(this.collection, tagId, tag);
    return updatetagId;
  }
}

module.exports = TagService;
