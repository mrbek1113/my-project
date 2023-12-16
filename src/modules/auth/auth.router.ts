import { Router } from "express";
import authController from "./auth.controller";
import bodyValidate from "../../core/body-validate.middleware";
import authModel from "./auth.model";
const router = Router()

router.post('/login', bodyValidate(authModel.loginScheme), authController.login)


export default router