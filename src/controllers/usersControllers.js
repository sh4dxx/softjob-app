import { createUserModel, getUserModel } from '../models/usersModel.js'

export const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    const user = await createUserModel(email, password, rol, lenguage)
    res.status(201).json({ message: 'Usuario creado correctamente.', user })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export const getUser = async (req, res) => {
  try {
    const email = req.user
    const user = await getUserModel(email)
    if (!user) { return res.status(404).json({ message: 'Usuario no encontrado.' }) }
    res.status(200).json([user])
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al obtener datos del usuario.', error: error.message })
  }
}
