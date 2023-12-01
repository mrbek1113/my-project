import { NextFunction, Request, Response } from "express"
import authService from "./auth.service"

const login=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {user_name,password}=req.body
        const user=await authService.login(user_name,password)
        res.send({
            message:"Login succesfully",
            user
        })
    }
     catch (e) {
        next(e)
    }
}
export default{
    login
}