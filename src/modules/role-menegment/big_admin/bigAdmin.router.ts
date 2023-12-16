import { Router } from "express";
import bodyValidate from "../../../core/body-validate.middleware";
import bigAdminController from "./bigAdmin.controller";
import bigAdminModel from "./bigAdmin.model";


const router=Router()
router.post('/',bodyValidate(bigAdminModel.createBigAdminScheme),bigAdminController.createBigAdmin)
router.get('/',bigAdminController.getAllBigAdmin)


export default router