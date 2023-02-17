import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import { MongoClient } from 'mongodb'
const CURRENT_WORKING_DIR = process.cwd()

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mevnBoilerplate'
const app = express()
let port = process.env.PORT || 3000

// if development
devBundle.compile(app)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/favicon.ico', (req, res) => {
  res.status(200).sendFile(path.join(CURRENT_WORKING_DIR, 'assets/favicon.ico'))
})

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(CURRENT_WORKING_DIR, 'template.html'))
})


app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})


MongoClient.connect(url, (err, db) => {
  console.log("Connected successfully to mongodb server")
  db.close()
})
