import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import userRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'
import { userLog } from './middleware/log.middleware.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use(userLog)

app.use(authRoutes)
app.use(userRoutes)

app.listen(PORT, console.log(`🔥Server is running on http://localhost:${PORT}`))
