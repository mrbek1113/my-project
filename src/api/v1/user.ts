import { Router } from "express";
import userController from "../../user/user.controller";
const router=Router()
.post('/user',userController.createUser)
.put('/:id',userController.updateUser)

export default router