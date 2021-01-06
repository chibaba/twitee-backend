const { createPool } = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

const createdPool = new createPool({ connectionString: process.env.DATABASE_URI })
console.log("database connected successfully");

module.exports = createdPool