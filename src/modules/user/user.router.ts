import { Router } from "express";
import userController from "./user.controller";
import bodyValidate from "../../core/body-validate.middleware";
import userModel from "./user.model";

const router = Router()

    .post('/', bodyValidate(userModel.createUserScheme), userController.createUser)
    .put('/:id', userController.updateUser)
    .get('/', userController.getAllUser)
    .delete('/:id', bodyValidate(userModel.deleteUserSchema), userController.deleteUser)

export default router