// DEBUG=app:* node utils/scripts/seedApiKeys.js

const crypto = require('crypto');
const debug = require('debug')('app:scripts:api-keys');
const MongoLib = require('../../lib/mongo');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:courses',
  'create:courses',
  'update:courses',
  'delete:courses',
  'read:user-courses',
  'create:user-courses',
  'delete:user-courses',
];

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:courses',
  'read:user-courses',
  'create:user-courses',
  'delete:user-courses',
];

const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes,
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes,
  },
];

function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

async function seedApiKeys() {
  try {
    const mongoDB = new MongoLib();

    const promises = apiKeys.map(async (apiKey) => {
      await mongoDB.create('api-keys', apiKey);
    });

    await Promise.all(promises);
    debug(`${promises.length} api keys have been created succesfully`);
    return process.exit(0);
  } catch (error) {
    debug(error);
    process.exit(1);
  }
}

seedApiKeys();
