// DEBUG=app:* node utils/scripts/seedUserCourses.js

const debug = require('debug')('app:scripts:user-courses');
const MongoLib = require('../../lib/mongo');
const userCoursessMock = require('../mocks/userCourses.mock');

async function seedUserCourses() {
  try {
    const mongoDB = new MongoLib();
    const promises = userCoursessMock.map(async (userCourses) => {
      await mongoDB.create('user-courses', userCourses);
    });

    await Promise.all(promises);
    debug(`${promises.length} UserCourses have been created succesfully`);
    return process.exit(0);
  } catch (error) {
    debug(error);
    process.exit(1);
  }
}

seedUserCourses();
