require('dotenv').config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
let UDEMY_AUTH = process.env.UDEMY_AUTH;

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = { PORT, UDEMY_AUTH, MONGODB_URI };
