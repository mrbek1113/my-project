import { Router } from "express";
import bodyValidate from "../../../core/body-validate.middleware";
import mentorController from "./mentor.controller";
import mentorModel from "./mentor.model";

const router=Router()
router.post('/',bodyValidate(mentorModel.createMentorScheme),mentorController.createMentor)
router.get('/',mentorController.getAllMentor)


export default router