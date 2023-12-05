import { Router } from "express";
import authController from "../../auth/auth.controller";
import bodyValidate from "../../common/body-validate.middleware";
import authModel from "../../auth/auth.model";
 const router=Router()
 
    .post('/login',bodyValidate(authModel.loginScheme),authController.login)
    

export default router