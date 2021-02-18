// DEBUG=app:* node utils/scripts/seedUsers.js
const debug = require('debug')('app:scripts:users');
const MongoLib = require('../../lib/mongo');
const usersMock = require('../mocks/users.mock');
const bcrypt = require('bcrypt');

async function createUser(mongoDB, user) {
  const { name, email, password, isAdmin } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await mongoDB.create('users', {
    name,
    email,
    password: hashedPassword,
    isAdmin: Boolean(isAdmin),
  });
  return userId;
}

async function seedUsers() {
  try {
    const mongoDB = new MongoLib();

    const promises = usersMock.map(async (user) => {
      const userId = await createUser(mongoDB, user);
      debug('User created with an id:', userId);
    });

    await Promise.all(promises);
    debug(`${promises.length} users have been created succesfully`);
    return process.exit(0);
  } catch (error) {
    debug(error);
    process.exit(1);
  }
}

seedUsers();
