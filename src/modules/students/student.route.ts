import { Router } from "express";
import userController from "../user/user.controller";
import studentController from "./student.controller";

const router=Router()
router.post('/',studentController.createStudent)

export default router