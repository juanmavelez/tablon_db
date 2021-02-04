const express = require('express');
const app = express();

const { config } = require('./config');
const userApi = require('./routes/users.routes');

userApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
