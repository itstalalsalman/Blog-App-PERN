const express = require('express')
const app = express()
const port = 3000
const client = require('./db/conn')

app.get('/', (req, res) => {
  res.json({"message":'Hello World!'})
})

app.get('/blog', async (req, res) => {
  const result = await client.query("SELECT * from blogs")
  const resRow = result.rows[0]
  res.json({"data": resRow})
})

app.post('/', (req, res) => {
    res.send("Got a POST req")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})