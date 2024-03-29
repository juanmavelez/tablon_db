const { response } = require('express');
const MongoLib = require('../lib/mongo');
const { ObjectId } = require('mongodb');

class UserCoursesService {
  constructor() {
    this.collection = 'user-courses';
    this.mongoDB = new MongoLib();
  }

  async getUserCoursesId(query) {
    const userCourses = await this.mongoDB.getAll(this.collection, query);
    return userCourses || [];
  }

  async getCourseUsers({ courses_id }) {
    const query = courses_id && { courses_id };
    const courseUsers = await this.mongoDB.getAll(this.collection, query);
    return courseUsers || [];
  }

  async getUserCourses(query) {
    const userCourses = await this.mongoDB.getAll(this.collection, query);
    return userCourses;
  }

  async createUserCourses(userCourses) {
    console.log('userCourse is', userCourses);
    const createdUserCourses = await this.mongoDB.create(this.collection, userCourses);
    console.log(this.createdUserCourses);
    return createdUserCourses;
  }

  async deleteUserCourses(userCoursesId) {
    const deletedUserCourses = await this.mongoDB.delete(this.collection, userCoursesId);
    return deletedUserCourses;
  }
}

module.exports = UserCoursesService;
