const MongoLib = require('../lib/mongo');
const CourseService = require('./course.service');
class UserCoursesServices {
  constructor() {
    this.collection = 'user-courses';
    this.mongoDB = new MongoLib();
  }

  async getUserCourses({ user_id }) {
    const query = user_id && { user_id };
    const userCoursesId = await this.mongoDB.getAll(this.collection, query);
    const courseService = new CourseService();
    const userCourses = userCoursesId.map((respone) => {
      console.log(courses_id);
      courseService.getCourse(respone.courses_id);
    });
    console.log(userCourses);
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
