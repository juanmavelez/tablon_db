const { query } = require('express');
const MongoLib = require('../lib/mongo');

class lessonService {
  constructor() {
    this.collection = 'lessons';
    this.mongoDB = new MongoLib();
  }

  async getLessons({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const users = await this.mongoDB.getAll(this.collection, query);
    return users || [];
  }

  async getLesson({ lessonId }) {
    const lesson = await this.mongoDB.get(this.collection, lessonId);
    return lesson || {};
  }

  async createLesson({ lesson }) {
    const createdLessonId = await this.mongoDB.create(this.collection, lesson);
    return createdLessonId;
  }

  async updateLesson({ lessonId, lesson }) {
    const updatedLessonId = await this.mongoDB.update(this.collection, lessonId, lesson);
    return updatedLessonId;
  }

  async deleteLesson({ lessonId }) {
    const deletedLessonId = await this.mongoDB.delete(this.collection, lessonId);
    return deletedLessonId;
  }
}

module.exports = lessonService;
