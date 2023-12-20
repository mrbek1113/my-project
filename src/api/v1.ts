import { Router } from 'express'
import { authRouter, userRouter,bigAdminRouter,educationRouter,studentRouter,mentorRouter,adminRouter,managerRouter, directionTypeRouter} from '../modules/index'
const router = Router()
router.use('/auth', authRouter)
router.use('/user',userRouter)
router.use('/admin',adminRouter)
router.use('/mentor',mentorRouter)
router.use('/student',studentRouter)
router.use('/education',educationRouter)
router.use('/big_admin',bigAdminRouter)
router.use('/manager',managerRouter)
router.use('/directionType',directionTypeRouter)


export default router