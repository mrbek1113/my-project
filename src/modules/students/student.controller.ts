import { NextFunction, Request, Response } from "express";
import studentService from "./student.service";

const createStudent=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {first_name,last_name,user_name,phone,password}=req.body
    const student=await studentService.createStudent(first_name,last_name,user_name,phone,password)
    res.status(201).send({
        message:"Student created",
      student
    })
} catch (e) {
    next(e)
}
}

export default {
    createStudent
}