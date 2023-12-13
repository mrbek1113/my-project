import { Router } from "express";
import auth from './auth/auth.route'
import user from './user/user.route'
import student from './students/student.route'
import education from './education/education.route'
import mentor from './mentor/mentor.route'
import admin from './admins/admin.rute'
import bigAdmin from './big_admin/bigAdmin.route'
const router =Router()


    .use('/auth', auth)
    .use('/user', user)
    .use('/student',student)
    .use('/education',education)
    .use('/mentor',mentor)
    .use('/admin',admin)
    .use('/big_admin',bigAdmin)
    
export default router