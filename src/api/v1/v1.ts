import { Router } from 'express'
import index from '../../modules/index'


const router=Router()
    .use('/',index)
    
export default router