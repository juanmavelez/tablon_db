const express = require('express');
const app = express();
const { config } = require('./config');

const userApi = require('./routes/users.routes');
const courseApi = require('./routes/course.routes');
const lessonApi = require('./routes/lesson.routes');

const { logErrors, errorHandler, wrapError } = require('../tablon_db/utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());
userApi(app);
courseApi(app);
lessonApi(app);

//catch 404
app.use(notFoundHandler);
//Errors Middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
