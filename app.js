const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const udemyCourses = require('./controllers/udemyCourses');
const middleware = require('./utils/middleware');
const fetch = require('node-fetch');

const logger = require('./utils/logger');
const mongoose = require('mongoose');

logger.info('Connectingo to ', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connectingo to MongoDB: ', error.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/courses', udemyCourses.udemyCoursesRouter);
app.use('/api/udemy', udemyCourses.udemyCoursesRouter);

setInterval(() => {
  udemyCourses.updateUdemyCoursesDB();
}, 1000 * 60 * 12);

// udemyCourses.updateUdemyCoursesDB();

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
