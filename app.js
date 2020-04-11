const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
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

app.get('/:tech', async (req, res) => {
  const api_url = `https://www.udemy.com/api-2.0/courses/?search=${req.params.tech}&category=Development&ordering=relevance&is_affiliate_agreed=True&page=1&page_size=20`;
  const fetch_response = await fetch(api_url, {
    method: 'GET',
    headers: {
      Authorization: config.UDEMY_AUTH,
    },
  });
  const json = await fetch_response.json();
  console.log(json.results.length);
  res.json(json);
});
