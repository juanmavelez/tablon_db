const usersMock = require('../mocks/users.mock');

class UserServiceMock {
  async getUsers() {
    return Promise.resolve(usersMock);
  }
  async getUser(id) {
    return Promise.resolve(usersMock[0]);
  }
  async createUser() {
    return Promise.resolve(usersMock[0]);
  }
  async updateUser() {
    return Promise.resolve(usersMock[0]);
  }
  async deleteUser() {
    return Promise.resolve(usersMock[0]);
  }
}

function filteredUsersMock(tags) {
  return usersMock.filter((user) => user.tags === tags);
}

module.exports = {
  UserServiceMock,
  filteredUsersMock,
};
