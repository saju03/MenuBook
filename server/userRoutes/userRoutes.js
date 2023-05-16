import express from 'express'
import { userLogin, userSignup } from '../controller/userController.js'
import authenticateUser from '../middlewares/authentication.js'

const router = express.Router()

router.get('/',authenticateUser)
router.post('/signup',userSignup)
router.post('/login',userLogin)

export  {router as userRouter}