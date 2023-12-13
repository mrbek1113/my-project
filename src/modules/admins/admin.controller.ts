import { NextFunction, Request, Response } from "express";
import adminService from "./admin.service";


const createAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {first_name,last_name,user_name,phone,password}=req.body
    const admin=await adminService.createAdmin(first_name,last_name,user_name,phone,password)
    res.status(201).send({
        message:"Admin created",
      "Mentor":admin
    })
} catch (e) {
    next(e)
}
}
const getAllAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {user_name}=req.body
    const admin=await adminService.getAllAdmin(user_name)
    res.status(202).send({
        message:"All Admins",
        "Admins":admin
    })
} catch (e) {
    next(e)
}
}
const updateAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const { first_name,last_name,user_name,password,phone } = req.body
    const updatedAdmin=await adminService.updateAdmin(+id,first_name,last_name,user_name,password,phone)
    res.status(200).send({
        message:"Admin Updated",
        "UpdateAdmin":updatedAdmin
    })
} catch (e) {
    next(e)
}
}
const deleteAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const {password:pass, ...rest}=await adminService.deleteAdmin(+id)
    
    res.status(200).send({
        message:"Admin deleted",
        "Deleted Admin":rest
    })    
} catch (e) {
    next(e)
}

}

export default {
createAdmin,
getAllAdmin,
updateAdmin,
deleteAdmin
}