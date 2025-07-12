import { getUserModel } from '../models/usersModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await getUserModel(email)
    if (!user) { return res.status(401).json({ message: 'Usuario no existe.' }) }
    
    // COMPARA LAS CONTRASEÑAS
    const isPassValido = bcrypt.compareSync(password, user.password)
    if (!isPassValido) { return res.status(401).json({ message: 'Usuario con acceso no valido.' }) }

    // CREA EL TOKEN Y FIRMA
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1hr' })
    return res.status(200).json({ token })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { loginUser }