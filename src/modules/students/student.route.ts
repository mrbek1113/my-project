import { Router } from "express";
import bodyValidate from "../../core/body-validate.middleware";
import studentController from "./student.controller";
import studentModel from "./student.model";

const router=Router()
router.post('/',bodyValidate(studentModel.createStudentScheme),studentController.createStudent)
router.get('/',studentController.getAllStudent)
router.put('/:id',studentController.updateUser)
router.delete('/:id',bodyValidate(studentModel.deleteStudentSchema),studentController.deleteStudent)

export default router