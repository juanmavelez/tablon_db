const usersMock = require('./users.mock');

class UserServicesMocks {
  async getUsers() {
    return Promise.resolve(usersMock);
  }

  async getUser() {
    return Promise.resolve(usersMock.filter((user) => user.tags.includes(tag)));
  }

  async createUser() {
    return Promise.resolve(usersMock[0]);
  }
}

module.exports = {
  UserServicesMocks,
};
