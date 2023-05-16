import express from 'express'
import { adminLogin,getAlluser } from '../controller/adminController.js'
import authenticateUser from '../middlewares/authenticateAdmin.js'

const router = express.Router()
router.post('/login',adminLogin)
router.get('/',authenticateUser)
router.get('/get_all_users',getAlluser)
export  {router as adminRouter}