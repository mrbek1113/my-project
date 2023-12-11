import { Router } from "express";
import auth from './auth/auth.route'
import user from './user/user.route'
import student from './students/student.route'


const router =Router()
    .use('/auth', auth)
    .use('/user', user)
    .use('/student',student)
    
export default router