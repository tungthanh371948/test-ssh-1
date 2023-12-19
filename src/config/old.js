require('dotenv').config();

const mysql = require('mysql2');

//test connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port:  process.env.DB_PORT, //default: 3307
    user:  process.env.DB_USER, //default: empty
    password:  process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });


  module.exports = connection;
