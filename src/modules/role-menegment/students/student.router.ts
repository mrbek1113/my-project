import { Router } from "express";
import bodyValidate from "../../../core/body-validate.middleware";
import studentController from "./student.controller";
import studentModel from "./student.model";

const router=Router()
router.post('/',bodyValidate(studentModel.createStudentScheme),studentController.createStudent)
router.get('/',studentController.getAllStudent)

export default router