// DEBUG=app:* node utils/scripts/seedCourses.js

const debug = require('debug')('app:scripts:courses');
const MongoLib = require('../../lib/mongo');
const usersMock = require('../mocks/courses.mock');

async function seedCourses() {
  try {
    const mongoDB = new MongoLib();

    const promises = usersMock.map(async (course) => {
      await mongoDB.create('courses', course);
    });

    await Promise.all(promises);
    debug(`${promises.length} courses have been created succesfully`);
    return process.exit(0);
  } catch (error) {
    debug(error);
    process.exit(1);
  }
}

seedCourses();
