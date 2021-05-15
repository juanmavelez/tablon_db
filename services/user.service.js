const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUser(userData) {
    const [user] = await this.mongoDB.getAll(this.collection, userData);
    return user;
  }

  async getUsers({ _id }) {
    const query = _id && { _id: { $in: _id } };
    const users = await this.mongoDB.getAll(this.collection, query);
    return users || [];
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password: hashedPassword,
    });

    return createUserId;
  }
}

module.exports = UsersService;
