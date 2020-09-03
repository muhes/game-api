const db = require('./queries')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3050
//const cors = require('cors')
//app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  app.get('/users', db.getUsers)
  app.post('/users', db.createUser)
  app.delete('/users', db.deletePlayer)