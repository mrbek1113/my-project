import { NextFunction, Request, Response } from "express";
import studentService from "./student.service";
import userService from "../user/user.service";

const createStudent=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {first_name,last_name,user_name,phone,password}=req.body
    const student=await studentService.createStudent(first_name,last_name,user_name,phone,password)
    res.status(201).send({
        message:"Student created",
      "student":student
    })
} catch (e) {
    next(e)
}
}
const getAllStudent=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {user_name}=req.body
    const student=await studentService.getAllStudent(user_name)
    res.status(202).send({
        message:"All Student",
        "All students":student
    })
} catch (e) {
    next(e)
}
}
const updateUser=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const { first_name,last_name,user_name,password,phone } = req.body
    const updatedStudent=await studentService.updeteStudent(+id,first_name,last_name,user_name,password,phone)
    res.status(200).send({
        message:"Student Updated",
        "UpdateStudent":updatedStudent
    })
} catch (e) {
    next(e)
}
}
const deleteStudent=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const {password:pass, ...rest}=await studentService.deleteStudent(+id)
    
    res.status(200).send({
        message:"Student deleted",
     rest
    })    
} catch (e) {
    next(e)
}

}

export default {
    createStudent,
    getAllStudent,
    deleteStudent,
    updateUser
}