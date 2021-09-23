require('dotenv').config()
const pgp = require('pg-promise')(/* options */)

const connection = {
    connectionString:process.env.DB_CONNECTION,
    ssl:{
        rejectUnauthorized:false
    }
}

const db = pgp(connection);

export default db;