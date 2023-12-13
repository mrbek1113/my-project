import { NextFunction, Request, Response } from "express";
import bigAdminService from "./bigAdmin.service";
const createBigAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {first_name,last_name,user_name,phone,password}=req.body
    const bigAdmin=await bigAdminService.createBigAdmin(first_name,last_name,user_name,phone,password)
    res.status(201).send({
        message:"Big Admin created",
      "Big Admin":bigAdmin
    })
} catch (e) {
    next(e)
}
}
const getAllBigAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {user_name}=req.body
    const bigAdmin=await bigAdminService.getAllBigAdmin(user_name)
    res.status(202).send({
        message:"All Big Admins",
        "Big admins":bigAdmin
    })
} catch (e) {
    next(e)
}
}
const updateBigAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const { first_name,last_name,user_name,password,phone } = req.body
    const updatedBigAdmin=await bigAdminService.updateBigAdmin(+id,first_name,last_name,user_name,password,phone)
    res.status(200).send({
        message:"Big Admin Updated",
        "Update Big Admin":updatedBigAdmin
    })
} catch (e) {
    next(e)
}
}
const deleteBigAdmin=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const {password:pass, ...rest}=await bigAdminService.deleteBigAdmin(+id)
    
    res.status(200).send({
        message:"Big admin deleted",
        rest
    })    
} catch (e) {
    next(e)
}

}

export default {
createBigAdmin,
getAllBigAdmin,
updateBigAdmin,
deleteBigAdmin
}