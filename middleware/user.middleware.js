import { getUserModel } from '../src/models/usersModel.js'

const createUserMiddleware = async (req, res, next) => {
  try {
    const { email } = req.body
    if (!email){ return res.status(400).json({ message: 'El correo electronico es un campo obligatorio.'}) }
    const user = await getUserModel(email)
    if(user){ return res.status(400).json({ message: 'El usuario ya existe.' }) }
    next()
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Hubo un problema al crear el usuario.' })
  }
}

export { createUserMiddleware }
