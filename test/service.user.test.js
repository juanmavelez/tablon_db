const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub, getStub, updateStub, deleteStub } = require('../utils/mocks/mongoLib.mock');
const usersMock = require('../utils/mocks/users.mock');

describe('Test services - users', function () {
  const UserService = proxyquire('../services/user.service', {
    '../lib/mongo.js': MongoLibMock,
  });
  const userService = new UserService();

  describe('getUsers method is called', async function () {
    it('getAll MongoLib Method', async function () {
      await userService.getUsers({});
      assert.deepStrictEqual(getAllStub.called, true);
    });
    it('should return an array of users', async function () {
      const result = await userService.getUsers({});
      const expected = usersMock;
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('getUser method is called', async function () {
    it('get call MongoLib Method', async function () {
      await userService.getUser({});
      assert.deepStrictEqual(getStub.called, true);
    });
    it('should return an user', async function () {
      const result = await userService.getUser({});
      const expected = usersMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });

  describe('createUser method is called', async function () {
    it('create call MongoLib Method', async function () {
      await userService.createUser({});
      assert.deepStrictEqual(getStub.called, true);
    });
    it('should return an user id', async function () {
      const result = await userService.createUser({});
      const expected = usersMock[0].id;
      assert.deepStrictEqual(result, expected);
    });
  });
  describe('updateUser method is called', async function () {
    it('update call MongoLib Method', async function () {
      await userService.updateUser({});
      assert.deepStrictEqual(updateStub.called, true);
    });
    it('should return an user', async function () {
      const result = await userService.updateUser({});
      const expected = usersMock[0];
      assert.deepStrictEqual(result, expected);
    });
  });
  describe('Delete method is called', async function () {
    it('delete call MongoLib Method', async function () {
      await userService.deleteUser({});
      assert.deepStrictEqual(deleteStub.called, true);
    });
    it('should return an user id', async function () {
      const result = await userService.deleteUser({});
      const expected = usersMock[0].id;
      assert.deepStrictEqual(result, expected);
    });
  });
});
