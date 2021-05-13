const { response } = require('express');
const MongoLib = require('../lib/mongo');
const { ObjectId } = require('mongodb');

class UserCoursesService {
  constructor() {
    this.collection = 'user-courses';
    this.mongoDB = new MongoLib();
  }

  async getUserCoursesId({ user_id }) {
    const query = user_id && { user_id };
    const userCourses = await this.mongoDB.getAll(this.collection, query);
    return userCourses;
  }

  async getUserCourses({ user_id }) {
    const query = user_id && { user_id };
    const userCourses = await this.mongoDB.getAll(this.collection, query);
    return userCourses;
  }

  async createUserCourses(userCourses) {
    const createdUserCourses = await this.mongoDB.create(this.collection, userCourses);
    return createdUserCourses;
  }

  async deleteUserCourses(userCoursesId) {
    const deletedUserCourses = await this.mongoDB.delete(this.collection, userCoursesId);
    return deletedUserCourses;
  }
}

module.exports = UserCoursesService;
