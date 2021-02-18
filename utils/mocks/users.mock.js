const { config } = require('../../config');
const usersMock = [
  {
    name: 'Marcellina',
    email: 'mdominichelli0@nytimes.com',
    password: config.defaultAdminPassword,
    isAdim: true,
  },
  {
    name: 'Janis',
    email: 'jgilburt1@who.int',
    password: config.defaultAdminPassword,
    isAdim: true,
  },
  {
    name: 'Griz',
    email: 'gmacgettigen2@pagesperso-orange.fr',
    password: config.defaultUserPassword,
    isAdim: false,
  },
  {
    name: 'Falito',
    email: 'fstickens3@topsy.com',
    password: config.defaultUserPassword,
    isAdim: false,
  },
];
module.exports = usersMock;
