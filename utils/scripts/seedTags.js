// DEBUG=app:* node utils/scripts/seedTags.js

const crypto = require('crypto');
const debug = require('debug')('app:scripts:tags');
const MongoLib = require('../../lib/mongo');

const tags = [
  {
    type: 'frontend',
    lenguages: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['Angular', 'React', 'Vue', 'Svelte'],
    Preprocessors: ['Less', 'Sylus', 'Sass'],
  },
  {
    type: 'backend',
    languages: ['NodeJS', 'Python', 'Golang', 'Ruby', 'Java', 'C++'],
    frameworks: ['Django', 'Laravel', 'Rails', 'Express', 'Spring'],
  },
  {
    type: 'infraestructure',
    names: ['Google Clound', 'Digital Ocean', 'Amazon Web Services', 'Heroku', 'Azure'],
  },
];

async function seedTags() {
  try {
    const mongoDB = new MongoLib();

    const promises = tags.map(async (tag) => {
      await mongoDB.create('tag', tag);
    });

    await Promise.all(promises);
    debug(`${promises.length} Tags have been succesfully created`);
    return process.exit(0);
  } catch (error) {
    debug(error);
    process.exit(1);
  }
}

seedTags();
