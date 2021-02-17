// DEBUG=app:* node utils/scripts/seedMovies.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:users');
const MongoLib = require('../../lib/mongo');
const usersMock = require('../mocks/courses.mock');

async function seedMovies() {
  try {
    const mongoDB = new MongoLib();

    const promises = usersMock.map(async (course) => {
      await mongoDB.create('courses', course);
    });

    await Promise.all(promises);
    debug(`${promises.length} movies have been created succesfully`);
    return process.exit(0);
  } catch (error) {
    debug(error);
    process.exit(1);
  }
}

seedMovies();
