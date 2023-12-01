import { Router } from "express";
const router = Router()
import v1 from './v1'

//versions

router.use('/v1', v1)

export default router