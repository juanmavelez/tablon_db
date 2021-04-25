const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('./config');

const userApi = require('./routes/user.routes');
const courseApi = require('./routes/course.routes');
const userCoursesApi = require('./routes/userCourses.routes');
const authApi = require('./routes/auth.routes');

const { logErrors, errorHandler, wrapError } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(cors());
app.use(express.json());

//routers
userApi(app);
courseApi(app);
userCoursesApi(app);
authApi(app);

//catch 404
app.use(notFoundHandler);
//Errors Middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
