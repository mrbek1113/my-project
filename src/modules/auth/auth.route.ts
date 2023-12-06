import { Router } from "express";
import authController from "../../modules/auth/auth.controller";
import bodyValidate from "../../core/body-validate.middleware";
import authModel from "../../modules/auth/auth.model";
 const router=Router()
 
    .post('/login',bodyValidate(authModel.loginScheme),authController.login)
    

export default router