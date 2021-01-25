const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getUsers = (request, response) => {
  
    pool.query('SELECT * FROM players', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    console.log("reached")
    console.log(request.body.room)

    const { name, room } = request.body
    console.log(name)
    console.log("room ",room)
  
    pool.query('INSERT INTO game_players (name, room) VALUES ($1, $2)', [name, room])
    .then((results)=>{
        console.log(results['rows'])
        console.log(results['fields'])
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
    .catch((error)=>{
        throw error
    })
    
  }

  const deletePlayer = (request,response) =>{
    pool.query('delete from players where name = $1', [request.body.name])
    .then((results)=>{
      response.status(200).send(`player deleted`)
  })
  .catch((error)=>{
      throw error
  })
  }

  module.exports = {
    getUsers,
    createUser,
    deletePlayer
  }