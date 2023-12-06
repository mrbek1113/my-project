import { Router } from "express";
import auth from './auth/auth.route'
import user from './user/user.route'


const router =Router()
    .use('/auth', auth)
    .use('/user', user)
    
export default router