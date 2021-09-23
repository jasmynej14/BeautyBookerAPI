require('dotenv').config()
const pgp = require('pg-promise')(/* options */)

console.log(process.env.DB_CONNECTION)
const connection = {
    connectionString:'postgres://afoyxmtaxrksyb:c1b5948ebc51405ea25533451ddf9dc728fa21a5fb2db83ffcc829ea90656f4f@ec2-18-209-143-227.compute-1.amazonaws.com:5432/d5kqruaos8opcg',
    ssl:{
        rejectUnauthorized:false
    }
}
const db = pgp(connection)

db.any('SELECT * FROM test_table')
.then(function(data){
    console.log(data)
})
.catch(err => console.log(err))
