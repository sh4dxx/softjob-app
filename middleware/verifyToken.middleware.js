import jwt from 'jsonwebtoken'
import 'dotenv/config'

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(400).json({ message: 'El token debe estar presente.' })
    }
    const extractToken = token.split(' ')[1]
    const decoded = jwt.verify(extractToken, process.env.JWTSECRET)
    req.user = decoded.email
    next()
  } catch (error) {
    return res.status(400).json({ message: 'El token no es valido.' })
  }
}

export { verifyToken }
