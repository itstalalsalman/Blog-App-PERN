const express = require('express')
const app = express()
const port = 3000
const client = require('./db/conn')
const multer = require('multer')

app.use(express.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.json({"message":'Hello World!'})
})

app.get('/blog', async (req, res) => {
  const result = await client.query("SELECT * from blogs")
  const resRow = result.rows[0]
  res.json({"data": resRow})
})

app.post('/blog', async (req, res) => {
  const result = await client.query("INSERT INTO blogs (title, image, post) VALUES ($1, $2, $3)", [
    req.body.title,
    req.body.image,
    req.body.post
  ])
  res.json(result.rows);
})

app.post('/blogimage', upload.single('file'), function (req, res, next) {
  // req.file is the `file` file
  // req.body will hold the text fields, if there were any
  res.json(req.file)
})

app.post('/', (req, res) => {
    res.send("Got a POST req")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})