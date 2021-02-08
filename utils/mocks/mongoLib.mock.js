const sinon = require('sinon');
const usersMock = require('./users.mock');
const coursesMock = require('./courses.mock');

const { UserServiceMock, filteredUsersMock } = require('./userService.mock');
const { CourseServiceMock, filteredCoursesMock } = require('./courseService.mock');

const getAllStub = sinon.stub();
getAllStub.withArgs('users').resolves(usersMock);
getAllStub.withArgs('courses').resolves(coursesMock);

const interestQuery = { interest: { $in: ['1'] } };
getAllStub.withArgs('users', interestQuery).resolves(filteredUsersMock('1'));
getAllStub.withArgs('courses', interestQuery).resolves(filteredCoursesMock('1'));

getAllStub.withArgs('users', []).resolves([]);
const getStub = sinon.stub();
getStub.withArgs('users').resolves(usersMock[0]);
getStub.withArgs('courses').resolves(coursesMock[0]);

const createStub = sinon.stub();
createStub.withArgs('users').resolves(usersMock[0].id);
createStub.withArgs('courses').resolves(coursesMock[0].id);

const updateStub = sinon.stub();
updateStub.withArgs('users').resolves(usersMock[0]);
updateStub.withArgs('courses').resolves(coursesMock[0]);

const deleteStub = sinon.stub();
deleteStub.withArgs('users').resolves(usersMock[0].id);
deleteStub.withArgs('courses').resolves(coursesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }
  get(collection, data) {
    return getStub(collection, data);
  }
  create(collection, data) {
    return createStub(collection, data);
  }
  update(collection, data) {
    return updateStub(collection, data);
  }
  delete(collection, data) {
    return deleteStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  getStub,
  updateStub,
  deleteStub,
  MongoLibMock,
};
