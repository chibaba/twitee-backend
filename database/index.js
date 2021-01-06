const { createPool } = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

const createPool = new createPool({ connectionString: process.env.DATABASE_URI })

module.exports = createPool()