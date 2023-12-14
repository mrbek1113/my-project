import { NextFunction, Request, Response } from "express";
import AdminService from "./admin.service";

const createAdmin=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {first_name, last_name, user_name, password, phone}=req.body
        const admin=await AdminService.createAdmin(first_name, last_name, user_name, password, phone)
        res.status(201).send({
            messsage:"Admin Created",
            "Admins":admin
        })

    } catch (e) {
        next(e)
    }
}
const getAllAdmin=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const admin=await AdminService.getAllAdmin()
        res.status(200).send({
            message:"All Admins",
            "Admins":admin
        })

    } catch (e) {
        next(e)
    }
}
export default{
    createAdmin,
    getAllAdmin
}