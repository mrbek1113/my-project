import { Router } from "express";
import directionControllerType from "./directionType.controller";
import directionTypeController from "./directionType.controller";

const router=Router()

router.post('/',directionTypeController.createDirectionType)
router.get('/',directionTypeController.getAllDirectionType)
router.put('/:id',directionTypeController.updateDirectionType)
router.delete('/:id',directionTypeController.deleteDirectionType)

export default router