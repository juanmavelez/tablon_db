const { query } = require('express');
const MongoLib = require('../lib/mongo');

class CourseService {
  constructor() {
    this.collection = 'courses';
    this.mongoDB = new MongoLib();
  }

  async getCourses({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const users = await this.mongoDB.getAll(this.collection, query);
    return users || [];
  }

  async getCourse({ courseId }) {
    const course = await this.mongoDB.get(this.collection, courseId);
    return course || {};
  }

  async createCourse({ course }) {
    const createdCourseId = await this.mongoDB.create(this.collection, course);
    return createdCourseId;
  }

  async updateCourse({ courseId, course }) {
    const updatedCourseId = await this.mongoDB.update(this.collection, courseId, course);
    return updatedCourseId;
  }

  async deleteCourse({ courseId }) {
    const deletedCourseId = await this.mongoDB.delete(this.collection, courseId);
    return deletedCourseId;
  }
}

module.exports = CourseService;
