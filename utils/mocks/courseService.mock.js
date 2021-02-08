const coursesMock = require('./courses.mock');

class CourseServiceMock {
  async getCourses() {
    return Promise.resolve(coursesMock);
  }
  async getCourse(id) {
    return Promise.resolve(coursesMock[0]);
  }
  async createCourse() {
    return Promise.resolve(coursesMock[0]);
  }
  async updateCourse() {
    return Promise.resolve(coursesMock[0]);
  }
  async deleteCourse() {
    return Promise.resolve(coursesMock[0]);
  }
}

function filteredCoursesMock(tag) {
  return coursesMock.filter((course) => (course.tag = tag));
}

module.exports = {
  CourseServiceMock,
  filteredCoursesMock,
};
