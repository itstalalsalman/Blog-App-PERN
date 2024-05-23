//connection to db
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'blogapp',
  })
async function check(){
    await client.connect()
    // const res = await client.query('SELECT * FROM blogs')
    // console.log(res.rows[0]) // Hello world!
    // await client.end()
}

check();
module.exports = client;