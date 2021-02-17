const config = require('../../config');
const usersMock = [
  {
    id: 'd642AVoE8w1BCK9R323yTl40',
    name: 'Marcellina',
    email: 'mdominichelli0@nytimes.com',
    password: config.defaultAdminPassword,
    isAdim: true,
  },
  {
    id: 'i51Mb420I58sT86f61807OE1',
    name: 'Janis',
    email: 'jgilburt1@who.int',
    password: config.defaultUserPassword,
    isAdim: true,
  },
  {
    id: 'vxagHD5nC2S7bc0i80Vg28M3',
    name: 'Griz',
    email: 'gmacgettigen2@pagesperso-orange.fr',
    password: config.defaultUserPassword,
    isAdim: false,
  },
  {
    id: 'bUNS1ZG002F885I4kN73052B',
    name: 'Falito',
    email: 'fstickens3@topsy.com',
    password: config.defaultUserPassword,
    isAdim: false,
  },
];
module.exports = usersMock;
