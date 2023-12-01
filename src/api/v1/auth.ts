import { Router } from "express";
import authController from "../../auth/auth.controller";
 const router=Router()
 
    .post('/login',authController.login)
    

export default router