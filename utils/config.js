require('dotenv').config();

let PORT = process.env.PORT;
const UDEMY_AUTH = process.env.UDEMY_AUTH;

module.exports = { PORT, UDEMY_AUTH };
