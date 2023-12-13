import { NextFunction, Request, Response } from "express";
import studentService from "./mentor.service";
import userService from "../user/user.service";
import mentorService from "./mentor.service";

const createMentor=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {first_name,last_name,user_name,phone,password}=req.body
    const mentor=await studentService.createMentor(first_name,last_name,user_name,phone,password)
    res.status(201).send({
        message:"Mentor created",
      "Mentor":mentor
    })
} catch (e) {
    next(e)
}
}
const getAllMentor=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {user_name}=req.body
    const mentor=await mentorService.getAllMentor(user_name)
    res.status(202).send({
        message:"All Mentors",
        "Mentors":mentor
    })
} catch (e) {
    next(e)
}
}
const updateMentor=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const { first_name,last_name,user_name,password,phone } = req.body
    const updatedMentor=await mentorService.updeteMentor(+id,first_name,last_name,user_name,password,phone)
    res.status(200).send({
        message:"Mentor Updated",
        "UpdateMentor":updatedMentor
    })
} catch (e) {
    next(e)
}
}
const deleteMentor=async(req:Request,res:Response,next:NextFunction)=>{
try {
    const {id}=req.params
    const {password:pass, ...rest}=await mentorService.deleteMentor(+id)
    
    res.status(200).send({
        message:"Mentor deleted",
        rest
    })    
} catch (e) {
    next(e)
}

}

export default {
createMentor,
updateMentor,
getAllMentor,
deleteMentor
}