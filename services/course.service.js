const { query } = require('express');
const { ObjectId } = require('mongodb');
const MongoLib = require('../lib/mongo');

class CourseService {
  constructor() {
    this.collection = 'courses';
    this.mongoDB = new MongoLib();
  }

  async getCourses({ _id }) {
    const query = _id && { _id: { $in: _id } };
    const courses = await this.mongoDB.getAll(this.collection, query);
    return courses || [];
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
