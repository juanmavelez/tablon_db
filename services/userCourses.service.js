const MongoLib = require('../lib/mongo');

class UserCoursesServices {
  constructor() {
    this.collection = 'user-courses';
    this.mongoDB = new MongoLib();
  }

  async getUserCourses({ userId }) {
    const query = userId && { userId };
    const userCourses = await this.mongoDB.getAll(this.collection, query);
    return userCourses || [];
  }

  async createUserCourses({ userCourses }) {
    const createdUserCourses = await this.mongoDB.create(this.collection, userCourses);
    return createdUserCourses;
  }
  async deleteUserCourses({ userCoursesId }) {
    const deletedUserCourses = await this.mongoDB.delete(this.collection, userCoursesId);
    return deletedUserCourses;
  }
}

module.exports = UserCoursesServices;
