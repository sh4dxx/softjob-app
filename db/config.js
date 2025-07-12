import pg from 'pg'
import 'dotenv/config'

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env

const poll = new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  allowExitOnIdle: true
})

poll.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err)
  } else {
    console.log('Conexión exitosa a la base de datos:', res.rows[0])
  }
})

export default poll
