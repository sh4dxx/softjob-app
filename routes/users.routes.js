import { Router } from 'express'
import { registerUser, getUser } from '../src/controllers/usersControllers.js'
import { createUserMiddleware } from '../middleware/user.middleware.js'
import { verifyToken } from '../middleware/verifyToken.middleware.js'

const router = Router()

router.post('/usuarios', createUserMiddleware, registerUser)
router.get('/usuarios', verifyToken, getUser)

export default router
