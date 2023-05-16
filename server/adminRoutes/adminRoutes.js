import express from 'express'
import { adminLogin } from '../controller/adminController.js'
import authenticateUser from '../middlewares/authenticateAdmin.js'

const router = express.Router()
router.post('/login',adminLogin)
router.get('/',authenticateUser)

export  {router as adminRouter}