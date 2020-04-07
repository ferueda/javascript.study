const express = require('express');
const app = express();
const http = require('http');
const fetch = require('node-fetch');
const config = require('./utils/config');
const logger = require('./utils/logger');

app.get('/:tech', async (req, res) => {
  const api_url = `https://www.udemy.com/api-2.0/courses/?search=${req.params.tech}&category=Development&ordering=relevance&page=1&page_size=20`;
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

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
