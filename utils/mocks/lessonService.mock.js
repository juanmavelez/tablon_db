const lessonsMock = require('./lessons.mock');

class LessonServiceMock {
  async getLessons() {
    return Promise.resolve(lessonsMock);
  }
  async getLesson(id) {
    return Promise.resolve(lessonsMock[0]);
  }
  async createLesson() {
    return Promise.resolve(lessonsMock[0]);
  }
  async updateLesson() {
    return Promise.resolve(lessonsMock[0]);
  }
  async deleteLesson() {
    return Promise.resolve(lessonsMock[0]);
  }
}

function filteredLessonsMock(course) {
  return lessonsMock.filter((lesson) => (lesson.course = course));
}

module.exports = {
  LessonServiceMock,
  filteredLessonsMock,
};
