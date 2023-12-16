import { Router } from "express";
import callcenterController from "./callcenter.controller";

const router=Router()
router.post('/',callcenterController.createCallCenter)
router.get('/',callcenterController.getAllCallCetner)


export default router