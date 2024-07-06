const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;
const prefix = process.env.API_PREFIX || '/api/v1';
 // Database
const databaseName = process.env.DATABASE_NAME || '';
const userName = process.env.USER_NAME || 'postgres';
const password = process.env.PASSWORD || '';
const host = process.env.HOST || '';
const JWT_TOKEN = process.env.JWT_TOKEN;
 
 
 

module.exports = {
  port,
  JWT_TOKEN,
  prefix,
  database: {
    name: databaseName,
    user: userName,
    password,
    host,
  },
   
};