const { userMock } = require('../utils/mocks/user.mock');

class UserService {
  async getUsers() {
    const users = await Promise.resolve(userMock);
    return users || [];
  }

  async getUser() {
    const userId = await Promise.resolve(userMock[0].id);
    return userId || {};
  }

  async createUser() {
    const createUserId = await Promise.resolve(userMock[0].id);
    return createUserId;
  }

  async updateUser() {
    const updateUserId = await Promise.resolve(movieMock[0].id);
    return updateUserId;
  }

  async deleteUser() {
    const deletedUserId = await Promise.resolve(movieMock[0].id);
    return deletedUserId;
  }
}

module.exports = UserService;
