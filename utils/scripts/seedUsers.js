// DEBUG=app:* node utils/scripts/seedUsers.js
const debug = require('debug')('app:scripts:users');
const MongoLib = require('../../lib/mongo');
const usersMock = require('../mocks/users.mock');

async function seedMovies() {
  try {
    const mongoDB = new MongoLib();

    const promises = usersMock.map(async (user) => {
      await mongoDB.create('users', user);
    });

    await Promise.all(promises);
    debug(`${promises.length} users have been created succesfully`);
    return process.exit(0);
  } catch (error) {
    debug(error);
    process.exit(1);
  }
}

seedMovies();
