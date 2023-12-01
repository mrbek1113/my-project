import { Router } from "express";
import auth from './auth'
import user from './user'
import userController from "../../user/user.controller";


const router =Router()
    .use('/auth', auth)
    .use('/user', userController.createUser)

export default router