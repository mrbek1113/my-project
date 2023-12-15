import { Router } from "express";
import managerController from "./manager.controller";
 const router=Router()
 router.post('/',managerController.createManager)
 router.get('/',managerController.getAllManager)
 export default router