import { Router } from "express";
import bodyValidate from "../../../core/body-validate.middleware";
import adminController from "../admin/admin.controller";
import adminModel from "./admin.model";

const router=Router()
router.post('/',bodyValidate(adminModel.createAdminScheme),adminController.createAdmin)
router.get('/',adminController.getAllAdmin)

export default router