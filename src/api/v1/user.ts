import { Router } from "express";
import userController from "../../user/user.controller";
const router = Router()
    .post('/', userController.createUser)
    .put('/:id', userController.updateUser)
    .get('/', userController.getAllUser)
    .delete('/:id', userController.deleteUser)

export default router