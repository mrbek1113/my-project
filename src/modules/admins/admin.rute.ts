import { Router } from "express";
import bodyValidate from "../../core/body-validate.middleware";
import adminController from "./admin.controller";
import adminModel from "./admin.model";

const router=Router()
router.post('/',bodyValidate(adminModel.createAdminScheme),adminController.createAdmin)
router.get('/',adminController.getAllAdmin)
router.put('/:id',adminController.updateAdmin)
router.delete('/:id',bodyValidate(adminModel.deleteAdminSchema),adminController.deleteAdmin)

export default router