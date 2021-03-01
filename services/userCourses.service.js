const { response } = require('express');
const MongoLib = require('../lib/mongo');
const CourseService = require('./course.service');
const { ObjectId } = require('mongodb');

class UserCoursesServices {
  constructor() {
    this.collection = 'user-courses';
    this.mongoDB = new MongoLib();
  }

  async getUserCourses({ user_id }) {
    const query = user_id && { user_id };
    const userCourses = await this.mongoDB.getAll(this.collection, query);
    const queryCourses = queryCreator(userCourses, 'courses_id');

    const courses = new CourseService();
    const coursesResponse = await courses.getCourses(queryCourses);
    return coursesResponse;
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

/**
 * queryCreator creates a query, whith a given array and the params from it.
 * in the proyect. userCourses has from response an array with the given object
 * {
 *  _id:
 *  user_id:
 *  courses_id:
 * }
 * this function creates an array wich contains only the courses id or the users_id.
 * @param itemsList: array of objects from the response of userCourses
 * @param item: param from the elements of the array. normal values: user_id || courses_id
 * @response ['id1','id2','id3'] || []
 */

const queryCreator = (itemsList, item) => {
  let query = [];
  if (itemsList[0][item]) {
    for (let i = 0; i < itemsList.length; i++) {
      query[i] = ObjectId(itemsList[i][item]);
    }
  }
  return query;
};

module.exports = UserCoursesServices;
