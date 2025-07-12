import pool from '../../db/config.js'
import bcrypt from 'bcryptjs'

// REGISTER ==============
export const createUserModel = async (email, password, rol, lenguage) => {
  const hashedPassword = bcrypt.hashSync(password)
  console.log( hashedPassword )
  const SQLquery = {
    text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email',
    values: [email, hashedPassword, rol, lenguage]
  }
  const response = await pool.query(SQLquery)
  return response.rows[0]
}

// LOGIN ==============
export const getUserModel = async (email) => {
  const SQLquery = {
    text: 'SELECT * FROM usuarios WHERE email = $1',
    values: [email]
  }
  const response = await pool.query(SQLquery)
  return response.rows[0]
}