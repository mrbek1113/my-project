import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma.servise";
import userService from "./user.service";

const createUser=async(req:Request,res:Response,next:NextFunction)=>{
try {
    
    const{first_name,last_name,phone,user_name,password}=req.body
    const user=await userService.createUser(first_name,last_name,phone,user_name,password)
    res.send({
        message:"User created",
        user
    })
} catch (e) {
    next(e)
}
}
export default {
    createUser
}