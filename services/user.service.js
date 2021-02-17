const { query } = require('express');
const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UserService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUsers({ email }) {
    const users = await this.mongoDB.getAll(this.collection);
    return users || [];
  }

  async getUser({ email }) {
    const user = await this.mongoDB.get(this.collection, email);
    return user || {};
  }

  async createUser({ user }) {
    const { name, email, passord } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password: hashedPassword,
    });
    return createdUserId;
  }

  async updateUser({ userId, user }) {
    const updateUserId = await this.mongoDB.update(this.collection, userId, user);
    return updateUserId;
  }

  async deleteUser({ userId }) {
    const deletedUserId = await this.mongoDB.delete(this.collection, userId);
    return deletedUserId;
  }
}

module.exports = UserService;
