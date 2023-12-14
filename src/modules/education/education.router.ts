import { Router } from "express"
import educationsController from "./education.controller"

const router = Router()

.post('/', educationsController.createEducation)
.put('/:id', educationsController.updateEducation)
.get('/', educationsController.getAllEducation)
.delete('/:id', educationsController.deleteEducation)

export default router