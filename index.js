const express = require('express');
const app = express();
const { config } = require('./config');

const userApi = require('./routes/users.routes');
const courseApi = require('./routes/course.routes');
const lessonApi = require('./routes/lesson.routes');
//body parser
app.use(express.json());
userApi(app);
courseApi(app);
lessonApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
