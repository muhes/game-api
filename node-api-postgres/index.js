const db = require('./queries')
//const model = require('./models/index.js')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3050
const model = require('../models/index.js');
const game_player = require('../models').game_player
//const cors = require('cors')
//app.use(cors())

app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
// port is dynamically assigned by heroku
  app.listen(process.env.PORT || port, () => {
    console.log(`App running on port ${port}.`)
  })

  //app.get('/users', db.getUsers)
  app.get('/users', function(req,res){
    model.game_player.findAll({})
    .then((result)=> {
      res.status(200).send(result)
    })
    .catch((error)=>{
      res.status(400).send(error)
    })
  })

  app.post('/users/room', function(req,res){
    model.game_player.findAll({ where: {
      roomId: req.body.roomId
    }, })
    .then((result)=> {
      res.status(200).send(result)
    })
    .catch((error)=>{
      res.status(400).send(error)
    })
  })

  //app.post('/users', db.createUser)
  app.post('/users', function(req,res){
    const name = req.body.name
    console.log()
    //model.game_player.create({player_id: parseInt(req.body.player_id), room_id: parseInt(req.body.room_id), host: false})
    model.game_player.create({name: name, roomId: req.body.roomId})
    //game_player.findOrCreate({player_id: parseInt(req.body.player_id), room_id: parseInt(req.body.room_id), host: false})
    .then((result)=> {
      res.status(200).send(result)
    })
    .catch((error)=>{
      console.log(error)
      res.status(400).send(error)
    })
  })
  app.delete('/users', db.deletePlayer)